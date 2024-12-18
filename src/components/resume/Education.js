import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        
        <ResumeCard
          badge="sept 23rd- Dec 7th 2024"
          title="Web Developer"
          subTitle="NexGenGuards"
          des="Created a fully functional attendance portal with geolocation check-ins and automated tracking using the MERN stack."
        />
        <ResumeCard
          badge="July-August 2024"
          title="Full Stack Developer"
          subTitle="Dept of CS, AIR UNIVERSITY"
          des="Built scalable backend and frontend web solutions using Node.js and React.js."
        />
        <ResumeCard
          badge="July-August 2024"
          title="Backend Developer"
          subTitle="Thenotsoformalshow"
          des="Developed and deployed TalentBase.ai with Node.js, integrating APIs and ensuring functionality through extensive testing."
        />

        <ResumeCard

          badge="July 1st-JUly 31st, 2024"
          title="Web Developer"
          subTitle="Digital Empowerment Network"
          des="Gained hands-on experience in full-stack development, creating real-time responsive web applications using React.js, Node.js, and MongoDB.!"
        />
        <ResumeCard
          badge="June 2023-August 2023"
          title=".Net Developer"
          subTitle="Air University."
          des="Enhanced front-end and back-end development skills using .NET to build dynamic and robust web applications."
        />


      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021-present"
          title="BSCS"
          
          des="Currently pursuing a Bachelor's degree in Computer Science with a CGPA of 3.16/4.0, focusing on full-stack development, backend systems, and modern software technologies."
        />
        <ResumeCard
          badge="2019-2021"
          title="HSSC from Federal Board"
          des="Completed Higher Secondary School with an impressive score of 94.36%, excelling in science and mathematics, and developing a strong analytical mindset."
        />
        <ResumeCard
          badge="2017-2019"
          title="SSC from Federal Board"
          
          des="Achieved 87.63% in Secondary School, building a solid foundation in problem-solving, critical thinking, and core science subjects."
        />
      </div>
    </div>
  );
};

export default Education;
