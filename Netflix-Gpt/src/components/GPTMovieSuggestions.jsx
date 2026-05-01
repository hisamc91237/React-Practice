import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-8 pb-20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
      <div className="p-6 md:p-10 bg-gray-950/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-8 md:gap-12">
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
