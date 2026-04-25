import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <Header />
      <form
        action=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-3"
      >
        <input
          type="text"
          placeholder="Email or phone number"
          className=" text-white p-2 m-4"
        />
        <input
          type="password"
          placeholder="Password"
          className=" text-white p-2 m-4"
        />
        <button className="px-4 py-2 rounded-md bg-red-500 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
