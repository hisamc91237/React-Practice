import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-6 md:px-16 py-4 bg-gray-950/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center transition-all duration-500">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <span className="text-white font-black text-xl">C</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400">
          CINEVIA
        </h1>
      </div>
      {user && (
        <button
          onClick={handleSignOut}
          className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
