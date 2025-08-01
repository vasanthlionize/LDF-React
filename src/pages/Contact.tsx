import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="Have a project in mind? Let's discuss how we can help your business grow."
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Contact Content */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-gray-300 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <p className="text-gray-300 mb-8">Reach out to us directly through any of these channels.</p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-primary/20 p-4 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Location</h3>
                  <p className="text-gray-300">
                    Bharathi Nagar, Veeravanallur<br />
                    Tirunelveli - 627456<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-primary/20 p-4 rounded-lg mr-4">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">+91 9659092138</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-primary/20 p-4 rounded-lg mr-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-gray-300">contact@lionizedigital.com</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/919659092138" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-lg transition-all duration-300"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/lionize-digital-factory" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0077B5] hover:bg-[#00669c] text-white p-4 rounded-lg transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="mailto:contact@lionizedigital.com" 
                    className="bg-primary hover:bg-secondary text-dark p-4 rounded-lg transition-all duration-300"
                  >
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8043384555!2d77.56244!3d8.624722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0e7c2f5d1a3%3A0x5c0d6a7c1c5c5c5c!2sVeeravanallur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lionize Digital Factory Location"
            ></iframe>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto mt-20 relative overflow-hidden"
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
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free 30-minute strategy call with our experts to discuss your business goals and how we can help you achieve them.
            </p>
            
            <a 
              href="https://calendly.com/lionizedigital/strategy-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-md transition-all duration-300 inline-block"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Contact;