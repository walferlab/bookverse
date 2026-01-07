import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import mammoth from "mammoth";
import { supabase } from "../../lib/supabase";

export default function BookReader({ docxPath, title }) {
  const navigate = useNavigate();

  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔒 Prevent double execution (React StrictMode)
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!docxPath || fetchedRef.current) return;
    fetchedRef.current = true;
    fetchAndRenderDocx();
  }, [docxPath]);

  async function fetchAndRenderDocx() {
    try {
      setLoading(true);
      setError(null);

      const cleanPath = decodeURIComponent(
        docxPath
          .replace(/^https?:\/\/.*\/book-docs\//, "")
          .replace(/^\/+/, "")
      );

      const { data } = supabase.storage
        .from("book-docs")
        .getPublicUrl(cleanPath);

      if (!data?.publicUrl) {
        throw new Error("Failed to resolve public URL");
      }

      const res = await fetch(data.publicUrl);
      if (!res.ok) throw new Error("DOCX fetch failed");

      const buffer = await res.arrayBuffer();

      const result = await mammoth.convertToHtml(
        { arrayBuffer: buffer },
        {
          styleMap: [
            "p[style-name='Title'] => h1:fresh",
            "p[style-name='Heading 1'] => h2:fresh",
            "p[style-name='Heading 2'] => h3:fresh",
          ],
        }
      );

      setHtml(result.value);
    } catch (err) {
      console.error(err);
      setError("Failed to load book content");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#fef6d8] px-4 py-8">
      {/* Top Bar */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="
            px-4 py-2
            bg-white
            border-4 border-black
            rounded-xl
            font-bangers
            shadow-[4px_4px_0_#000]
            hover:-translate-y-0.5
            transition
          "
        >
          ⬅ BACK
        </button>

        <span
          className="hidden sm:block bg-red-500 text-white px-4 py-1
                     font-bangers border-2 border-black
                     shadow-[3px_3px_0_#000] -rotate-2"
        >
          READ MODE
        </span>
      </div>

      {/* Title */}
      {title && (
        <h1 className="text-center font-bangers text-3xl mb-8">
          {title}
        </h1>
      )}

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {loading && (
          <p className="text-center font-display py-20">
            Loading comic book…
          </p>
        )}

        {error && (
          <p className="text-center font-display py-20 text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && (
          <article
            className="
              bg-[#fffdf5]
              border-4 border-black
              rounded-2xl
              shadow-[10px_10px_0_#000]
              p-6 sm:p-10
              prose max-w-none
              font-author
              prose-headings:font-bangers
              prose-p:leading-relaxed
              text-lg
              font-medium
            "
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </section>
  );
}
