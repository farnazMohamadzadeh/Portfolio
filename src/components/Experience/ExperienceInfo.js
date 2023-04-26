import React from "react";

export const ExperienceInfo = ({
  title,
  company,
  date,
  colorFrom,
  colorTo,
}) => {
  return (
    <div
      className={`transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 ${colorFrom} ${colorTo} bg-gradient-to-r text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}
    >
      <div className="w-5 h-5 bg-gray-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

      <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>

      <div className="flex-auto text-center sm:text-left space-y-2">
        <h1 className="text-lg font-normal tracking-wide">{title}</h1>
        <h1 className="text-sm tracking-wider italic">{company}</h1>
      </div>
      <div className="text-center text-white hover:text-gray-300">{date}</div>
    </div>
  );
};
