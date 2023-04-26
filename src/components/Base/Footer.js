import React from "react";
import { Circle } from "./Circle";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <>
      <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
        <div className="flex flex-col text-white">
          <h1 className="font-bold uppercase text-center text-4xl leading-10  my-2">
            I'm <span className="text-green-500 animate-pulse">Available </span>
            for freelancing
          </h1>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-2xl italic">Location</h2>
              <p className="text-gray-400">Iran, Tehran</p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 ">
            <div className="flex flex-col">
              <h2 className="text-2xl italic">Contact</h2>
              <p className="text-gray-400 text-sm font-normal tracking-wider select-text py-2">
                Email: Farnaz.zm87@gmail.com
              </p>
              <p className="text-gray-400 text-sm font-normal tracking-wider select-text">
                Mobile: 0989355014960
              </p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <Circle />
            <Circle />
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};
