import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Hero from "./Hero";
import Secondary from "./Secondary";
import usePopularPlayingMovies from "../hooks/usePOPULARPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.search.toggleGPTSearch);

  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div className="relative w-full overflow-x-hidden bg-gray-950 min-h-screen">
      {/* Premium Background Ambient Glows */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10">
        <HeaderBrowse />
        {showGPTSearch ? (
          <GPTSearch />
        ) : (
          <>
            <Hero />
            <Secondary />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
