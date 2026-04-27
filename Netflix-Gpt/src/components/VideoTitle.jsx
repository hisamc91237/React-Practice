const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute z-20 text-white bg-gradient-to-r from-black via-black/60 to-transparent">
      <h1 className="text-3xl md:text-5xl font-bold max-w-lg md:max-w-2xl drop-shadow-xl leading-tight">
        {title}
      </h1>
      <p className="hidden md:block py-6 text-lg w-1/3 drop-shadow-xl leading-snug text-gray-200">
        {overview}
      </p>
      <div className="flex gap-4 mt-6 md:mt-0">
        <button className="flex items-center gap-2 bg-white text-black py-2 md:py-3 px-6 md:px-8 rounded-md text-base md:text-xl font-semibold hover:bg-opacity-80 transition-all cursor-pointer">
          <i className="fa-solid fa-play"></i>
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500/70 text-white py-2 md:py-3 px-6 md:px-8 rounded-md text-base md:text-xl font-semibold hover:bg-gray-500/90 transition-all cursor-pointer">
          <i className="fa-solid fa-circle-info"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
