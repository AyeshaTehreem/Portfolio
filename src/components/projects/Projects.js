import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <ProjectsCard
          title="POS & Inventory"
          category="Desktop App"
          image={workImgThree}
        />
        <ProjectsCard
          title="E-commerce website"
          category="Website"
          image={workImgOne}
        />
        <ProjectsCard
          title="Sports Club"
          category="Website"
          image={workImgTwo}
        />
        <ProjectsCard
          title="Event Management System"
          category="Website"
          image={workImgFive}
        />
        <ProjectsCard
          title="Attendance Portal"
          category="Website"
          image={workImgFour}
        />
        <ProjectsCard
          title="FTA_Times"
          category="Website"
          image={workImgSix}
        />
      </div>
    </div>
  );
};

export default Projects;
