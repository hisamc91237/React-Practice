import { useRef, useState } from "react";
import suggestion from "../utils/suggestion";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchbar = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const searchMovieTMBD = async (movienName) => {
    const data = await fetch(
      "/api/movies?path=/search/movie?query=" +
        movienName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async (e) => {
    e.preventDefault();

    const text = searchText.current.value.trim();
    if (!text || loading) return;

    setLoading(true);
    try {
      const gptQuery =
        "Act as a Movie Recommendation system. Please suggest me 5 movies based on this: " +
        text +
        " Only give the movies name. Separate each movie with commas. Indian Movies Please. Example: RRR,Baahubali,KGF,Pushpa,Vikram";

      const MOCK_MODE = false;

      const movieString = MOCK_MODE
        ? "RRR,Baahubali,KGF,Pushpa,Vikram"
        : (
            await suggestion.chat.completions.create({
              model: "meta/llama-3.1-8b-instruct",
              messages: [{ role: "user", content: gptQuery }],
            })
          ).choices[0].message.content;

      const movieArray = movieString.split(",").map((movie) => movie.trim());

      const promiseArray = movieArray.map((movie) => searchMovieTMBD(movie));

      const promiseResult = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames: movieArray,
          movieResults: promiseResult,
        }),
      );
    } catch (err) {
      console.error("NVIDIA API Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full px-4 relative z-20">
      <form
        onSubmit={handleGPTSearch}
        className="w-full max-w-4xl mt-[30%] md:mt-[10%] p-1.5 rounded-2xl bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col md:flex-row gap-2"
      >
        <div className="flex-1 relative">
          <input
            ref={searchText}
            type="text"
            className="w-full p-4 md:p-5 bg-gray-950/80 text-white rounded-xl outline-none border border-white/5 focus:border-purple-500/50 transition-all text-base md:text-lg placeholder:text-white/20"
            placeholder="What mood are you in today?"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
            <i className="fa-solid fa-wand-magic-sparkles text-purple-400 text-xl"></i>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 md:px-12 py-4 md:py-0 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black rounded-xl cursor-pointer disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 uppercase tracking-widest text-xs md:text-sm"
        >
          {loading ? "Analyzing..." : "Discover"}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
