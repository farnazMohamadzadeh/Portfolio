import React from "react";
import { SectionTitle } from "../Base/SectionTitle";
import { Skill } from "./Skill";
import datas from "../datas";

export const Skills = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Skills" />
      <Skill
        title="Front End"
        percent="75%"
        data={datas.FrontEnd}
        color="bg-blue-500"
      />
      <Skill
        title="Web Design"
        percent="70%"
        data={datas.WebDesign}
        color="bg-blue-400"
      />
      <Skill
        title="Back End"
        percent="40%"
        data={datas.BackEnd}
        color="bg-blue-300"
      />
    </div>
  );
};
