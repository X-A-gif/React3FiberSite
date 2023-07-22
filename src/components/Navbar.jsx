import React from 'react';
import logo from '../assets/r3flogo.png';

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="text-white mx-24 mt-5 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center">
          <img className="" src={logo} alt="logo" />
        </div>

        {/* Middle section */}

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <button className="text-lg">Projects</button>
          <button className=" px-4 py-2 border-2 rounded-md">Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
