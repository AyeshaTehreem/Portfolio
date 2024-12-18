import React from "react";

const RoundFour = () => {
  return (
    <div className="w-[800px] h-[800px] rounded-full absolute top-0 left-1/3">
      <div className="w-full h-full relative animate-reverse-spin">
        <div className="w-40 h-40 rounded-full bg-blue-500/40 absolute top-10 right-0 blur-3xl"></div>
        <div className="w-52 h-52 rounded-full bg-gradient-to-tr from-purple-600/60 to-teal-400/60 absolute -bottom-10 left-16 blur-3xl"></div>
        <div className="w-28 h-28 rounded-full bg-indigo-600/50 absolute bottom-32 right-20 blur-2xl"></div>
        <div className="w-28 h-28 rounded-full bg-cyan-500/50 absolute top-0 -right-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundFour;