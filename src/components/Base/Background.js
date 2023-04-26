import React from "react";

export const Background = () => {
  return (
    <>
      <div className="lg:w-52  lg:h-52  bg-blue-600/5 bg-opacity-30 absolute  lg:top-96 lg:right-14 rounded-full pointer-events-none"></div>
      <div className="lg:w-32  lg:h-32  bg-blue-600/5 bg-opacity-30 absolute  lg:top-40 lg:right-10 rounded-full pointer-events-none"></div>
      <div className="lg:w-24  lg:h-24  bg-blue-600/5 bg-opacity-30 absolute  lg:top-[70rem] lg:right-8 rounded-full pointer-events-none animate-pulse"></div>
      <div className="lg:w-40  lg:h-40  bg-blue-600/5 bg-opacity-30 absolute  lg:top-[75rem] lg:right-32 rounded-full pointer-events-none"></div>
      <div className="lg:w-44  lg:h-44  bg-blue-600/5 bg-opacity-30 absolute  lg:bottom-0 lg:left-2 rounded-full pointer-events-none"></div>
      <div className=" hidden lg:block text-blue-600/5 bg-opacity-30 absolute text-9xl font-extrabold lg:top-[45rem] lg:right-24 pointer-events-none animate-pulse ">
        WEB
      </div>
      <div className="hidden lg:block  text-blue-600/5 bg-opacity-30 absolute text-5xl font-extrabold lg:top-[52rem] lg:right-24 pointer-events-none">
        DEVELOPER
      </div>
    </>
  );
};
