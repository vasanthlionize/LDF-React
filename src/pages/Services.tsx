import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaLightbulb, FaRobot, FaGlobe, FaUserTie } from 'react-icons/fa';

import Hero from '../components/ui/Hero';
import Section, { FadeInSection } from '../components/ui/Section';
import Button from '../components/ui/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive traffic, engagement, and conversions. We help you reach your target audience effectively across multiple channels.',
      icon: <FaGlobe size={36} />,
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics and Performance Tracking',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description: 'Targeted strategies to attract and convert high-quality leads for your business. We focus on generating leads that are most likely to convert into paying customers.',
      icon: <FaChartLine size={36} />,
      features: [
        'Lead Magnet Development',
        'Landing Page Optimization',
        'Conversion Rate Optimization',
        'Marketing Automation',
        'Lead Nurturing Campaigns',
        'Sales Funnel Development',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'business-strategy',
      title: 'Business Strategy & Growth Consulting',
      description: 'Comprehensive business growth consulting to scale your operations and revenue. We help you identify opportunities, overcome challenges, and achieve sustainable growth.',
      icon: <FaLightbulb size={36} />,
      features: [
        'Market Research and Analysis',
        'Competitive Positioning',
        'Growth Strategy Development',
        'Business Process Optimization',
        'Revenue Stream Diversification',
        'Performance Metrics and KPIs',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'personal-branding',
      title: 'Personal Branding',
      description: 'Build your personal brand to establish authority and expand your influence. We help professionals and executives create a compelling personal brand that resonates with their audience.',
      icon: <FaUserTie size={36} />,
      features: [
        'Personal Brand Strategy',
        'Content Creation and Distribution',
        'Social Media Presence Building',
        'Thought Leadership Development',
        'Speaking and Media Opportunities',
        'Online Reputation Management',
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'ai-automations',
      title: 'AI Automations',
      description: 'Cutting-edge AI solutions to automate workflows and increase operational efficiency. We leverage artificial intelligence to streamline your business processes and reduce manual work.',
      icon: <FaRobot size={36} />,
      features: [
        'AI Workflow Automation',
        'Chatbot Development',
        'Data Analysis and Insights',
        'Predictive Analytics',
        'Machine Learning Implementation',
        'Custom AI Solution Development',
      ],
      image: 'https://images.unsplash.com/photo-1677442135136-760c813dce26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'Custom, responsive websites designed for performance, conversions, and user experience. We create websites that not only look great but also drive business results.',
      icon: <FaRocket size={36} />,
      features: [
        'Custom Website Design',
        'E-commerce Development',
        'Mobile-Responsive Design',
        'UI/UX Optimization',
        'Website Performance Optimization',
        'Content Management Systems',
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital solutions to help your business grow and thrive in the digital landscape."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Overview */}
      <Section className="py-20">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How We Can <span className="gradient-text">Help You</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Lionize Digital Factory, we offer a comprehensive suite of services designed to help your business grow and succeed in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-darker rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button 
                  to={`/services#${service.id}`} 
                  variant="text"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <FadeInSection 
          key={service.id} 
          id={service.id}
          dark={index % 2 === 1}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : 'lg:flex-row-reverse'}`}>
            <div>
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-primary mr-4">{service.icon}</div>
                <h2 className="heading-lg">{service.title}</h2>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">What We Offer:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button to="/contact" variant="primary">
                  Get Started
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </FadeInSection>
      ))}

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
            <h2 className="heading-lg mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Get in Touch
              </Button>
              <Button to="/about" variant="outline" className="text-lg px-8 py-4">
                Learn More About Us
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Services;