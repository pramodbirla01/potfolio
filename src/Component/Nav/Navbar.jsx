import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="relative font-josefin font-semibold">
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-10/12 max-w-4xl flex justify-center items-center space-x-6 z-20">
        {/* Links for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <li className="backdrop-blur-lg bg-white/10 rounded-2xl px-6 py-2 hover:bg-cyan-500/20 transition-colors">
            <a href="#home" className="text-white font-semibold text-lg">
              Home
            </a>
          </li>
          <li className="backdrop-blur-lg bg-white/10 rounded-2xl px-6 py-2 hover:bg-cyan-500/20 transition-colors">
            <a href="#projects" className="text-white font-semibold text-lg">
              Projects
            </a>
          </li>
          <li className="backdrop-blur-lg bg-white/10 rounded-2xl px-6 py-2 hover:bg-cyan-500/20 transition-colors">
            <a href="#tech" className="text-white font-semibold text-lg">
              Tech Stack
            </a>
          </li>
          <li className="backdrop-blur-lg bg-white/10 rounded-2xl px-6 py-2 hover:bg-cyan-500/20 transition-colors">
            <a href="#about" className="text-white font-semibold text-lg">
              About
            </a>
          </li>
          {/* <li className="backdrop-blur-lg bg-white/10 rounded-2xl px-6 py-2 hover:bg-cyan-500/20 transition-colors">
            <a href="#contact" className="text-white font-semibold text-lg">
              Contact
            </a>
          </li> */}
        </ul>

        {/* Parent div for the burger menu and dropdown */}
        <div className="relative md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <i className="ri-menu-5-line text-3xl font-thin backdrop-blur-xl bg-white/20 p-2 rounded-full"></i>
          </button>

          {/* Dropdown menu for burger menu */}
          <div
            className={`absolute w-screen px-7 left-1/4 transform -translate-x-1/2 bg-transparent z-10 transition-transform duration-500 ease-in-out ${
              isOpen ? "top-12 opacity-100" : "-top-8 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-4 backdrop-blur-lg bg-white/10 text-white font-semibold text-lg py-5 text-center rounded-xl">
              <a href="#home" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#projects" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#tech" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">
                Tech Stack
              </a>
              <a href="#about" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">
                About
              </a>
              {/* <a href="#contact" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
