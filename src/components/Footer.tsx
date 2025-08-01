import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'Company', links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Blog', path: '/blog' },
    ]},
    { title: 'Services', links: [
      { name: 'Digital Marketing', path: '/services#digital-marketing' },
      { name: 'Lead Generation', path: '/services#lead-generation' },
      { name: 'Business Strategy', path: '/services#business-strategy' },
      { name: 'AI Automations', path: '/services#ai-automations' },
    ]},
    { title: 'Resources', links: [
      { name: 'AI Tools', path: '/ai-tools' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
    ]},
  ];

  return (
    <footer className="bg-darker pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl font-bold">
                <span className="text-primary">Lionize</span>
                <span className="text-white"> Digital Factory</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Your Growth Partner for Digital, AI, and Business Strategy.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://wa.me/919659092138" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a 
                href="mailto:info@lionizedigital.com" 
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <p>Bharathi Nagar, Veeravanallur, Tirunelveli - 627456</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <p>+91-9659092138</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <p>info@lionizedigital.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} Lionize Digital Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;