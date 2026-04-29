import { useRef, useState } from "react";
import suggestion from "../utils/suggestion";

const GPTSearchbar = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);

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

      // ⚠️ MOCK MODE: Set to false once you have OpenAI billing active
      const MOCK_MODE = true;

      const movieString = MOCK_MODE
        ? "RRR,Baahubali,KGF,Pushpa,Vikram"
        : (
            await suggestion.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: gptQuery }],
            })
          ).choices[0].message.content;

      console.log("Movies:", movieString);
    } catch (err) {
      console.error("OpenAI Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full px-4">
      <form
        onSubmit={handleGPTSearch}
        className="w-full max-w-4xl mt-[20%] md:mt-[12%] p-1 rounded-2xl bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col md:flex-row gap-2"
      >
        <div className="flex-1 relative">
          <input
            ref={searchText}
            type="text"
            className="w-full p-4 md:p-5 bg-gray-950/80 text-white rounded-xl outline-none border border-white/5 focus:border-purple-500/50 transition-all text-lg placeholder:text-white/30"
            placeholder="What mood are you in today?"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
            <i className="fa-solid fa-wand-magic-sparkles text-purple-400 text-xl"></i>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-10 py-4 md:py-0 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black rounded-xl cursor-pointer disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 uppercase tracking-widest text-sm"
        >
          {loading ? "Analyzing..." : "Discover"}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
