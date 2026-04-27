import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies || !movies.nowPlayingMovies) return null;

  return (
    <div className="bg-black pb-12">
      <div className="-mt-24 md:-mt-52 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        {/* Mocking additional rows to demonstrate the scrollable UI */}
        <MovieList
          title={"Trending Now"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Popular"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.nowPlayingMovies}
        />
      </div>
    </div>
  );
};

export default Secondary;
