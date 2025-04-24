import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  useEffect(() => {
    const createParticles = () => {
      const particles = document.getElementById('particles');
      if (!particles) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/10 rounded-full';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
        particles.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-100px) translateX(50px);
            }
            100% {
              transform: translateY(-200px) translateX(0);
              opacity: 0;
            }
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
        `}
      </style>
      
      <div ref={containerRef} className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0f1420] to-[#1a1f2c] overflow-hidden">
        {/* Particle effect */}
        <div id="particles" className="absolute inset-0 z-0" />

        {/* 3D Geometric Elements */}
        <div className="absolute inset-0 z-0">
          {/* Large geometric shapes */}
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            {/* Main cube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: [-45, 45, -45],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 right-1/4 w-64 h-64"
            >
              <div className="relative w-full h-full transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/20 backdrop-blur-3xl rounded-2xl shadow-2xl transform rotate-12" />
              </div>
            </motion.div>

            {/* Secondary shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-full blur-md"
            />
          </motion.div>

          {/* Glowing elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-amber-200/20 to-amber-400/30 blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-gray-400 text-lg">Hi, I am</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
          >
            JAYDEN OSAFO
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-400 tracking-wider font-light"
          >
            SOFTWARE ENGINEER & WEB DEVELOPER
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Crafting elegant solutions through code, specializing in modern web applications 
            and innovative digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-orange-500/20"
              >
                View Projects
              </motion.button>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/JAYDEN2904"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jaydenosafo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:jaydenosafo.dev@gmail.com"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;