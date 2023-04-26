import React from "react";
import { SectionTitle } from "../Base/SectionTitle";
import { ExperienceInfo } from "./ExperienceInfo";

export const Experience = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Experience" />
      <div className="border-l-2 mt-10">
        <ExperienceInfo
          title="Front-End Developer (React.Js)"
          company="Amnpardaz Co, Tehran - Iran"
          date="Apr 2021 - Oct 2022"
          colorFrom="from-gray-800"
          colorTo="to-gray-700"
        />
        <ExperienceInfo
          title="Web Designer/ Developer"
          company="Oviro Co, Tehran - Iran"
          date="May 2017 - Apr 2021"
          colorFrom="from-gray-700"
          colorTo="to-gray-800"
        />
      </div>
    </div>
  );
};
