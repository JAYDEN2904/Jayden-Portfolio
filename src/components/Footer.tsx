import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JAYDEN2904',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jaydenosafo',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/JaydenOsafo',
      icon: <Twitter size={20} />
    }
  ];

  return (
    <footer className="bg-[#1a1f2c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">About Me</h3>
            <p className="text-gray-400">
              A passionate developer focused on creating beautiful and functional web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Connect</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Contact</h3>
            <div className="text-gray-400 space-y-2">
              <div className="flex items-center justify-end gap-2">
                <Mail size={16} className="text-orange-500" />
                <a href="mailto:jaydenosafo.dev@gmail.com" className="hover:text-orange-500 transition-colors">
                  jaydenosafo.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <MapPin size={16} className="text-orange-500" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© {currentYear} Jayden Osafo. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 