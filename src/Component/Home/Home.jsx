import React, { useState } from 'react';
import pic from '../../Assets/3d_dev.png';
import pic2 from '../../Assets/3d_boy_bike.png';

function Home() {
  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex font-josefin flex-col md:flex-row justify-between gap-56 min-h-screen bg-gradient-to-bl from-purple-900 via-violet-800 to-indigo-950 px-8 py-24">
      
      <div className="w-full md:w-1/2   md:h-fit backdrop-blur-sm font-bold text-4xl text-white bg-white/10 rounded-xl mt-20 md:mt-10 py-7 px-10">
        <h1 className="">Hello, I am</h1>
        <h1 className="mt-1 animate-changefonts">Pramod Birla</h1>
        <p className="text-sm font-silkscreen font-thin mt-3 text-cyan-200 opacity-70">Full stack developer | UI/UX | Data Structure</p>
        
        {/* Resume Button */}
        <div className="mt-3">
          <a
            href="your-resume-link.pdf" // Replace with your actual resume link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6  py-3 text-sm  text-white bg-slate-500 rounded-xl hover:bg-cyan-600 transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View Resume
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 -mt-36 md:mt-0 relative">
        {/* Conditionally render images based on hover state */}
        <img 
          src={isHovered ? pic : pic2} 
          alt=""
          className="md:w-3/4 w-full object-cover rounded-lg transition-opacity duration-500" 
        />
      </div>
    </div>
  );
}

export default Home;
