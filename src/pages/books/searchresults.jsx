import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import ComicBookCard from "../../components/ui/bookcard";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footbar/page";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q")?.toLowerCase() || "";

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase
        .from("books")
        .select("*");

      if (!error) setBooks(data || []);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  const results = books.filter((book) =>
    book.title?.toLowerCase().includes(query)
  );

  return (
    <>
    <Navbar />
    <div className="min-h-screen p-6 md:p-12">

      {/* Back */}
      <div
        className="top-3 left-3 flex items-center gap-2 font-display cursor-pointer"
        onClick={() => window.location.href = '/books'}
      >
        <IoArrowBackCircleSharp size={40} />
        Back
      </div>

      <h1 className="text-4xl md:text-6xl font-author font-bold text-center mb-10">
        SEARCH RESULTS
      </h1>

      <p className="text-center mb-12 font-display text-lg">
        Results for <span className="font-bold">"{query}"</span>
      </p>

      {loading ? (
        <p className="text-center font-display text-xl">Searching…</p>
      ) : results.length === 0 ? (
        <p className="text-center font-display text-xl">
          No comics found
        </p>
      ) : (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {results.map((book) => (
            <div key={book.id} className="flex justify-center">
              <ComicBookCard
                id={book.id}
                imgUrl={book.thumbnail_url}
                title={book.title}
                updatedAt={new Date(book.modified_at).toLocaleDateString()}
              />
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}
