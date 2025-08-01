import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaLightbulb, FaRobot, FaGlobe, FaUserTie } from 'react-icons/fa';

import Hero from '../components/ui/Hero';
import Section, { FadeInSection } from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive traffic, engagement, and conversions.',
      icon: <FaGlobe size={36} />,
      link: '/services#digital-marketing',
    },
    {
      id: 2,
      title: 'Lead Generation',
      description: 'Targeted strategies to attract and convert high-quality leads for your business.',
      icon: <FaChartLine size={36} />,
      link: '/services#lead-generation',
    },
    {
      id: 3,
      title: 'Business Strategy',
      description: 'Comprehensive business growth consulting to scale your operations and revenue.',
      icon: <FaLightbulb size={36} />,
      link: '/services#business-strategy',
    },
    {
      id: 4,
      title: 'AI Automations',
      description: 'Cutting-edge AI solutions to automate workflows and increase operational efficiency.',
      icon: <FaRobot size={36} />,
      link: '/services#ai-automations',
    },
    {
      id: 5,
      title: 'Personal Branding',
      description: 'Build your personal brand to establish authority and expand your influence.',
      icon: <FaUserTie size={36} />,
      link: '/services#personal-branding',
    },
    {
      id: 6,
      title: 'Website Development',
      description: 'Custom, responsive websites designed for performance, conversions, and user experience.',
      icon: <FaRocket size={36} />,
      link: '/services#website-development',
    },
  ];

  const clientLogos = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Your Growth Partner for <span className="gradient-text">Digital, AI,</span> and <span className="gradient-text">Business Strategy</span>
          </>
        }
        subtitle="We help businesses scale faster through smart marketing, technology, and strategic consulting."
        primaryButtonText="Get Free Strategy Call"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />

      {/* Services Section */}
      <FadeInSection id="services">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive digital solutions to help your business grow and thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </FadeInSection>

      {/* Why Choose Us Section */}
      <FadeInSection dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="heading-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose <span className="gradient-text">Lionize Digital Factory</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Data-Driven Approach',
                  description: 'We make decisions based on analytics and insights, not guesswork.',
                },
                {
                  title: 'Customized Strategies',
                  description: 'Every business is unique. We create tailored solutions for your specific goals.',
                },
                {
                  title: 'Cutting-Edge Technology',
                  description: 'We leverage the latest AI and digital tools to give you a competitive edge.',
                },
                {
                  title: 'Measurable Results',
                  description: 'Clear reporting and KPIs to track your ROI and business growth.',
                },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <FaRocket size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button to="/about" variant="primary">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team working on digital strategy" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </FadeInSection>

      {/* Client Logos Section */}
      <Section className="py-12">
        <div className="text-center mb-10">
          <motion.h3 
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Businesses
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 md:h-16"
              />
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonials Section */}
      <FadeInSection dark>
        <div className="text-center mb-12">
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>
        
        <TestimonialSlider />
      </FadeInSection>

      {/* CTA Section */}
      <Section className="py-20">
        <motion.div 
          className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="heading-lg mb-6">Ready to Accelerate Your Business Growth?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free strategy call with our experts and discover how we can help you achieve your business goals.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;