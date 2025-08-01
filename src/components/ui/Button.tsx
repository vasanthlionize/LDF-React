import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  animate = true,
}) => {
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 ${fullWidth ? 'w-full' : ''}`;
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-secondary text-dark py-3 px-6',
    outline: 'border-2 border-primary hover:bg-primary text-white hover:text-dark py-3 px-6',
    text: 'text-primary hover:text-secondary py-2 px-4',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const motionProps = animate ? {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  } : {};

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;