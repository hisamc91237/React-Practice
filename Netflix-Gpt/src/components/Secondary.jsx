import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () => {
  const movies = useSelector((store) => store.movies);

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  if (!movies || !movies.nowPlayingMovies) return null;

  return (
    <div className="bg-gray-950 pb-20">
      <div className="-mt-12 md:-mt-24 lg:-mt-32 relative z-20 px-4 md:px-8">
        <div className="flex flex-col gap-6 md:gap-10">
          <MovieList
            title={"🔥 Trending Worldwide"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"✨ Curated For You"} movies={movies.trendingMovies} />
          <MovieList title={"⭐ Top Rated Picks"} movies={movies.popularMovies} />
          <MovieList title={"📅 Premiere Soon"} movies={movies.upcomingMovies} />
        </div>
      </div>
    </div>
  );
};

export default Secondary;
