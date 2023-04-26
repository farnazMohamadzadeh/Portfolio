import React from "react";

export const EducationInfo = ({ title, desc }) => {
  return (
    <div className="flex flex-col px-5 mb-6 border-l-2 border-green-400">
      <h3 className="text-sm font-medium pb-3 tracking-wide">{title}</h3>
      <p className="font-light text-gray-200 tracking-wider">{desc}</p>
    </div>
  );
};
