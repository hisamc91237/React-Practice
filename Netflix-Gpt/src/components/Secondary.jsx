import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () => {
  const movies = useSelector((store) => store.movies);

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  if (!movies || !movies.nowPlayingMovies) return null;

  return (
    <div className="bg-black pb-12">
      <div className="-mt-24 md:-mt-52 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />

        <MovieList title={"Trending Now"} movies={movies.trendingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default Secondary;
