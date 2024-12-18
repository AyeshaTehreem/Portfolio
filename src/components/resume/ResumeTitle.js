import React from "react";

const ResumeTitle = ({ icon, title }) => {
  return (
    <h1 className="text-lg text-gray-300 uppercase font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800">
      <span className="text-primary-400 text-2xl">{icon}</span>
      {title}
    </h1>
  );
};

export default ResumeTitle;