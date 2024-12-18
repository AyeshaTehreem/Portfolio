import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Resume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Web Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      {/* Banner Image */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-t-xl flex items-center justify-center">
        <img
          className="w-full max-h-full object-contain object-center"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>

      {/* Content */}
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Ayesha Tehreem</h1>
          <p className="text-base text-primary-400 tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
          <span className="hover:text-primary-500 duration-300 cursor-pointer text-xl">
              <a href="https://github.com/AyeshaTehreem" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </span>
            <span className="hover:text-primary-500 duration-300 cursor-pointer text-xl">
              <a href="https://www.linkedin.com/in/ayesha-tehreem-b38450271/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </span>
            
            <span className="hover:text-primary-500 duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>
            <span className="hover:text-primary-500 duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
          </div>
        </div>

        {/* Buttons */}
       {/* Buttons */}
<div className="flex h-14 border-t-[1px] border-t-zinc-800">
  <a
    href={CV}
    target="_blank"
    className="w-1/2 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-primary-400 duration-300"
    rel="noreferrer"
  >
    <button className="w-full h-full flex justify-center items-center gap-2">
      Download CV <BsCloudLightningFill />
    </button>
  </a>
  <button className="w-1/2 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-primary-400 duration-300">
    Contact me <FiSend />
  </button>
</div>

      </div>
    </div>
  );
};

export default Left;