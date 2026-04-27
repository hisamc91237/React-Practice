import { POSTER_IMG } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="rounded-md object-cover drop-shadow-md w-full h-full"
        src={POSTER_IMG + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
