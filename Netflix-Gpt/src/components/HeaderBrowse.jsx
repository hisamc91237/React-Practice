import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, AVATAR_URL } from "../utils/constants";
import { toggleGPTSearch } from "../utils/searchSlice";
import { useSelector } from "react-redux";

const HeaderBrowse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const showSearch = useSelector((store) => store.search.toggleGPTSearch);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-6 md:px-16 py-4 bg-gray-950/70 backdrop-blur-xl border-b border-white/5 flex flex-col md:flex-row justify-between items-center transition-all duration-500">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <span className="text-white font-black text-xl">C</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400">
          CINEVIA
        </h1>
      </div>
      <div className="flex p-2 items-center gap-3 md:gap-6 mt-4 md:mt-0">
        <button
          onClick={handleGPTSearchClick}
          className="relative group bg-white/[0.03] hover:bg-white/[0.08] px-5 py-2.5 rounded-2xl text-white font-bold transition-all duration-500 border border-white/5 hover:border-purple-500/30 shadow-2xl overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative flex items-center gap-2.5 text-sm uppercase tracking-widest">
            {showSearch ? (
              <>
                <span className="text-xl">🏠</span> Home
              </>
            ) : (
              <>
                <span className="text-xl animate-pulse">✨</span> AI Assistant
              </>
            )}
          </span>
        </button>

        <div className="flex items-center gap-4 border-l border-white/10 pl-4 md:pl-6">
          <div className="relative group"></div>
          <button
            onClick={handleSignOut}
            className="bg-white/5 hover:bg-white/10 text-white font-black px-6 py-2.5 rounded-xl border border-white/10 hover:border-purple-500/50 shadow-xl transition-all duration-300 active:scale-90 uppercase tracking-widest text-xs"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBrowse;
