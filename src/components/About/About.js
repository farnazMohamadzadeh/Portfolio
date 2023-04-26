import React from "react";
import { SectionTitle } from "../Base/SectionTitle";

export const About = () => {
  return (
    <div>
      <SectionTitle title="About" />
      <p className="my-2 text-gray-200 font-light tracking-wider">
        I am a Front-End Developer who is proficient in React.js framework. My
        passion lies in learning about the latest technologies. I'm always eager
        to learn from anyone and everyone.
      </p>
      <div className="flex space-x-2">
        <label className="text-sm font-medium text-white tracking-wide">
          Languages:
        </label>
        <p className="text-sm  text-gray-300">Persian (native), English</p>
      </div>
    </div>
  );
};
