import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Award, BookOpen, Coffee, Code, Heart, ChevronRight } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'education' | 'work' | 'achievement';
  company?: string;
  school?: string;
  location?: string;
}

interface Statistic {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'education' | 'work' | 'achievement'>('all');

  const timeline: TimelineItem[] = [
    {
      year: 'September 2024 - November 2024',
      title: 'Software Engineer, Intern',
      description: 'Developed and maintained dynamic webpages using PHP and Laravel frameworks',
      category: 'work',
      company: 'Links Engineering Limited',
      location: 'Accra, Ghana'
    },
    {
      year: 'March 2025 - May 2025',
      title: 'Software Engineer, Intern',
      description: 'Designed wireframes and mockups of websites using Figma. Also collaborated with senior engineers on projects. I also developed websites using the React framework.',
      category: 'work',
      company: 'Ghana-Indian Kofi Annan Centre of Excellence',
      location: 'Accra, Ghana'
    },
    {
      year: 'Present',
      title: "Bachelors in Computer Science",
      description: 'Currently pursuing a Bachelor\'s degree in Computer Science at the University of Ghana',
      category: 'education',
      school: 'University of Ghana',
      location: 'Legon, Accra'
    },
    {
      year: '2023',
      title: 'Certificate in Software Development',
      description: 'Completed a 6-month intensive software development program at the University of Ghana',
      category: 'achievement'
    }
  ];

  const statistics: Statistic[] = [
    {
      value: '2+',
      label: 'Years Experience',
      icon: <Code className="w-6 h-6" />
    },
    {
      value: '3+',
      label: 'Projects Completed',
      icon: <Award className="w-6 h-6" />
    },
    {
      value: '3+',
      label: 'Happy Clients',
      icon: <Heart className="w-6 h-6" />
    },
    {
      value: '∞',
      label: 'Cups of Coffee',
      icon: <Coffee className="w-6 h-6" />
    }
  ];

  const filteredTimeline = timeline.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0f1420] to-[#1a1f2c] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
              <p className="text-gray-400 leading-relaxed">
              Hey, I’m Jayden! I’m an aspiring software engineer with a passion for building modern and user-friendly web applications. My journey into tech started with a curiosity about how things work, which quickly grew into a love for solving problems through code.
              </p>
              <p className="text-gray-400 leading-relaxed">
              I specialize in full-stack development, with a strong focus on React and Node.js. I enjoy crafting clean and efficient solutions, whether it’s designing interactive frontends or building the logic behind the scenes.
Beyond coding, I love working on personal projects, learning new technologies, and sharing what I know with others. I’m always looking for opportunities to grow, collaborate, and create something meaningful.
              </p>
              <p className="text-gray-400 leading-relaxed">
              Let’s connect and build something great! 🚀
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/Jayden Software Engineering Resume -2.pdf"
              download="Jayden_Osafo_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-orange-500/20"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Timeline Category Filter */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['all', 'education', 'work', 'achievement'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as typeof selectedCategory)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {filteredTimeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative pl-8 pb-8 group"
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-transparent" />
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-orange-500 ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all" />

                    {/* Content */}
                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-orange-500/50 transition-all">
                      <div className="text-sm text-orange-500 mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h4>
                      {(item.company || item.school) && (
                        <div className="text-sm text-amber-500/80 mb-2">
                          {item.company || item.school}
                          {item.location && (
                            <span className="text-gray-500"> • {item.location}</span>
                          )}
                        </div>
                      )}
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 