import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-300 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-5 text-primary-400">Hello! I'm Ayesha Tehreem</h2>
          <p className="text-base leading-6 ">
          Creative and detail-oriented Web Developer with expertise in crafting responsive, user-friendly websites using modern technologies like React, Tailwind, and Node.js. Passionate about delivering seamless digital experiences and solving complex problems with efficient solutions.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 ">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            PAKISTAN
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Islamabad, Pakistan
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;