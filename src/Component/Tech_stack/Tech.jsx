import React, { useEffect, useState } from 'react';

function Tech() {
  const [visibleSections, setVisibleSections] = useState([]);
  const [lineHeight, setLineHeight] = useState('0%');

  // This function handles the scroll behavior to reveal cards
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      const viewportHeight = window.innerHeight;

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewportHeight - 100) {
          setVisibleSections((prev) => [...new Set([...prev, index])]); // Ensure unique values
          setLineHeight('100%'); // Set line height to 100% once the first card is visible
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-josefin bg-gradient-to-tl from-purple-800  via-violet-800 to-indigo-950  flex flex-col items-center py-20">
        <h1 className='text-3xl md:text-5xl w-fit flex text-center font-semibold text-white font-montserratsubrayada md:hover:animate-infChangefonts cursor-grab '>Tech Stack</h1>
      <div className="relative w-full max-w-4xl px-8 flex flex-col items-start">
        {/* Timeline vertical line with animation */}
        <div
          className={`bg-cyan-500 transition-all duration-700 ease-in-out`}
          style={{ height: lineHeight, width: '2px', position: 'absolute', left: '15px', top: '0' }} 
        ></div>

        {/* Top Knob */}
        <div
          className={`bg-cyan-500 rounded-full h-4 w-4 transition-all duration-700 ease-in-out`}
          style={{ position: 'absolute', left: '9px', top: '-2px', opacity: lineHeight === '0%' ? '0' : '1' }} 
        ></div>

        {/* Bottom Knob */}
        <div
          className={`bg-cyan-500 rounded-full h-4 w-4 transition-all duration-700 ease-in-out`}
          style={{ position: 'absolute', left: '9px', bottom: '0', opacity: lineHeight === '0%' ? '0' : '1' }} 
        ></div>

        {/* Arrows pointing to each card (facing right) */}
        <div
          className="absolute left-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-cyan-500"
          style={{ top: '10%', transform: 'translateY(-50%) translateX(16px)' }} // Adjust position based on your card height
        ></div>

        <div
          className="absolute left-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-cyan-500"
          style={{ top: '35%', transform: 'translateY(-50%) translateX(16px)' }} // Adjust position based on your card height
        ></div>

        <div
          className="absolute left-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-cyan-500"
          style={{ top: '60%', transform: 'translateY(-50%) translateX(16px)' }} // Adjust position based on your card height
        ></div>

        <div
          className="absolute left-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-cyan-500"
          style={{ top: '85%', transform: 'translateY(-50%) translateX(16px)' }} // Adjust position based on your card height
        ></div>

        {/* Frontend Tech Card */}
        <div className={`reveal w-full transition-transform duration-700 ease-out ${visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-lg shadow-md text-white p-8 my-8 transform transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-medium  font-montserratsubrayada">Frontend Technologies</h2>
            <p className="text-base font-thin opacity-75 text-cyan-200 mt-4 font-silkscreen">React, Tailwind CSS, HTML, CSS, JavaScript, TypeScript</p>
          </div>
        </div>

        {/* Backend Tech Card */}
        <div className={`reveal w-full transition-transform duration-700 ease-out ${visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-lg shadow-md text-white p-8 my-8 transform transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-medium  font-montserratsubrayada">Backend Technologies</h2>
            <p className="text-base font-thin opacity-75 text-cyan-200 mt-4 font-silkscreen">Node.js, Express, MongoDB, MySQL, Python, php, C, C++</p>
          </div>
        </div>

        {/* Tools Card */}
        <div className={`reveal w-full transition-transform duration-700 ease-out ${visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-lg shadow-md text-white p-8 my-8 transform transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-medium  font-montserratsubrayada">Tools</h2>
            <p className="text-base font-thin opacity-75 text-cyan-200 mt-4 font-silkscreen">VS Code, Git, GitHub, Firebase, Vite, EmailJS, Figma</p>
          </div>
        </div>

        {/* Soft Skills Card */}
        <div className={`reveal w-full transition-transform duration-700 ease-out ${visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-lg shadow-md text-white p-8 my-8 transform transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-medium  font-montserratsubrayada">Soft Skills</h2>
            <p className="text-base font-thin opacity-75 text-cyan-200 mt-4 font-silkscreen">Problem-solving, Communication, Teamwork, Time Management, Adaptability, Critical Thinking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
