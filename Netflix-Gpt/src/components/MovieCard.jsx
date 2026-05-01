import { POSTER_IMG } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-28 md:w-40 lg:w-48 shrink-0 cursor-pointer group relative">
      <div className="relative overflow-hidden rounded-xl transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl group-hover:shadow-purple-500/30 will-change-transform">
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-600/0 group-hover:from-purple-500/20 group-hover:to-indigo-600/20 transition-all duration-300 z-10"></div>

        {/* Shine Sweep Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-500 ease-in-out z-20"></div>

        <img
          className="rounded-xl object-cover w-full aspect-[2/3] transition-transform duration-300 group-hover:scale-110 will-change-transform"
          src={POSTER_IMG + posterPath}
          alt="Movie Poster"
        />

        {/* Futuristic Glowing Border */}
        <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-purple-500/40 transition-all duration-300 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(168,85,247,0)] group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]"></div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-white text-[10px] font-black tracking-widest uppercase">
              Cinevia Elite
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
