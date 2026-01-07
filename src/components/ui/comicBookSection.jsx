import { useMemo, useState } from "react";
import ComicBookCard from "./bookcard";

const BOOKS_PER_PAGE = 6;

const CATEGORY_LIST = ["All", "Horror", "Mystery", "Adventurus"];

export default function ComicBooksSection({ books }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BOOKS_PER_PAGE);

  // 🔹 Filter + paginate
  const filteredBooks = useMemo(() => {
    const list =
      activeCategory === "All"
        ? books
        : books.filter((book) => {
            if (!book.cat) return false;

            // Handle array OR string
            const cats = Array.isArray(book.cat)
              ? book.cat
              : book.cat.split(",");

            return cats
              .map((c) => c.trim().toLowerCase())
              .includes(activeCategory.toLowerCase());
          });

    return list.slice(0, visibleCount);
  }, [books, activeCategory, visibleCount]);

  // 🔹 Show More logic
  const totalFilteredCount =
    activeCategory === "All"
      ? books.length
      : books.filter((book) => {
          if (!book.cat) return false;
          const cats = Array.isArray(book.cat)
            ? book.cat
            : book.cat.split(",");
          return cats
            .map((c) => c.trim().toLowerCase())
            .includes(activeCategory.toLowerCase());
        }).length;

  const canShowMore = filteredBooks.length < totalFilteredCount;

  return (
    <section className="mt-10">

      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="font-bangers text-4xl">
          Explore Books
        </h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {CATEGORY_LIST.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(BOOKS_PER_PAGE);
            }}
            className={`
              px-5 py-2 font-bangers border-4 border-black rounded-full
              shadow-[4px_4px_0_#000] transition
              ${activeCategory === cat
                ? "bg-yellow-300"
                : "bg-white hover:bg-yellow-200"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
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

      {/* Show More */}
      {canShowMore && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setVisibleCount((v) => v + BOOKS_PER_PAGE)}
            className="px-8 py-4 bg-red-500 text-white font-bangers text-lg
                       border-4 border-black rounded-xl
                       shadow-[6px_6px_0_#000]
                       hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#000]
                       transition"
          >
            SHOW MORE
          </button>
        </div>
      )}
    </section>
  );
}
