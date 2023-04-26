import React from "react";
import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { About } from "../About/About";
import { Footer } from "../Base/Footer";
import { Skills } from "../Skills/Skills";

export const ResumeInfo = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container mx-auto lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl bg-gray-800/50 shadow-2xl ">
            <div className="items-center flex justify-center mx-auto w-2 h-2 rounded-full animate-bounce  mb-1 bg-green-500 "></div>
            <div className="items-center flex justify-center mx-auto w-2 h-2 rounded-full animate-bounce mb-1  bg-green-500 "></div>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <About />
              <Experience />
              <Education />
              <Skills />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};
