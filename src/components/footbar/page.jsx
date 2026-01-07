import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">BookVerse</h3>
          <p className="text-sm text-gray-400">
           Short comics. Strange ideas. Stories worth revisiting.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="cursor-pointer" onClick={()=>(navigate('/books'))}>Books</p>
          <p className="cursor-pointer" onClick={()=>(navigate('/author'))}>About Author</p>
          <p className="cursor-pointer" onClick={()=>(navigate('/contact'))}>Contact us</p>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} BookVerse
        </div>
      </div>
    </footer>
  );
}
