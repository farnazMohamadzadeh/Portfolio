import React from "react";
import { SectionTitle } from "../Base/SectionTitle";
import { EducationInfo } from "./EducationInfo";

export const Education = () => {
  return (
    <>
      <div className="rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 flex flex-col relative undefined">
        <div className="text-white absolute right-2"></div>
        <SectionTitle title="Education" />
        <div className="text-white font-normal mt-8 lg:flex justify-around">
          <EducationInfo
            title="Master's Degree"
            desc="IT Management - E-bussiness"
          />
          <EducationInfo title="Bachelor's Degree" desc="Applied Mathematics" />
        </div>
      </div>
    </>
  );
};
