import authorImg from "../../assets/images/author.jpg";
import BgImage1 from "../../assets/backgrounds/4819765.jpg";
import BgImage4 from "../../assets/backgrounds/5095.jpg";
import BgImage5 from "../../assets/backgrounds/4809357.jpg";
import BgImage6 from "../../assets/backgrounds/4812345.jpg";
import BgImage7 from "../../assets/backgrounds/4882775.jpg";

import { useNavigate } from "react-router-dom";

export default function AboutAuthor() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-yellow-200 p-6 md:p-12 font-sans">
      <button
        onClick={() => navigate("/")}
        className="
          fixed
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

      {/* Page Title */}
      <h1 className="text-4xl md:text-6xl font-author font-bold text-center mb-12 text-black pt-12 sm:pt-0">
        ABOUT THE AUTHOR
      </h1>

      {/* Comic Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Panel 1 – Image */}
        <div
          className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_#000] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage5})` }}
        >
          <img
            src={authorImg}
            alt="Author"
            className="w-full h-80 object-cover border-4 border-black"
          />
          <p className="mt-4 text-center font-extrabold text-lg font-display">
            The Mind Behind the Stories
          </p>
        </div>

        {/* Panel 2 – Speech Bubble */}
        <div
          className="relative border-4 border-black p-6 
                        shadow-[8px_8px_0px_#000] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage1})` }}
        >
          <div
            className="absolute -left-4 top-8 w-6 h-6 bg-none 
                       border-l-4 border-b-4 border-black rotate-45"
          ></div>

          <h2 className="text-3xl font-author font-bold mb-4">“WHO AM I?”</h2>
          <p className="text-lg leading-relaxed font-display">
            I’m a storyteller who uses comics to explore mystery, curiosity, and
            ideas that linger.
            <br />I create short, focused stories—each one designed to make you
            pause, think, and turn the next page.
          </p>
        </div>

        {/* Panel 3 – Stats */}
        <div
          className="border-4 border-black p-6 
                        shadow-[8px_8px_0px_#000] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage6})` }}
        >
          <h2 className="text-3xl font-extrabold mb-4 font-author">
            POWER STATS
          </h2>

          <ul className="space-y-3 text-lg font-semibold font-display">
            <li>Mystery & Suspense</li>
            <li>Psychological Stories</li>
            <li>Short Experimental Comics</li>
            <li>Thought-Driven Narratives </li>
          </ul>
        </div>

        {/* Panel 4 – Origin Story */}
        <div
          className="md:col-span-2 border-4 border-black bg-blue-100 p-6 
                        shadow-[8px_8px_0px_#000] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage7})` }}
        >
          <h2 className="text-3xl font-extrabold mb-4 font-author">
            ORIGIN STORY
          </h2>
          <p className="text-lg leading-relaxed font-display ">
            It started with a single idea and a blank panel. <br /> Over time,
            those ideas turned into stories—short comics meant to be read in one
            sitting but remembered for much longer. Every new release is another
            chapter in an ongoing experiment.
          </p>
        </div>

        {/* Panel 5 – Callout */}
        <div
          className="border-4 border-black bg-green-100 p-6 text-center 
                        shadow-[8px_8px_0px_#000] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage4})` }}
        >
          <h2 className="text-3xl font-extrabold mb-3 font-author">
            CATCHPHRASE
          </h2>
          <p className="text-xl font-bold font-display">
            “STORIES THAT DON’T EXPLAIN THEMSELVES”
          </p>
        </div>
      </div>
    </div>
  );
}
