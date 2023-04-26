import React from "react";

export const SkillDetails = ({ data }) => {
  return (
    <>
      <ul
        className={`text-gray-400 text-sm  rounded-lg list-disc  grid ${
          data.length > 5 ? "grid-rows-5" : "grid-rows-3"
        } md:grid-rows-3  grid-flow-col gap-4  bg-gradient-to-t p-10 ml-4 from-gray-700/20 ease-in-out group-open:animate-fadeIn`}
      >
        {data.map((item, index) => (
          <li className="text-green-500" key={index}>
            <div className="text-gray-400">{item}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
