import React from "react";
import { Progressbar } from "../Skills/Progressbar";

export const SkillSummary = ({ title, percent, color }) => {
  return (
    <div className=" block w-full -mt-7 justify-start px-4">
      <div className="mb-3 text-sm tracking-wider pl-2">{title}</div>
      <div>
        <Progressbar percent={percent} color={color} />
      </div>
    </div>
  );
};
