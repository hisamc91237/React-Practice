const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 absolute z-20 text-white bg-linear-to-r from-gray-950 via-gray-950/60 to-transparent">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] max-w-lg md:max-w-4xl drop-shadow-2xl leading-[0.9] tracking-tighter mb-4 uppercase italic">
        {title}
      </h1>
      <p className="hidden md:block py-6 text-base md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3 drop-shadow-xl leading-relaxed text-gray-300 font-medium border-l-4 border-purple-500 pl-6 my-6">
        {overview}
      </p>
      <div className="flex flex-wrap gap-4 mt-8 md:mt-4">
        <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-3 md:py-4 px-8 md:px-12 rounded-2xl text-lg md:text-xl font-black shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer uppercase tracking-widest">
          <i className="fa-solid fa-play text-2xl"></i>
          Stream Now
        </button>
        <button className="flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 text-white py-3 md:py-4 px-8 md:px-12 rounded-2xl text-lg md:text-xl font-bold hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-2xl">
          <i className="fa-solid fa-circle-info text-2xl"></i>
          Details
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
