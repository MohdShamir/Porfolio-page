import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wanderlust",
      description: "A full-stack travel campground app with authentication, image upload, and CRUD features.",
      image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
      link: "https://major-project-full-web-devlopment.onrender.com/listings",
      github: "https://github.com/MohdShamir",
    },

  ];

  return (
    <section data-aos="fade-right" id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm mb-2">
            🚀 Featured Projects
          </h2>
          <p className="text-lg text-gray-700">
            Showcasing what I’ve built recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
