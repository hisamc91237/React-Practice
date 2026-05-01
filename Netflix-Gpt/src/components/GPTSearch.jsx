import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchbar from "./GPTSearchbar";

const GPTSearch = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-col items-center overflow-x-hidden pt-20 md:pt-0">
      {/* Background Futuristic Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <GPTSearchbar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
