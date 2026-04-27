import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 md:px-12 py-4">
      <h1 className="text-xl md:text-3xl font-semibold text-white mb-4 drop-shadow-md">
        {title}
      </h1>
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-4 md:gap-6 py-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
