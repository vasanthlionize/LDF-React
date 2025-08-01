import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  link?: string;
  externalLink?: string;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  link,
  externalLink,
  className = '',
  onClick,
  hoverEffect = true,
  children,
}) => {
  const cardContent = (
    <>
      {image && (
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="text-primary mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        {description && <p className="text-gray-300">{description}</p>}
        {children}
      </div>
    </>
  );

  const cardClasses = `bg-darker rounded-lg overflow-hidden group ${hoverEffect ? 'hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1' : ''} ${className}`;

  if (link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link to={link} className={cardClasses}>
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  if (externalLink) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href={externalLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cardClasses}
        >
          {cardContent}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {cardContent}
    </motion.div>
  );
};

export default Card;