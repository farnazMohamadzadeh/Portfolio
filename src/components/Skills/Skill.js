import React from "react";
import { SkillDetails } from "./SkillDetails";
import { SkillSummary } from "./SkillSummary";
import { ReactComponent as ArrowIcon } from "../../assets/icons/Arrow.svg";

export const Skill = ({ title, percent, data, color }) => {
  return (
    <div className="py-5 mt-5 text-white">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <SkillSummary title={title} percent={percent} color={color} />
          <span className="transition duration-700 group-open:rotate-180">
            <ArrowIcon />
          </span>
        </summary>
        <SkillDetails data={data} />
      </details>
    </div>
  );
};
