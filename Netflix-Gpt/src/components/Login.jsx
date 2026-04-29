import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("Sign In");
  const [errorMessage, setErrorMessage] = useState(null);

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
    <div className="relative min-h-screen bg-gray-950 flex flex-col items-center overflow-hidden">
      {/* Background Futuristic Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <Header />

      <div className="flex-1 flex items-center justify-center w-full px-4 pt-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-8 md:p-12 bg-white/[0.03] backdrop-blur-3xl border border-white/10 text-white rounded-[2rem] shadow-2xl relative z-10"
        >
          <h1 className="font-black text-3xl md:text-4xl mb-8 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {isSignIn ? "Sign In" : "Get Started"}
          </h1>

          {!isSignIn && (
            <div className="mb-4">
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-500"
              />
            </div>
          )}

          <div className="mb-4">
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-500"
            />
          </div>

          <div className="mb-2">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-500"
            />
          </div>

          <p className="min-h-[1.5rem] text-sm text-rose-500 font-medium mb-4 ml-1">
            {errorMessage}
          </p>

          <button
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-lg rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 active:scale-[0.98]"
            onClick={handleFormButtonClick}
          >
            {isSignIn ? "Enter Cinevia" : "Create Account"}
          </button>

          <p
            className="mt-8 text-center text-gray-400 font-medium cursor-pointer hover:text-white transition-colors"
            onClick={handleSignIn}
          >
            {isSignIn ? (
              <>
                New to Cinevia?{" "}
                <span className="text-purple-400 font-bold">Sign Up Now</span>
              </>
            ) : (
              <>
                Already a member?{" "}
                <span className="text-purple-400 font-bold">Sign In Here</span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
