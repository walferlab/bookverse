import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ComicHero() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#0175c1] border-b-4 border-black flex items-center">
      {/* Background comic dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 flex items-center" />

      <div className="relative max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <div className="inline-block bg-red-500 text-white px-4 py-2 font-bangers text-sm border-2 border-black shadow-[4px_4px_0_#000] -rotate-2">
            NEW MYSTERY DROPS!
          </div>

          <h1 className="text-4xl sm:text-6xl font-bangers leading-tight">
            SHORT COMICS.
            <br />
            DEEP MYSTERIES.
            <br />
            <span className="text-gray-100">ENDLESS IDEAS.</span>
          </h1>

          <div className="bg-white/50 border-4 border-black text-gray-800 rounded-xl p-4 shadow-[6px_6px_0_#000] font-display text-md sm:text-lg">
            Dive into short, handcrafted comic stories built around mystery,
            curiosity, and imagination. New chapters, fresh ideas, and
            experimental storytelling—updated regularly.
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
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
              className="w-full px-5 py-3 pl-12 rounded-xl border-4 border-black font-display
             shadow-[4px_4px_0_#000] bg-amber-50 outline-none"
            />

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer">
              <FaSearch />
            </span>
          </div>
        </div>

        {/* Right: Comic Banner Card */}
        <div className="flex justify-center">
          <div className="relative w-80 sm:w-85 bg-yellow-300 border-4 border-black rounded-2xl shadow-[8px_8px_0_#000] rotate-3">
            <div className="absolute -top-2 -right-4 bg-black text-white px-3 py-1 text-xs font-bangers rotate-20">
              BOOM!
            </div>

            <div className="p-6 space-y-2 sm:space-y-4">
              <h2 className="font-bangers text-2xl">THE COMIC ARCHIVE</h2>

              <p className="font-author text-sm">
                Short reads. Big ideas. A growing library of comic-style stories
                created for curious readers and creative thinkers.
              </p>

              <div className="h-40 bg-white border-2 border-black rounded-lg flex items-center justify-center font-bangers text-xl">
                PANEL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
