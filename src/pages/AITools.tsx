import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCode, FaComments, FaClipboardCheck, FaSearch } from 'react-icons/fa';

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ContactForm from '../components/ContactForm';

interface AITool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

const aiTools: AITool[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Customer Service Chatbot',
    description: 'Intelligent chatbots that handle customer inquiries 24/7, reducing response time and improving customer satisfaction.',
    icon: <FaComments className="text-4xl text-primary" />,
    features: [
      '24/7 customer support',
      'Natural language processing',
      'Multi-language support',
      'Seamless handoff to human agents',
      'Integration with CRM systems'
    ],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Advanced analytics platform that uses AI to identify trends, predict outcomes, and provide actionable business insights.',
    icon: <FaChartLine className="text-4xl text-primary" />,
    features: [
      'Predictive analytics',
      'Custom reporting',
      'Data visualization',
      'Anomaly detection',
      'Automated insights generation'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'ai-content',
    title: 'AI Content Generator',
    description: 'Create high-quality, SEO-optimized content for your website, blog, and social media channels in minutes.',
    icon: <FaClipboardCheck className="text-4xl text-primary" />,
    features: [
      'Blog post generation',
      'Social media content creation',
      'Product descriptions',
      'Email marketing copy',
      'SEO optimization'
    ],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'ai-automation',
    title: 'Business Process Automation',
    description: 'Streamline your business operations with AI-powered workflow automation that reduces manual tasks and increases efficiency.',
    icon: <FaRobot className="text-4xl text-primary" />,
    features: [
      'Workflow automation',
      'Document processing',
      'Data entry automation',
      'Task scheduling',
      'Integration with existing systems'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'ai-seo',
    title: 'AI SEO Optimization',
    description: 'Leverage AI to improve your website's search engine rankings with data-driven keyword research and content optimization.',
    icon: <FaSearch className="text-4xl text-primary" />,
    features: [
      'Keyword research and analysis',
      'Content optimization suggestions',
      'Competitor analysis',
      'Backlink opportunities',
      'Performance tracking'
    ],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'ai-development',
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed specifically for your business needs, from recommendation engines to predictive maintenance systems.',
    icon: <FaCode className="text-4xl text-primary" />,
    features: [
      'Custom AI model development',
      'Integration with existing systems',
      'Scalable architecture',
      'Ongoing maintenance and updates',
      'Performance monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const AITools: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="AI Tools & Solutions"
        subtitle="Cutting-edge AI tools and solutions to automate, optimize, and scale your business operations."
        backgroundImage="https://images.unsplash.com/photo-1677442135136-760c813dce26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        primaryButton={{
          text: 'Request Demo',
          to: '#demo-form'
        }}
        secondaryButton={{
          text: 'Explore Tools',
          to: '#ai-tools'
        }}
      />

      {/* Introduction Section */}
      <Section className="py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Harness the Power of AI for Your Business
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Lionize Digital Factory, we develop cutting-edge AI solutions that help businesses automate processes, 
            gain valuable insights, and deliver exceptional customer experiences. Our AI tools are designed to be 
            user-friendly, scalable, and tailored to your specific business needs.
          </motion.p>
        </div>

        {/* AI Tools Grid */}
        <div id="ai-tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                title={tool.title}
                description={tool.description}
                image={tool.image}
                icon={tool.icon}
              >
                <div className="mt-4">
                  <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="py-20 bg-darker">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Our AI Solutions Work
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our implementation process is designed to be smooth, efficient, and tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: '01',
              title: 'Consultation',
              description: 'We start with a thorough consultation to understand your business needs and challenges.'
            },
            {
              step: '02',
              title: 'Solution Design',
              description: 'Our team designs a custom AI solution tailored to your specific requirements.'
            },
            {
              step: '03',
              title: 'Implementation',
              description: 'We implement the solution, integrate it with your existing systems, and train your team.'
            },
            {
              step: '04',
              title: 'Ongoing Support',
              description: 'We provide continuous support, updates, and optimization to ensure optimal performance.'
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-dark rounded-xl p-6 h-full border border-gray-800 hover:border-primary transition-all duration-300">
                <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#FFC700"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section className="py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how our AI solutions have helped businesses across various industries achieve their goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'E-commerce Revenue Increase',
              description: 'An e-commerce company saw a 45% increase in revenue after implementing our AI-powered product recommendation engine.',
              stats: '45% Revenue Increase',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            },
            {
              title: 'Customer Service Efficiency',
              description: 'A SaaS company reduced customer service response time by 70% and improved satisfaction scores with our AI chatbot.',
              stats: '70% Faster Response Time',
              image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-[400px] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-primary font-bold text-3xl mb-2">{item.stats}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <Button variant="outline" to="#demo-form">
                    Get Similar Results
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Demo Request Form */}
      <Section id="demo-form" className="py-20 bg-darker">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request a Demo</h2>
            <p className="text-xl text-gray-300 mb-8">
              Interested in seeing our AI tools in action? Fill out the form and we'll schedule a personalized demo for your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <FaRobot className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Personalized Demo</h3>
                  <p className="text-gray-300">See how our AI tools can be tailored to your specific business needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <FaChartLine className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">ROI Analysis</h3>
                  <p className="text-gray-300">Get a detailed analysis of the potential return on investment for your business.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <FaClipboardCheck className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Implementation Plan</h3>
                  <p className="text-gray-300">Receive a customized implementation plan tailored to your business timeline.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark p-8 rounded-xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6">Schedule Your Demo</h3>
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get answers to common questions about our AI tools and solutions.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: 'How long does it take to implement an AI solution?',
              answer: 'Implementation timelines vary depending on the complexity of the solution and your existing infrastructure. Simple solutions like chatbots can be implemented in 2-4 weeks, while more complex solutions may take 2-3 months. We'll provide a detailed timeline during the consultation phase.'
            },
            {
              question: 'Do I need technical expertise to use your AI tools?',
              answer: 'No, our AI tools are designed to be user-friendly and require minimal technical expertise. We provide comprehensive training and ongoing support to ensure your team can effectively use the tools.'
            },
            {
              question: 'How do you ensure data security and privacy?',
              answer: 'We take data security and privacy very seriously. All our AI solutions comply with industry standards and regulations. We implement robust security measures, including encryption, access controls, and regular security audits.'
            },
            {
              question: 'Can your AI solutions integrate with our existing systems?',
              answer: 'Yes, our AI solutions are designed to integrate seamlessly with most existing systems and platforms. We'll assess your current infrastructure during the consultation phase and design a solution that works with your existing systems.'
            },
            {
              question: 'What kind of support do you provide after implementation?',
              answer: 'We provide comprehensive support after implementation, including regular maintenance, updates, performance monitoring, and technical support. We also offer training sessions for your team to ensure they can effectively use the tools.'
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-dark border border-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-bold">{item.question}</h3>
                  <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Don't see your question here?</p>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-darker">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation with our AI experts to discuss how our solutions can help your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="#demo-form" variant="primary">
                Request a Demo
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default AITools;