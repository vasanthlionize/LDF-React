import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  fullWidth = false,
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-darker' : 'bg-dark'} ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'container-custom'}>
        {children}
      </div>
    </section>
  );
};

export const FadeInSection: React.FC<SectionProps & { delay?: number }> = ({
  children,
  className = '',
  id,
  fullWidth = false,
  dark = false,
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      className={`section-padding ${dark ? 'bg-darker' : 'bg-dark'} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={fullWidth ? 'w-full' : 'container-custom'}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;