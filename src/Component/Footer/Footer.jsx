import React from "react";
import pic2 from "../../Assets/instagram.png";
import geek from "../../Assets/geek.png";
import github from "../../Assets/github.png";
import gmail from "../../Assets/gmail.png";
import leetcode from "../../Assets/leetcode.png";
import linkedin from "../../Assets/linkedin.png";

function Footer() {
  return (
    <footer className="bg-orange-950 py-6">
      <div className="container mx-auto flex flex-col items-center backdrop:blur-lg bg-white/10 w-fit p-4 px-6 rounded-full shadow shadow-black mb-10">
        {/* Social Media Icons */}
        <div className="flex space-x-6 md:space-x-10">
          <a
            href="https://www.instagram.com/pramod.birla10/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:-translate-y-5 hover:shadow-lg"
          >
            <img src={pic2} alt="Instagram" className="w-10 h-10" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/pramod_birla/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:-translate-y-5 hover:shadow-lg"
          >
            <img src={geek} alt="GeeksforGeeks" className="w-10 h-10 rounded" />
          </a>
          <a
            href="https://github.com/pramodbirla01"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:-translate-y-5 hover:shadow-lg"
          >
            <img src={github} alt="GitHub" className="w-10 h-10" />
          </a>
          <a
            href="#contact" // Updated to scroll to Contact section
            className="transform transition-transform duration-300 hover:-translate-y-5 hover:shadow-lg"
          >
            <img src={gmail} alt="Gmail" className="w-10 h-10" />
          </a>
          <a
            href="https://leetcode.com/u/pramod_birla/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:-translate-y-5 hover:shadow-lg"
          >
            <img src={leetcode} alt="LeetCode" className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/pramod-birla-592534275/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:-translate-y-5 hover:shadow-lg"
          >
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>

        {/* Footer Text */}
      </div>
        <p className="text-sm text-gray-400 font-semibold text-center">
          © {new Date().getFullYear()} Pramod Birla. All rights reserved.
        </p>
    </footer>
  );
}

export default Footer;
