import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// This would typically come from an API or CMS
const blogPosts = [
  {
    id: '1',
    title: 'How AI is Transforming Digital Marketing in 2024',
    summary: 'Explore the latest AI technologies that are revolutionizing digital marketing strategies and how businesses can leverage them for growth.',
    content: `
      <p>Artificial Intelligence (AI) has become a game-changer in the digital marketing landscape, transforming how businesses connect with their audiences and optimize their marketing efforts. In 2024, AI technologies have evolved to provide unprecedented capabilities for marketers, enabling more personalized, efficient, and effective campaigns.</p>
      
      <h2>Personalization at Scale</h2>
      <p>One of the most significant impacts of AI on digital marketing is the ability to deliver highly personalized experiences at scale. AI algorithms analyze vast amounts of customer data to identify patterns and preferences, allowing marketers to tailor content, product recommendations, and offers to individual users. This level of personalization was previously impossible to achieve manually, but AI makes it not only possible but also efficient.</p>
      
      <p>For example, e-commerce platforms now use AI to analyze browsing history, purchase behavior, and demographic information to recommend products that are most likely to appeal to each customer. This personalized approach has been shown to increase conversion rates by up to 30%.</p>
      
      <h2>Predictive Analytics for Strategic Decision-Making</h2>
      <p>AI-powered predictive analytics tools are helping marketers make more informed decisions by forecasting future trends and customer behaviors. By analyzing historical data and identifying patterns, these tools can predict which marketing strategies are likely to yield the best results, allowing businesses to allocate their resources more effectively.</p>
      
      <p>Predictive analytics can help answer critical questions such as:</p>
      <ul>
        <li>Which customers are most likely to convert?</li>
        <li>What is the optimal timing for launching a campaign?</li>
        <li>Which channels will deliver the highest ROI?</li>
        <li>What content will resonate most with specific audience segments?</li>
      </ul>
      
      <h2>Content Creation and Optimization</h2>
      <p>AI is revolutionizing content creation and optimization, enabling marketers to produce more relevant, engaging, and effective content. AI-powered tools can now generate blog posts, social media updates, email subject lines, and even video scripts. While human creativity and oversight remain essential, AI can significantly speed up the content creation process and provide data-driven insights for optimization.</p>
      
      <p>Furthermore, AI tools can analyze existing content to identify opportunities for improvement, such as:</p>
      <ul>
        <li>Optimizing headlines for better click-through rates</li>
        <li>Suggesting keywords to improve SEO performance</li>
        <li>Identifying content gaps in your strategy</li>
        <li>Recommending optimal content length and structure</li>
      </ul>
      
      <h2>Conversational Marketing with Chatbots</h2>
      <p>AI-powered chatbots have evolved from simple rule-based systems to sophisticated conversational agents capable of understanding natural language and providing personalized assistance. These chatbots can engage with customers 24/7, answer questions, recommend products, and even complete transactions, providing a seamless customer experience while reducing the burden on human customer service teams.</p>
      
      <p>The latest generation of AI chatbots can:</p>
      <ul>
        <li>Understand and respond to complex queries</li>
        <li>Learn from interactions to improve over time</li>
        <li>Provide personalized recommendations based on user preferences</li>
        <li>Seamlessly hand off to human agents when necessary</li>
      </ul>
      
      <h2>Enhanced Customer Insights</h2>
      <p>AI is enabling marketers to gain deeper insights into customer behavior and preferences through advanced analytics and natural language processing. By analyzing social media conversations, customer reviews, and support interactions, AI tools can identify emerging trends, sentiment patterns, and unmet needs, providing valuable insights for product development and marketing strategy.</p>
      
      <p>These insights allow businesses to:</p>
      <ul>
        <li>Identify emerging market trends before competitors</li>
        <li>Understand customer pain points and address them proactively</li>
        <li>Measure brand sentiment and reputation in real-time</li>
        <li>Develop more targeted and relevant marketing messages</li>
      </ul>
      
      <h2>The Future of AI in Digital Marketing</h2>
      <p>As AI technologies continue to evolve, we can expect even more transformative applications in digital marketing. Some emerging trends to watch include:</p>
      
      <ul>
        <li><strong>Voice and visual search optimization:</strong> As voice assistants and image recognition technologies become more prevalent, marketers will need to optimize their content for these new search modalities.</li>
        <li><strong>Hyper-personalization:</strong> AI will enable even more granular personalization, potentially down to the individual message level for each customer.</li>
        <li><strong>Predictive customer service:</strong> AI will help businesses anticipate customer issues before they arise and provide proactive solutions.</li>
        <li><strong>Augmented reality experiences:</strong> AI will power more immersive and personalized AR experiences for customers.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI is no longer just a buzzword in digital marketing—it's a fundamental force reshaping how businesses connect with their audiences. By embracing AI technologies, marketers can deliver more personalized experiences, make more informed decisions, create more effective content, and gain deeper customer insights. The businesses that successfully integrate AI into their digital marketing strategies will be well-positioned to thrive in the increasingly competitive digital landscape of 2024 and beyond.</p>
    `,
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
    content: `
      <p>In today's competitive business landscape, generating high-quality leads consistently is essential for sustainable growth. However, many businesses struggle to implement effective lead generation strategies that deliver measurable results. In this article, we'll explore 10 proven lead generation tactics that can help your business attract and convert qualified leads.</p>
      
      <h2>1. Content Marketing with a Strategic Funnel Approach</h2>
      <p>Content marketing remains one of the most effective lead generation strategies, but it requires a strategic approach. Create content that addresses specific pain points at each stage of the buyer's journey:</p>
      
      <ul>
        <li><strong>Awareness stage:</strong> Blog posts, infographics, and social media content that educate prospects about their problems</li>
        <li><strong>Consideration stage:</strong> Whitepapers, case studies, and webinars that present potential solutions</li>
        <li><strong>Decision stage:</strong> Product comparisons, testimonials, and free trials that help prospects make a final decision</li>
      </ul>
      
      <p>By mapping content to each stage of the funnel, you can guide prospects through their buying journey and increase conversion rates.</p>
      
      <h2>2. SEO-Optimized Landing Pages</h2>
      <p>Create dedicated landing pages for specific products, services, or offers, optimized for both search engines and conversions. Each landing page should:</p>
      
      <ul>
        <li>Target specific keywords relevant to your offering</li>
        <li>Have a clear, compelling headline that addresses a specific pain point</li>
        <li>Include persuasive copy that highlights benefits, not just features</li>
        <li>Feature a strong, singular call-to-action</li>
        <li>Remove navigation menus to minimize distractions</li>
        <li>Include social proof (testimonials, reviews, client logos)</li>
      </ul>
      
      <p>A well-optimized landing page can significantly increase your conversion rates while also improving your search engine rankings.</p>
      
      <h2>3. Interactive Content and Tools</h2>
      <p>Interactive content engages prospects more effectively than static content and can generate higher-quality leads. Consider creating:</p>
      
      <ul>
        <li>Assessment tools or quizzes that help prospects understand their needs</li>
        <li>Calculators that demonstrate ROI or potential savings</li>
        <li>Interactive infographics that present complex information in an engaging way</li>
        <li>Configurators or product selectors that help prospects find the right solution</li>
      </ul>
      
      <p>These tools not only engage prospects but also provide valuable data about their needs and preferences, allowing for more personalized follow-up.</p>
      
      <h2>4. Strategic Email Marketing Automation</h2>
      <p>Email marketing remains one of the most cost-effective lead nurturing channels, with an average ROI of $42 for every $1 spent. Implement automated email sequences that:</p>
      
      <ul>
        <li>Welcome new subscribers and set expectations</li>
        <li>Deliver valuable content based on subscriber interests and behaviors</li>
        <li>Re-engage inactive leads with personalized offers</li>
        <li>Nurture leads with educational content before making a sales pitch</li>
        <li>Follow up after specific trigger events (e.g., downloading a whitepaper)</li>
      </ul>
      
      <p>Personalization is key—segment your email list based on demographics, behavior, and engagement level to deliver more relevant content.</p>
      
      <h2>5. Webinars and Virtual Events</h2>
      <p>Webinars and virtual events are powerful lead generation tools, especially for B2B companies. They position your brand as an authority while capturing qualified leads. To maximize effectiveness:</p>
      
      <ul>
        <li>Choose topics that address specific pain points of your target audience</li>
        <li>Partner with industry influencers or complementary businesses to expand reach</li>
        <li>Promote the event across multiple channels (email, social media, industry forums)</li>
        <li>Include interactive elements like polls, Q&A sessions, and breakout rooms</li>
        <li>Follow up with attendees and no-shows with relevant content and offers</li>
      </ul>
      
      <p>Record your webinars to create evergreen content that continues to generate leads long after the live event.</p>
      
      <h2>6. Social Media Lead Generation Campaigns</h2>
      <p>Social media platforms offer sophisticated targeting options that can help you reach your ideal customers. Effective social media lead generation strategies include:</p>
      
      <ul>
        <li>LinkedIn Lead Gen Forms for B2B lead generation</li>
        <li>Facebook Lead Ads with pre-populated forms to reduce friction</li>
        <li>Twitter Lead Generation Cards for capturing leads directly in the platform</li>
        <li>Instagram Shopping features for e-commerce businesses</li>
        <li>Pinterest Rich Pins to drive traffic to lead capture pages</li>
      </ul>
      
      <p>Focus on platforms where your target audience is most active and tailor your content to the specific platform's strengths.</p>
      
      <h2>7. Referral Programs</h2>
      <p>Referral programs leverage your existing customer base to generate new leads. Satisfied customers can be your best advocates, and their recommendations carry significant weight. To create an effective referral program:</p>
      
      <ul>
        <li>Make it easy for customers to refer others (provide templates, links, etc.)</li>
        <li>Offer incentives for both the referrer and the new lead</li>
        <li>Recognize and thank customers who provide referrals</li>
        <li>Track referral sources to identify your most valuable advocates</li>
        <li>Continuously optimize the program based on results</li>
      </ul>
      
      <p>Referral leads typically have higher conversion rates and customer lifetime value compared to other lead sources.</p>
      
      <h2>8. Strategic Partnerships and Co-Marketing</h2>
      <p>Partnering with complementary businesses can help you reach new audiences and generate qualified leads. Consider these co-marketing opportunities:</p>
      
      <ul>
        <li>Co-hosted webinars or events</li>
        <li>Joint research reports or whitepapers</li>
        <li>Guest blogging on partner websites</li>
        <li>Co-branded email campaigns</li>
        <li>Bundle offers or product integrations</li>
      </ul>
      
      <p>Look for partners that serve the same target audience but don't directly compete with your offerings.</p>
      
      <h2>9. Conversational Marketing with Chatbots</h2>
      <p>Chatbots can engage website visitors in real-time, answer questions, and qualify leads 24/7. Implement chatbots that:</p>
      
      <ul>
        <li>Greet visitors with personalized messages based on their behavior</li>
        <li>Ask qualifying questions to understand visitor needs</li>
        <li>Provide relevant resources based on visitor responses</li>
        <li>Schedule meetings or demos with sales representatives</li>
        <li>Collect contact information for follow-up</li>
      </ul>
      
      <p>Chatbots can significantly reduce the time from initial interest to qualified lead, improving conversion rates and sales efficiency.</p>
      
      <h2>10. Retargeting Campaigns</h2>
      <p>Most website visitors don't convert on their first visit. Retargeting campaigns help you stay top-of-mind and bring these visitors back to complete a conversion. Effective retargeting strategies include:</p>
      
      <ul>
        <li>Segment retargeting audiences based on specific pages visited</li>
        <li>Create tailored ad messaging for different segments</li>
        <li>Offer incentives to encourage conversion (e.g., limited-time discounts)</li>
        <li>Implement frequency caps to avoid ad fatigue</li>
        <li>Use sequential retargeting to tell a story across multiple ads</li>
      </ul>
      
      <p>Retargeting can increase conversion rates by up to 150% compared to standard display advertising.</p>
      
      <h2>Conclusion</h2>
      <p>Effective lead generation requires a multi-channel approach that meets your target audience where they are and provides value at every interaction. By implementing these 10 strategies and continuously optimizing based on results, you can build a sustainable lead generation system that fuels your business growth.</p>
      
      <p>Remember that the most successful lead generation strategies focus not just on quantity but on quality. It's better to generate fewer, highly-qualified leads than to fill your pipeline with prospects who are unlikely to convert. Measure your results, test different approaches, and refine your strategies to maximize your return on investment.</p>
    `,
    author: 'Priya Sharma',
    date: 'May 28, 2024',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Lead Generation', 'Marketing', 'Growth'],
  },
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <Section className="py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button to="/blog" variant="primary" icon={<FaArrowLeft />}>
            Back to Blog
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-300 hover:text-primary mb-4 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-300 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <FaUser className="mr-2 text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2 text-primary" />
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-primary/20 text-primary px-3 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4">Share This Post</h3>
              <div className="flex gap-3">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] hover:bg-[#0E5FC0] text-white p-3 rounded-md transition-colors duration-300"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] hover:bg-[#0C85D0] text-white p-3 rounded-md transition-colors duration-300"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.summary)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] hover:bg-[#084E96] text-white p-3 rounded-md transition-colors duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Author Bio */}
            <div className="bg-darker p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <FaUser className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{post.author}</h4>
                  <p className="text-gray-300">Content Specialist</p>
                </div>
              </div>
              <p className="text-gray-300">
                {post.author === 'Vasanthakumar N' 
                  ? 'Vasanthakumar is the founder of Lionize Digital Factory with over 10 years of experience in digital marketing and business strategy.'
                  : 'An experienced digital marketing professional specializing in content strategy and lead generation tactics.'}
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-darker p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Related Posts</h3>
              <div className="space-y-6">
                {blogPosts
                  .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
                  .slice(0, 2)
                  .map(relatedPost => (
                    <div key={relatedPost.id} className="group">
                      <Link to={`/blog/${relatedPost.id}`} className="block">
                        <div 
                          className="h-40 rounded-lg mb-3 overflow-hidden"
                        >
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                            style={{ backgroundImage: `url(${relatedPost.image})` }}
                          ></div>
                        </div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{relatedPost.title}</h4>
                        <div className="flex items-center text-sm text-gray-400 mt-2">
                          <FaCalendarAlt className="mr-2" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-darker p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {['Digital Marketing', 'Lead Generation', 'Business Strategy', 'Personal Branding', 'AI Automation', 'Website Development'].map(category => (
                  <Link 
                    key={category} 
                    to={`/blog?category=${category}`}
                    className={`block py-2 px-4 rounded-md transition-colors duration-300 ${category === post.category ? 'bg-primary/20 text-primary' : 'hover:bg-dark'}`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Need Help With Your Strategy?</h3>
              <p className="text-gray-300 mb-4">Book a free 30-minute consultation with our experts to discuss your business goals.</p>
              <Button to="/contact" variant="primary" fullWidth>
                Get Started
              </Button>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free 30-minute strategy call with our experts to discuss your business goals and how we can help you achieve them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">
                Book Your Free Strategy Call
              </Button>
              <Button to="/services" variant="outline">
                Explore Our Services
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default BlogPost;