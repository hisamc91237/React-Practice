import { useSelector } from "react-redux";
import useGetMovie from "../hooks/useGetMovie";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useGetMovie(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-full aspect-video pointer-events-none scale-[1.35] -translate-y-4"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
