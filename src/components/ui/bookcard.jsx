export default function ComicBookCard({ id, imgUrl, title, updatedAt }) {
  return (
    <div className="relative max-w-65 rounded-2xl border-4 border-black bg-blue-200 shadow-[6px_6px_0_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0_#000] transition-all duration-300" onClick={()=>{window.location.href = `/books/${id}`}}>

      {/* Comic Sticker */}
      <div className="absolute -top-4 -left-4 rotate-[-8deg] bg-red-500 text-white px-3 py-1 text-xs font-bangers border-2 border-black shadow-[3px_3px_0_#000]  z-9">
        UPDATED
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-t-xl border-b-4 border-black bg-white aspect-square">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title */}
        <h2 className="text-xl leading-tight font-bangers text-black line-clamp-2">
          {title}
        </h2>

        {/* Divider */}
        <div className="h-0.5 w-full bg-black"></div>

        {/* Update Date */}
        <p className="text-sm font-author text-black">
          Updated on: <span className="font-display">{updatedAt}</span>
        </p>
      </div>
    </div>
  );
}
