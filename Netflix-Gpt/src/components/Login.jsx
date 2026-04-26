import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("Sign In");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormButtonClick = () => {
    const message = validateData(
      email.current.value,
      password.current.value,
      !isSignIn ? name.current.value : "Valid Name",
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            navigate("/browse");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed In User:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-full max-w-md p-12 bg-black/80 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
      >
        <h1 className="font-bold text-3xl mb-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-[#333] text-white rounded-sm outline-none focus:ring-2 focus:ring-white/20"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full bg-[#333] text-white rounded-sm outline-none focus:ring-2 focus:ring-white/20"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-[#333] text-white rounded-sm outline-none focus:ring-2 focus:ring-white/20"
        />
        <p className=" pt-2 text-red-500">{errorMessage}</p>
        <button
          className="p-3 mt-5 mb-4 bg-[#e50914] w-full rounded-md font-semibold text-lg transition-colors hover:bg-red-700"
          onClick={handleFormButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2 text-white hover:underline cursor-pointer"
          onClick={handleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : " Already a user ? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
