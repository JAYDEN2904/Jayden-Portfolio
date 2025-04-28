import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileJson, 
  Database, 
  Server, 
  Layout, 
  Cpu,
  Palette,
  Globe,
  Boxes
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'tools' | 'cloud' | 'other';
  proficiency: number;
  description: string;
  yearsOfExperience: number;
  projects: number;
}

const skills: Skill[] = [
  {
    name: "HTML",
    icon: <Layout className="w-8 h-8 text-orange-500" />,
    category: "frontend",
    proficiency: 90,
    description: "Markup language for structuring web content",
    yearsOfExperience: 3,
    projects: 3
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-8 h-8 text-yellow-500" />,
    category: "frontend",
    proficiency: 90,
    description: "Programming language for interactive web development",
    yearsOfExperience: 2,
    projects: 3
  },
  {
    name: "React",
    icon: "⚛️",
    category: "frontend",
    proficiency: 90,
    description: "Building modern, responsive web applications with React and its ecosystem",
    yearsOfExperience: 2,
    projects: 3
  },
  {
    name: "React Native",
    icon: "⚛️",
    category: "frontend",
    proficiency: 80,
    description: "Building mobile applications with React Native and its ecosystem",
    yearsOfExperience: 2,
    projects: 1
  },
  {
    name: "Node.js",
    icon: <Server className="w-8 h-8 text-green-500" />,
    category: "backend",
    proficiency: 80,
    description: "Server-side development with Express, REST APIs, and microservices",
    yearsOfExperience: 2,
    projects: 1
  },
  {
    name: "MongoDB",
    icon: <Database className="w-8 h-8 text-green-500" />,
    category: "backend",
    proficiency: 75,
    description: "NoSQL database for flexible and scalable applications",
    yearsOfExperience: 2,
    projects: 1
  },
  {
    name: "MySQL",
    icon: <Database className="w-8 h-8 text-blue-500" />,
    category: "backend",
    proficiency: 70,
    description: "Relational database for structured data storage and retrieval",
    yearsOfExperience: 2,
    projects: 1
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="w-8 h-8 text-cyan-500" />,
    category: "frontend",
    proficiency: 90,
    description: "CSS framework for rapid UI development",
    yearsOfExperience: 1,
    projects: 2
  },
  {
    name: "PHP",
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    category: "backend",
    proficiency: 40,
    description: "Server-side scripting language for web development",
    yearsOfExperience: 1,
    projects: 1
  }    
// Add more skills here
];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Boxes className="w-5 h-5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'cloud', label: 'Cloud', icon: <Globe className="w-5 h-5" /> },
    { id: 'tools', label: 'Tools', icon: <Cpu className="w-5 h-5" /> }
  ];

  const filteredSkills = skills.filter(skill => 
    selectedCategory === 'all' || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0f1420] to-[#1a1f2c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
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
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
            >
              <span>{typeof category.icon === 'string' ? category.icon : category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedSkill(skill)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{typeof skill.icon === 'string' ? skill.icon : skill.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Proficiency Bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                    />
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-400">
                      <span className="text-white font-medium">{skill.yearsOfExperience}</span> years
                    </div>
                    <div className="text-gray-400">
                      <span className="text-white font-medium">{skill.projects}</span> projects
                    </div>
                    <div className="text-gray-400">
                      <span className="text-white font-medium">{skill.proficiency}%</span> proficiency
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 