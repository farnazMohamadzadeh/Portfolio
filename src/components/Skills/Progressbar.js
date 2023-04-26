import React from "react";

export const Progressbar = ({ percent, color }) => {
  return (
    <div className="w-full rounded-full dark:bg-gray-600">
      <div
        className={`${color} rounded-full  text-center text-xs font-medium leading-none text-primary-100`}
        style={{ width: `${percent}` }}
      >
        {percent}
      </div>
    </div>
  );
};
