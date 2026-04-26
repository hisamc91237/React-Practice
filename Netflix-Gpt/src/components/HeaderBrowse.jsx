import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, AVATAR_URL } from "../utils/constants";

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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10 w-full px-8 py-2 bg-linear-to-b from-black flex flex-col md:flex-row justify-between items-center">
      <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="logo" />
      <div className="flex p-2 items-center gap-4">
        <img
          className="w-10 h-10 rounded-sm"
          src={AVATAR_URL}
          alt="user-icon"
        />
        <button
          onClick={handleSignOut}
          className="text-white font-bold cursor-pointer hover:text-gray-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HeaderBrowse;
