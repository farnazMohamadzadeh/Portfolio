import React from "react";
import { Background } from "../Base/Background";
import { Header } from "../Base/Header";
import { ResumeInfo } from "./ResumeInfo";
import { SocialMedias } from "../Base/SocialMedias";

export const Resume = () => {
  return (
    <div className="bg-gray-900 select-none px-4 relative">
      <Background />
      <Header />
      <ResumeInfo />
      <SocialMedias />
    </div>
  );
};
