import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
  centered?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  overlay = true,
  centered = true,
  fullHeight = true,
  children,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div 
      className={`relative ${fullHeight ? 'min-h-screen' : 'py-32'} flex items-center`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark/90 to-dark"></div>
      )}

      {/* 3D Effect Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`container-custom relative z-10 ${centered ? 'text-center mx-auto' : ''}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants} 
            className="heading-xl mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryButtonText || secondaryButtonText) && (
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {primaryButtonText && primaryButtonLink && (
                <Button to={primaryButtonLink} variant="primary">
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && secondaryButtonLink && (
                <Button to={secondaryButtonLink} variant="outline">
                  {secondaryButtonText}
                </Button>
              )}
            </motion.div>
          )}

          {children && <motion.div variants={itemVariants}>{children}</motion.div>}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;