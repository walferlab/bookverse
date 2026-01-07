import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import BookReader from "../../components/ui/bookreader";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchBook();
  }, [id]);

  async function fetchBook() {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setBook(data);
    } catch (err) {
      console.error("Failed to fetch book:", err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="text-center py-20">Loading book…</p>;
  }

  if (!book) {
    return <p className="text-center py-20">Book not found</p>;
  }

  return (
    <BookReader
      title={book.title}
      docxPath={book.docx_url}
    />
  );
}
