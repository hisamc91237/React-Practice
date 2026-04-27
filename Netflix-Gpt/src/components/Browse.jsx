import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Hero from "./Hero";
import Secondary from "./Secondary";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <HeaderBrowse />
      <Hero />
      <Secondary />
    </div>
  );
};

export default Browse;
