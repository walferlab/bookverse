import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footbar/page";
import ComicBookSection from "../../components/ui/comicBookSection";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Books() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const { data, error } = await supabase
      .from("books")
      .select("*")
      .order("modified_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setBooks(data);
    }
  }

  return (
    <>
      <Navbar />

       <div className="relative max-w-md flex my-10 mx-auto">
            <input
              type="text"
              placeholder="Search comics, topics, authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && search.trim()) {
                  navigate(`/search?q=${encodeURIComponent(search)}`);
                }
              }}
              className="w-full px-5 py-4 pl-12 rounded-xl border-4 border-black font-display
             shadow-[4px_4px_0_#000] bg-amber-50 outline-none mx-2"
            />

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer">
              <FaSearch />
            </span>
          </div>

      <ComicBookSection books={books} />

      <Footer />
    </>
  );
}