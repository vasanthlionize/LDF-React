import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({ submitted: false, success: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.',
      });
      return;
    }

    // In a real application, you would send the form data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1000);
  };

  const inputClasses = "w-full bg-darker border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark rounded-lg p-6 md:p-8 shadow-xl border border-gray-800"
    >
      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
      
      {formStatus.submitted && (
        <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={inputClasses}
            required
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full md:w-auto"
          icon={<FaPaperPlane />}
        >
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;