import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footbar/page";
import ComicBookSection from "../../components/ui/comicBookSection";
import ComicHero from "../../components/ui/comicHero";

export default function Home() {
  const [books, setBooks] = useState([]);

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

      <section>
        <ComicHero search={search} setSearch={setSearch} />
      </section>

      <ComicBookSection books={books} />

      <Footer />
    </>
  );
}
