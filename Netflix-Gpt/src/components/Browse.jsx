import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Hero from "./Hero";
import Secondary from "./Secondary";
import usePopularPlayingMovies from "../hooks/usePOPULARPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div className="relative w-full overflow-x-hidden">
      <HeaderBrowse />
      <Hero />
      <Secondary />
    </div>
  );
};

export default Browse;
