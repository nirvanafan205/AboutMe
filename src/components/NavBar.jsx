import React from "react";
import "./../styles.css";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-sky-950 to-purple-950 py-4 shadow-xl">
      <div className="w-full h-full flex items-center justify-between px-4 md:px-10">
        <span className="font-bold text-gray-300 text-lg md:text-xl">
          Fullstack
        </span>
      </div>
    </nav>
  );
};

export default NavBar;