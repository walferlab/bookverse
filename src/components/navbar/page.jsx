import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tight font-display text-white">
          BookVerse
        </h1>

        <ul className="hidden md:flex gap-8 font-semibold">
          {["Home", "Books", "Author", "Contact"].map(item => (
            <li key={item}>
              <a  onClick={()=>(navigate(`/${item.toLowerCase()}`))} className="text-white hover:text-gray-400 cursor-pointer font-author">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-amber-50"
        >
          {!open ? <IoMenu /> : <IoClose />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-semibold bg-black">
          {["Home", "Books", "Author", "Contact"].map(item => (
            <div key={item} className="border-b pb-2">
              <a href={`/${item}`} className="text-white">{item}</a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
