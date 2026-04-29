import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2 md:py-4">
      <h1 className="text-xl md:text-2xl font-black text-white mb-6 px-4 border-l-4 border-purple-500 italic tracking-tighter uppercase">
        {title}
      </h1>
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth group">
        <div className="flex gap-4 md:gap-6 py-4 px-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
