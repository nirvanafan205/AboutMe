"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faPager,
  faEarth,
  faPaintbrush,
  faOilCan,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";


const SkillsSection = () => {
  return (
    <div className="py-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
      <p className="mb-12">Using the latest tech this world has to offer</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
        {/* Python */}
        <div>
          <FontAwesomeIcon icon={faDollarSign} size="4x" />
          <p className="mt-4">Python</p>
        </div>
        {/* React */}
        <div>
          <FontAwesomeIcon icon={faPager} size="4x" />
          <p className="mt-4">React</p>
        </div>
        {/* Java */}
        <div>
          <FontAwesomeIcon icon={faEarth} size="4x" />
          <p className="mt-4">Java</p>
        </div>
        {/* JavaScript */}
        <div>
          <FontAwesomeIcon icon={faPaintbrush} size="4x" />
          <p className="mt-4">JavaScript</p>
        </div>
        {/* Fifth Skill */}
        <div>
          <FontAwesomeIcon icon={faOilCan} size="4x" />
          <p className="mt-4">Vim</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
