import React from "react";
import { FaCode, FaProjectDiagram, FaDatabase, FaLaptopCode } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<FaCode />}
        title="Full Stack Development"
        subTitle="Experienced in building responsive and scalable web applications using the MERN stack (React.js, Node.js, MongoDB) and .NET framework."
      />
      <ServicesCard
        icons={<FaProjectDiagram />}
        title="Project Development"
        subTitle="Proficient in developing robust systems like Event Management, POS & Inventory, and Attendance Portals using modern technologies."
      />
      <ServicesCard
        icons={<FaDatabase />}
        title="Backend & API Integration"
        subTitle="Skilled in backend development, database management, and API integration for efficient and reliable system performance."
      />
      <ServicesCard
        icons={<FaLaptopCode />}
        title="Frontend Development"
        subTitle="Skilled in creating interactive, responsive user interfaces using React.js, Tailwind CSS, Bootstrap, and modern web technologies."
      />
    </div>
  );
};

export default MyServices;
