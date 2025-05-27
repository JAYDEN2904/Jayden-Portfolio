import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import faithBaptist from '../assets/faithBaptist.jpg';
import aquanetImage from '../assets/AQUANET.jpeg';
import restaurantImage from '../assets/Restaurant.png'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'other';
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "School Website",
    description: "A modern educational institution website featuring admissions, academics, and student life. Built with a focus on user experience and accessibility.",
    technologies: ["React", "Tailwind CSS"],
    imageUrl: faithBaptist,
    githubUrl: "https://github.com/JAYDEN2904/Faith-Baptist-Project.git",
    liveUrl: "https://fcbcs.vercel.app",
    category: "frontend",
    featured: true
  },
  {
    title: "AQUANET",
    description: "AquaNet is a comprehensive e-commerce platform built using the MERN stack. This project aims to facilitate a seamless connection between fish producers, suppliers, and consumers in the fish farming industry. I was on the backend development team for this project.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    imageUrl: aquanetImage,
    githubUrl: "https://github.com/Code-Crafters-Innovation/AquaNet-Frontend.git",
    liveUrl: "https://dashboard-demo.com",
    category: "fullstack",
    featured: true
  },
  {
    title: "Mordern Restaurant Website",
    description: "A fully responsive and visually engaging restaurant website built with React. This project features a dynamic menu with category filtering, a reservation form with validation, a photo gallery, and a newsletter sign-up section. Smooth transitions and animations enhance the user experience, making it feel elegant and interactive across all devices.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: restaurantImage,
    githubUrl: "https://github.com/JAYDEN2904/Restaurant.git",
    liveUrl: "https://saveur-restaurant.vercel.app",
    category: "frontend",
    featured: true
  }
  // Add more projects here
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'other', label: 'Other' }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1a1f2c] to-[#0f1420]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing my expertise in web development and design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-60 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.style.backgroundColor = '#374151'; // Gray background as fallback
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="text-orange-500" size={24} />
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects; 