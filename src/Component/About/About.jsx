import React, { useEffect, useState } from "react";

function About() {
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const handleScrollAnimations = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimations, {
      threshold: 0.8, // Trigger when 80% of the element is visible
    });

    const cards = document.querySelectorAll(".animate-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="min-h-screen font-josefin bg-gradient-to-b from-violet-700 via-purple-800 to-orange-950 text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 hover:animate-changefonts cursor-pointer">
          About Me
        </h1>
        <div className="grid grid-cols-1 gap-20">
          {/* Education Card */}
          <div
            id="education"
            className={`sm:flex sm:items-center animate-card transition-transform duration-700 ease-out ${
              visibleCards["education"]
                ? "translate-x-0 opacity-100"
                : "md:translate-x-[100px] translate-y-[100px] opacity-0"
            }`}
          >
            <div className="sm:hidden flex justify-center mb-4">
              <i className="ri-keyboard-fill text-6xl text-indigo-400"></i>
            </div>
            <div className="hidden sm:block sm:w-1/4 text-center">
              <i className="ri-keyboard-fill text-6xl text-indigo-400"></i>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg sm:w-3/4 hover:scale-105 hover:shadow-2xl transition-transform">
              <h2 className="text-2xl font-semibold mb-3">Education</h2>
              <div>
                <h3 className="text-lg font-medium">School</h3>
                <p className="text-base">
                  Brilliant Higher Secondary School Indore
                </p>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium">Bachelor's</h3>
                <p className="text-base">
                  BCA - Bachelor of Computer Applications : RNT University,
                  Bhopal | (former name) AISECT University
                </p>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium">Master's</h3>
                <p className="text-base">
                  MCA - Master of Computer Applications : Graphic era
                  University, Dehradun
                </p>
              </div>
            </div>
          </div>

          {/* Career Card */}
          <div
            id="career"
            className={`sm:flex sm:items-center sm:flex-row-reverse animate-card transition-transform duration-700 ease-out ${
              visibleCards["career"]
                ? "translate-x-0 opacity-100"
                : "md:translate-x-[100px] translate-y-[100px] opacity-0"
            }`}
          >
            <div className="sm:hidden flex justify-center mb-4">
              <i className="ri-terminal-window-line text-6xl text-indigo-400"></i>
            </div>
            <div className="hidden sm:block sm:w-1/4 text-center">
              <i className="ri-terminal-window-line text-6xl text-indigo-400"></i>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg sm:w-3/4 hover:scale-105 hover:shadow-2xl transition-transform">
              <h2 className="text-2xl font-semibold mb-3">Career</h2>
              <div>
                <h3 className="text-lg font-medium">Current Role</h3>
                <p className="text-base">
                  Full Stack Software Engineer intern* | FYT
                </p>
              </div>
              {/* <div className="mt-3">
                <h3 className="text-lg font-medium">Previous Experience</h3>
                <p className="text-base">
                  3+ years of experience in web development and UI/UX design.
                </p>
              </div> */}
            </div>
          </div>

          {/* Skills Card */}
          <div
            id="skills"
            className={`sm:flex sm:items-center animate-card transition-transform duration-700 ease-out ${
              visibleCards["skills"]
                ? "translate-x-0 opacity-100"
                : "md:translate-x-[-100px]  translate-y-[100px] opacity-0"
            }`}
          >
            <div className="sm:hidden flex justify-center mb-4">
              <i className="ri-lightbulb-line text-6xl text-indigo-400"></i>
            </div>
            <div className="hidden sm:block sm:w-1/4 text-center">
              <i className="ri-lightbulb-line text-6xl text-indigo-400"></i>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg sm:w-3/4 hover:scale-105 hover:shadow-2xl transition-transform">
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <p className="text-base">
                Expertise in modern web technologies like React, Next.js,
                Tailwind CSS, and Appwrite. Proficient in building dynamic and
                responsive web applications. Additionally skilled in Firebase,
                SEO-friendly JavaScript, and data structures. Solved 500+ DSA
                questions on LeetCode and GeeksforGeeks.
                <br /> <br />
                <strong>Tools:</strong> VS Code, Git, GitHub, Firebase, Vite,
                EmailJS, Figma.
                <br />
                <strong>Soft Skills:</strong> Problem-solving, Communication,
                Teamwork, Time Management, Adaptability, Critical Thinking.
                <br />
                Proficient in programming languages like C, C++, SQL, and more.
              </p>
            </div>
          </div>

          {/* Hobbies Card */}
          <div
            id="hobbies"
            className={`sm:flex sm:items-center sm:flex-row-reverse animate-card transition-transform duration-700 ease-out ${
              visibleCards["hobbies"]
                ? "translate-x-0 opacity-100"
                : "md:translate-x-[100px] opacity-0 translate-y-[100px] "
            }`}
          >
            <div className="sm:hidden flex justify-center mb-4">
              <i className="ri-gamepad-line text-6xl text-indigo-400"></i>
            </div>
            <div className="hidden sm:block sm:w-1/4 text-center">
              <i className="ri-gamepad-line text-6xl text-indigo-400"></i>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg sm:w-3/4 hover:scale-105 hover:shadow-2xl transition-transform">
              <h2 className="text-2xl font-semibold mb-3">Hobbies</h2>
              <p className="text-base">
                Exploring new technologies and engaging in creative pursuits
                such as logo design and writing. I also love solving puzzles,
                which challenge my critical thinking and problem-solving skills,
                and enjoy brainstorming innovative ideas. My hobbies often
                involve activities that stimulate curiosity and creativity. For
                fitness, I enjoy playing badminton and swimming, which help me
                stay active and energized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
