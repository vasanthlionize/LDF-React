import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'AI Tools', path: '/ai-tools' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className="text-primary">Lionize</span>
            <span className="text-white"> Digital Factory</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors duration-300 hover:text-primary ${isActive ? 'text-primary' : 'text-white'}`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Link to="/contact" className="btn-primary">
              Get Free Strategy Call
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav 
        className={`lg:hidden absolute w-full bg-darker py-5 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-base font-medium py-2 transition-colors duration-300 hover:text-primary ${isActive ? 'text-primary' : 'text-white'}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Free Strategy Call
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;