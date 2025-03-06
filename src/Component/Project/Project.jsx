import React, { useState } from 'react';
import { Sparkles } from '../Sparkals';
import Project_card from './Project_card';
import project1 from '../../Assets/project1.png'
import project2 from '../../Assets/project2.png'
import project3 from '../../Assets/project3.png'
import project4 from '../../Assets/project4.png'
import project5 from '../../Assets/project5.png'
import project6 from '../../Assets/project6.png'
import project7 from '../../Assets/project7.png'
import project8 from '../../Assets/project8.png'
function Project() {
  // Sample Project Data with links
  const projects = [
    { 
      id: 1, 
      image: project1, 
      title: 'Sanurri Rugs', 
      link: 'https://sanurrirugs.com/' 
    },
    { 
      id: 2, 
      image: project2,
      title: 'Purikam organic', 
      link: 'https://purikam.com/' 
    },
    { 
      id: 3, 
      image: project3,
      title: 'Modern Astro site', 
      link: 'https://mellifluous-vacherin-626973.netlify.app/' 
    },
    { 
      id: 4, 
      image: project4, 
      title: 'Score Managing panel', 
      link: 'https://cricket-score-panel.netlify.app/' 
    },
    { 
      id: 5, 
      image: project5, 
      title: 'The Majestic peacock', 
      link: 'https://www.themajesticpeacock.com/' 
    },
    { 
      id: 6, 
      image: project6, 
      title: 'Anvix Clothing', 
      link: 'https://rosy-delta.vercel.app/' 
    },
    { 
      id: 7, 
      image: project7, 
      title: 'Shades Of Green Trading', 
      link: 'https://shadow-pink.vercel.app/' 
    },
    { 
      id: 8, 
      image: project8, 
      title: 'RaisSpices - Pure Authentic Spices', 
      link: 'https://raisspices.com/' 
    },  
  ];

  // State for managing visible projects
  const [visibleProjects, setVisibleProjects] = useState(4);

  // Function to handle "See More Projects"
  const handleSeeMore = () => {
    setVisibleProjects((prev) =>
      prev + 4 > projects.length ? projects.length : prev + 4
    );
  };

  return (
    <>
      <main className="relative min-h-screen font-josefin bg-gradient-to-b from-violet-800 from-20% md:from-5%  via-from-violet-800 via-30% md:via-10%  to-indigo-950 to-40%  flex flex-col items-center py-20 overflow-hidden">
        {/* Sparkles Background */}
        <div className="absolute inset-0 z-0">
          <Sparkles
            density={800}
            speed={2}
            color="#ffffff"
            direction="top"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Projects Grid */}
        <h1 className='font-bold text-3xl md:text-5xl font-silkscreen text-gray-100 pb-10 '>Projects</h1>
        <div className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl px-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <Project_card
              key={project.id}
              image={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>

        {/* "See More Projects" Button */}
        {visibleProjects < projects.length && (
          <button
            onClick={handleSeeMore}
            className="relative z-10 mt-10 py-3 px-8 rounded-lg bg-white/10 text-white hover:bg-blue-800 transition backdrop-blur-sm shadow-lg"
          >
            See More Projects
          </button>
        )}
      </main>
    </>
  );
}

export default Project;
