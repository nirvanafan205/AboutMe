import React from "react";
import "./../styles.css";

const Landing = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center main-container">
      {/* Original content */}
      <h1 className="text-white text-4xl md:text-6xl font-bold mt-[-35rem] text-center">
        Hello, I'm Matthew Garcia
      </h1>
      <span className="text-blue-500 pt-9 text-2xl mt-[-0.5rem] text-center">
        Front End Engineer
      </span>

      {/* New content similar to the provided image */}
      <div className="md:absolute top-1/2 left-10 md:left-20 transform -translate-y-1/2">
        <h2 className="text-gray-500 text-3xl md:text-4xl font-bold max-w-xs md:max-w-lg text-center">
          I am a student at California State University Northridge studying
          computer science
        </h2>
        <p className="text-white text-lg mt-4 max-w-xs md:max-w-lg text-center">
          I am a junior with experience in Full-Stack web Development. Some
          classes I have taken are in OOPS in Java/C++, Intro/Advanced DSA,
          OS, Intro to SWE, Intro/Advanced Web Eng, Software Requirements
          Analysis and Specification, Software Verification/Validation,
          Concepts of Computer Programing and Multimedia System Design
        </p>
      </div>
    </div>
  );
};

export default Landing;