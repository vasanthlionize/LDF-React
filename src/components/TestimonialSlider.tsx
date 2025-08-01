import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechCorp',
    text: 'Lionize Digital Factory transformed our digital presence completely. Their strategic approach to marketing helped us increase our leads by 150% in just three months.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Startup Innovations',
    text: 'The AI automation solutions provided by LDF saved us countless hours of manual work. Their team is professional, responsive, and truly understands business growth.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    position: 'E-commerce Manager',
    company: 'Global Retail',
    text: 'Working with Lionize Digital Factory has been a game-changer for our online store. Their lead generation strategies increased our conversion rates by 75%.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute top-0 left-0 text-primary opacity-10">
        <FaQuoteLeft size={120} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-center"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {testimonials[currentIndex].image && (
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                />
              </div>
            )}
            
            <p className="text-xl md:text-2xl text-gray-300 italic mb-8">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div>
              <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
              <p className="text-primary">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-darker hover:bg-primary/20 text-white transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-darker hover:bg-primary/20 text-white transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;