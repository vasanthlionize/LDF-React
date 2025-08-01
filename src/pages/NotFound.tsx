import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <Section className="py-32 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-10">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/" variant="primary" icon={<FaHome />}>
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" icon={<FaEnvelope />}>
            Contact Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-gray-400">
            Looking for something specific? Check out our <Link to="/sitemap" className="text-primary hover:underline">sitemap</Link> or 
            use the navigation menu above.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default NotFound;