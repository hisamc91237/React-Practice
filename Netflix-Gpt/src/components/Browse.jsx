import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Hero from "./Hero";
import Secondary from "./Secondary";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="relative w-full overflow-x-hidden">
      <HeaderBrowse />
      <Hero />
      <Secondary />
    </div>
  );
};

export default Browse;
