import React from "react";
import { ReactComponent as Quote } from "../../assets/icons/Quote.svg";

export const Header = () => {
  return (
    <>
      <div className="container mx-auto  mb-10 lg:mb-40 lg:px-20">
        <div className=" w-full pt-10 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
          <img
            alt="Card"
            src="../images/wallpaper.png"
            className="w-full  rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full lg:-mt-96 lg:w-3/6 p-10 ml-auto bg-blue-900 mt-5 rounded-2xl z-50">
          <div className="flex flex-col text-white">
            <div>
              <Quote className="text-green-500 fill-current w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="text-white font-light tracking-wider my-5 px-2">
              <h3 className="text-2xl font-semibold">Hello</h3>
              Nice to Meet You, I would like to Welcome you with my Personal
              Portfolio.
            </div>
            <div className="flex justify-between pl-2">
              <h3 className="font-bold font-sans tracking-widest animate-pulse text-4xl">
                FARNAZ MOHAMADZADEH
              </h3>
              <i className="fas fa-quote-right text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
