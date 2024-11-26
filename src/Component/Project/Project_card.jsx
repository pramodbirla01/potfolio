import React from 'react';

function Project_card({ image, title, link }) {
  return (
    <div className="bg-white/5 font-josefin  min-h-32 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-110">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="h-28 w-full object-cover rounded-lg"
      />
      
      {/* Project Title */}
      <h2 className="mt-4 text-lg  text-white text-center">
        {title}
      </h2>
      
      {/* Button with Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 w-full py-2 text-center rounded-md bg-slate-500 text-white hover:bg-slate-600 transition"
      >
        See Project
      </a>
    </div>
  );
}

export default Project_card;
