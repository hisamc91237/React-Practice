import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";

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
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage(
              "This email is already registered. Try signing in.",
            );
          } else {
            setErrorMessage("Unable to create account. Please try again.");
          }
        });
    } else {
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
          if (
            errorCode === "auth/user-not-found" ||
            errorCode === "auth/wrong-password" ||
            errorCode === "auth/invalid-credential"
          ) {
            setErrorMessage("Invalid email or password. Please try again.");
          } else {
            setErrorMessage("Sign-in failed. Please check your connection.");
          }
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-col items-center overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/15 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Movie Posters - Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-10 md:opacity-40">
        <div className="absolute top-[10%] left-[-10%] sm:left-[5%] w-32 sm:w-48 md:w-64 rotate-[-12deg] animate-float opacity-50 sm:opacity-100">
          <img
            src={poster1}
            alt=""
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
        <div className="absolute bottom-[5%] right-[-10%] sm:right-[8%] w-32 sm:w-48 md:w-64 rotate-[15deg] animate-float-delayed opacity-50 sm:opacity-100">
          <img
            src={poster2}
            alt=""
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </div>

      {/* Background Branding Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="text-[20vw] md:text-[15vw] font-black text-white/[0.015] tracking-tighter uppercase">
          CINEVIA
        </h1>
      </div>

      <Header />

      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 pt-28 pb-12 relative z-10">
        <div className="text-center mb-10 md:mb-12 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
            Cinematic Excellence <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              AI Intelligence
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto px-4">
            Experience the future of streaming with personalized recommendations
            powered by state-of-the-art AI.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-6 sm:p-8 md:p-12 bg-white/[0.03] backdrop-blur-3xl border border-white/10 text-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Form Inner Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

          <h1 className="font-black text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            {isSignIn ? "Welcome Back" : "Create Account"}
          </h1>

          {!isSignIn && (
            <div className="mb-4">
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all duration-300 placeholder:text-gray-600 text-sm sm:text-base"
              />
            </div>
          )}

          <div className="mb-4">
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all duration-300 placeholder:text-gray-600 text-sm sm:text-base"
            />
          </div>

          <div className="mb-2">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all duration-300 placeholder:text-gray-600 text-sm sm:text-base"
            />
          </div>

          <p className="min-h-[1.5rem] text-xs sm:text-sm text-rose-500 font-medium mb-6 ml-2">
            {errorMessage}
          </p>

          <button
            className="w-full py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] transition-all duration-500 active:scale-[0.98] uppercase tracking-widest"
            onClick={handleFormButtonClick}
          >
            {isSignIn ? "Enter Cinevia" : "Join Now"}
          </button>

          <p
            className="mt-8 sm:mt-10 text-center text-gray-500 font-medium cursor-pointer hover:text-white transition-colors text-sm sm:text-base"
            onClick={handleSignIn}
          >
            {isSignIn ? (
              <>
                New to Cinevia?{" "}
                <span className="text-purple-400 font-bold ml-1 hover:underline">
                  Get Started
                </span>
              </>
            ) : (
              <>
                Already a member?{" "}
                <span className="text-purple-400 font-bold ml-1 hover:underline">
                  Sign In
                </span>
              </>
            )}
          </p>
        </form>
      </div>

      {/* Footer Info */}
      <div className="mt-auto py-8 text-gray-600 text-xs font-bold tracking-[0.2em] uppercase z-10">
        © 2026 Cinevia Entertainment AI • All Rights Reserved
      </div>
    </div>
  );
};

export default Login;
