import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faDollarSign } from "@fortawesome/free-solid-svg-icons";
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

      {/* this will be the about me section*/}
      <div className="grid grid-cols-3 gap-4 p-4 pt-9">
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <h1 className="text-5xl font-semibold text-blue-500 text-center">
            Welcome
          </h1>
          <p className="text-blue-500 text-center pt-3">
            My name is <h2>Matthew Garcia</h2>
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 pl-32">
        <div className="col-span-1">
          {/* Left Section */}
          <p className="text-xl font-semibold text-white text-left pb-5">
            Hello, I am a Fullstack Software Engineer!
          </p>
          <span className="text-pink-500 ">
            As fullstack Software engineer, I have experience in Websitge,
            Mobile, and Software development. Check out my projects and skills!
          </span>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 pr-32">
        {/* Right Section */}
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <p className="text-xl font-semibold text-blue-500 text-right">
            Right
          </p>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
