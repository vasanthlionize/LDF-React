import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Transforming Digital Marketing in 2024',
    summary: 'Explore the latest AI technologies that are revolutionizing digital marketing strategies and how businesses can leverage them for growth.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Vasanthakumar N',
    date: 'June 15, 2024',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['AI', 'Digital Marketing', 'Technology'],
  },
  {
    id: '2',
    title: '10 Lead Generation Strategies That Actually Work',
    summary: 'Discover proven lead generation tactics that can help your business attract and convert high-quality leads consistently.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Priya Sharma',
    date: 'May 28, 2024',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Lead Generation', 'Marketing', 'Growth'],
  },
  {
    id: '3',
    title: 'Building a Strong Personal Brand in the Digital Age',
    summary: 'Learn how to establish and grow your personal brand online to increase your influence and open new opportunities.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Rahul Mehta',
    date: 'April 12, 2024',
    category: 'Personal Branding',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Personal Branding', 'Career Growth', 'Social Media'],
  },
  {
    id: '4',
    title: 'The Future of Business Automation with AI',
    summary: 'Explore how AI automation is reshaping business operations and how companies can prepare for an automated future.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Vasanthakumar N',
    date: 'March 5, 2024',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813dce26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['AI', 'Automation', 'Business Strategy'],
  },
  {
    id: '5',
    title: 'Essential Elements of a High-Converting Website',
    summary: 'Learn the key components that make a website effective at converting visitors into leads and customers.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Ananya Patel',
    date: 'February 18, 2024',
    category: 'Website Development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    tags: ['Web Design', 'Conversion Rate', 'UX'],
  },
  {
    id: '6',
    title: 'Creating a Comprehensive Digital Marketing Strategy',
    summary: 'A step-by-step guide to developing an effective digital marketing strategy that aligns with your business goals.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Vasanthakumar N',
    date: 'January 30, 2024',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    tags: ['Digital Marketing', 'Strategy', 'Planning'],
  },
];

const categories = [
  'All',
  'Digital Marketing',
  'Lead Generation',
  'Business Strategy',
  'Personal Branding',
  'AI Automation',
  'Website Development',
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Blog"
        subtitle="Insights, strategies, and trends in digital marketing, business growth, and AI technology."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Blog Content */}
      <Section className="py-20">
        <div className="mb-12">
          {/* Search and Filter */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-darker border border-gray-700 rounded-md py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-darker border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-300 mb-8">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    title={post.title}
                    description={post.summary}
                    image={post.image}
                    link={`/blog/${post.id}`}
                  >
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-primary hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
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
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the latest insights, tips, and trends in digital marketing, business strategy, and AI technology delivered to your inbox.
            </p>
            
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-darker border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-6 rounded-md transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Blog;