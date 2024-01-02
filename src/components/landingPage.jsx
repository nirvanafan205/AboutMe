import React from "react";
import SkillsSection from "./skillsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import "./../styles.css";

const landingPage = () => {
  return (
    <div>
      {/* navbar, will only have three things to anchor to*/}
      <nav className="bg-gradient-to-r from-slate-900 via-sky-950 to-purple-950 py-4 shadow-xl">
        <div className="w-full h-full flex items-center justify-between px-4 md:px-10">
          {/* Left Side - Brand Icon and Title */}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faTerminal}
              className="text-indigo-800 text-lg md:text-xl mr-2"
            />
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex space-x-8 bg-black rounded-full py-2 px-4">
            <a href="#about" className="text-gray-300 hover:text-white">
              About me
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-lg md:text-xl"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-lg md:text-xl"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-lg md:text-xl"
            />
          </div>
        </div>

        {/* Responsive Navigation Links for Tablets and Phones */}
        <div className="md:hidden flex flex-col items-center space-y-2 mt-2">
          <a href="#about" className="text-gray-300 hover:text-white">
            About me
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
        </div>
      </nav>

      {/* About me section */}

      {/* Welcome section */}
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 p-4 pt-9">
        {/* Welcome section spans all columns */}
        <div className="col-span-1 md:col-span-5">
          <h1 className="text-5xl font-semibold text-blue-500 text-center">
            Welcome
          </h1>
          <h2 className="text-blue-500 text-center">
            My name is Matthew Garcia
          </h2>
        </div>

        {/* Left Section */}
        <div className="mt-6 md:mt-0 md:col-span-2 flex justify-start items-end md:pl-16 p-4">
          <div>
            <h2 className="text-xl font-semibold text-white pb-2">
              Hello, I am a Fullstack Software Engineer!
            </h2>
            <p className="text-pink-500">
              As a full-stack Software engineer, I have experience in Website,
              Mobile, and Software development. Check out my projects and
              skills!
            </p>
          </div>
        </div>

        {/* Empty middle cell for spacing */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 md:col-span-2 flex md:justify-end justify-center items-center p-4">
          <div>
            <p className="text-xl font-semibold text-indigo-500 pr-8 ">Right</p>
          </div>
        </div>
      </div>

      <SkillsSection />
    </div>
  );
};

export default landingPage;
