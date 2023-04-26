import React from "react";
import { ReactComponent as LocationIcon } from "../assets/icons/Location.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/Education.svg";
import { ReactComponent as JobIcon } from "../assets/icons/Job.svg";
import { Link } from "react-router-dom";
import { SocialMedia } from "./Base/SocialMedia";
import { Copyright } from "./Base/Copyright";

export const Main = () => {
  return (
    <main className="lg:overflow-hidden h-screen bg-black">
      <section className="relative block h-[500px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(./images/wallpaper.png)`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
      </section>
      <section className="relative py-10 bg-black">
        <div className="container mx-auto px-7">
          <div className="relative flex flex-col min-w-0 pb-5 bg-gray-300/95 w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center -mt-10">
                  <div className="flex justify-center">
                    <img
                      alt="Farnaz Mohamadzadeh"
                      src="images/me.jpg"
                      className="shadow-xl border-4 w-52 border-gray-100/70 rounded-full h-52 align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 text-center lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 lg:mt-0 ">
                    <a
                      href="tel:09960034234"
                      className="bg-green-600 hover:bg-green-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 transition duration-700 "
                      type="button"
                    >
                      Connect via Call
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center  lg:pt-4 ">
                    <SocialMedia
                      url="https://www.linkedin.com/in/farnaz-mohamadzadeh-b23766139/"
                      title="LinkedIn"
                      src="../images/Linkedin-icon.png"
                    />
                    <SocialMedia
                      url="https://wa.link/iqpxwf"
                      title="Whatsapp"
                      src="../images/whatsapp-icon.png"
                    />
                    <SocialMedia
                      url="https://t.me/farnaz_zm"
                      title="Telegram"
                      src="../images/telegram-icon.png"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-7">
                <h3 className="text-4xl font-semibold leading-normal text-gray-700 mb-2">
                  Farnaz Mohamadzadeh
                </h3>
                <div className="flex justify-center text-sm leading-normal mt-0 mb-2 text-gray-400 font-semibold uppercase">
                  <LocationIcon className="mr-2" />
                  Iran, Tehran
                </div>
                <div className="flex justify-center mb-2 text-gray-600 mt-5">
                  <JobIcon className="mr-2" />
                  Front-End Developer - React js
                </div>
                <div className="flex justify-center mb-2 text-gray-600">
                  <EducationIcon className=" mr-2" />
                  Master Of IT Managment
                </div>
              </div>
              <div className="mt-8  border-t border-gray-200 text-center">
                <div className="flex flex-wrap justify-center items-center">
                  <div className="w-full mt-4 lg:w-9/12">
                    <Link
                      to="/resume"
                      className="font-normal hover:font-medium text-green-600 "
                    >
                      {" "}
                      Show More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1 w-full">
          <Copyright />
        </div>
      </section>
    </main>
  );
};
