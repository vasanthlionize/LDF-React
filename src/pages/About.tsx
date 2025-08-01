import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

import Hero from '../components/ui/Hero';
import Section, { FadeInSection } from '../components/ui/Section';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and strategies to keep our clients ahead of the curve.',
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership',
      description: 'We view ourselves as an extension of your team, committed to your long-term success.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do, from strategy to execution.',
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric',
      description: 'Your goals are our goals. We tailor our approach to your unique business needs.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Lionize Digital Factory was established with a vision to help businesses leverage digital technology for growth.',
    },
    {
      year: '2021',
      title: 'Service Expansion',
      description: 'Expanded our service offerings to include AI automation solutions and advanced digital marketing strategies.',
    },
    {
      year: '2022',
      title: 'Team Growth',
      description: 'Grew our team of experts across marketing, technology, and business strategy domains.',
    },
    {
      year: '2023',
      title: 'Client Milestone',
      description: 'Successfully helped over 50 businesses achieve significant growth through our digital strategies.',
    },
    {
      year: '2024',
      title: 'Innovation Focus',
      description: 'Launched specialized AI tools and solutions to further enhance our clients' business operations.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Lionize Digital Factory"
        subtitle="We're a digital growth and AI strategy company helping businesses scale faster through smart marketing and technology."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Mission Section */}
      <FadeInSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">Our <span className="gradient-text">Mission</span></h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              At Lionize Digital Factory, we're on a mission to transform how businesses approach digital growth. We combine strategic thinking, cutting-edge technology, and creative marketing to help our clients achieve sustainable success in the digital landscape.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe that every business has unique potential, and our job is to unlock that potential through tailored digital strategies and solutions that drive real results.
            </p>
            <div className="space-y-4">
              {[
                'Data-driven marketing strategies',
                'Innovative AI solutions',
                'Growth-focused business consulting',
                'Measurable results and ROI',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-primary mr-3" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our mission" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </FadeInSection>

      {/* Founder Section */}
      <FadeInSection dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Vasanthakumar N - Founder" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">Meet Our <span className="gradient-text">Founder</span></h2>
            <h3 className="text-2xl font-bold mb-4">Vasanthakumar N</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              With over a decade of experience in digital marketing and business strategy, Vasanthakumar founded Lionize Digital Factory with a vision to help businesses harness the power of digital technology and AI to achieve exceptional growth.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              His expertise spans across digital marketing, business development, AI implementation, and growth strategy. Vasanthakumar is passionate about staying at the forefront of digital innovation and bringing those insights to clients.
            </p>
            <Button 
              href="https://linkedin.com" 
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </motion.div>
        </div>
      </FadeInSection>

      {/* Values Section */}
      <FadeInSection>
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Values</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            These core principles guide everything we do at Lionize Digital Factory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-darker p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </FadeInSection>

      {/* Timeline Section */}
      <FadeInSection dark>
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Key milestones in our growth and evolution as a company.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <motion.div
                  className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Year */}
                  <div className="md:w-1/2 flex md:justify-center mb-4 md:mb-0">
                    <div className="bg-primary text-dark font-bold text-2xl py-2 px-6 rounded-lg inline-block">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 bg-darker p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </motion.div>
                
                {/* Circle on timeline */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
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
            <h2 className="heading-lg mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve its digital growth goals.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default About;