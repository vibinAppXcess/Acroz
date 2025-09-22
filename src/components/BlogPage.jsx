import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  BookOpen, 
  TrendingUp,
  MessageCircle,
  Heart,
  Eye,
  Search,
  Filter,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy blog data to use as fallback
  const dummyBlogPosts = [
    {
      id: 1,
      title: 'The Future of Visual Collaboration: AI-Powered Diagramming',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way teams create and collaborate on visual content.',
      content: `
        <p>The landscape of visual collaboration is undergoing a dramatic transformation. As organizations become increasingly distributed and complex, the need for clear, intuitive visual communication has never been greater.</p>
        <h2>The Rise of AI in Visual Tools</h2>
        <p>Artificial intelligence is no longer a futuristic concept—it's actively reshaping how we create diagrams, flowcharts, and organizational structures.</p>
      `,
      author: 'Sarah Chen',
      authorAvatar: 'SC',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['AI', 'Collaboration', 'Future Tech'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      views: 2847,
      likes: 156,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Building Effective Remote Teams Through Visual Communication',
      excerpt: 'Learn proven strategies for maintaining team cohesion and productivity in distributed work environments.',
      content: `
        <p>Remote work has fundamentally changed how teams collaborate. Visual communication has emerged as a critical tool for maintaining connection and clarity across distributed teams.</p>
        <h2>The Challenge of Remote Collaboration</h2>
        <p>When team members are scattered across different time zones, traditional communication methods often fall short.</p>
      `,
      author: 'Michael Rodriguez',
      authorAvatar: 'MR',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Remote Work',
      tags: ['Remote Work', 'Team Building'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
      views: 1923,
      likes: 89,
      comments: 17,
      featured: false
    },
    {
      id: 3,
      title: 'Data Visualization Best Practices for Business Intelligence',
      excerpt: 'Transform raw data into compelling visual stories that drive business decisions.',
      content: `
        <p>In today's data-driven world, the ability to transform complex information into clear, actionable insights is more valuable than ever.</p>
        <h2>The Power of Visual Data</h2>
        <p>Human brains process visual information 60,000 times faster than text.</p>
      `,
      author: 'Emily Watson',
      authorAvatar: 'EW',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Data & Analytics',
      tags: ['Data Visualization', 'Analytics'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg',
      views: 3156,
      likes: 203,
      comments: 31,
      featured: true
    },
    {
      id: 4,
      title: 'Data Visualization Best Practices for Business Intelligence',
      excerpt: 'Transform raw data into compelling visual stories that drive business decisions.',
      content: `
        <p>In today's data-driven world, the ability to transform complex information into clear, actionable insights is more valuable than ever.</p>
        <h2>The Power of Visual Data</h2>
        <p>Human brains process visual information 60,000 times faster than text.</p>
      `,
      author: 'Emily Watson',
      authorAvatar: 'EW',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Data & Analytics',
      tags: ['Data Visualization', 'Analytics'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg',
      views: 3156,
      likes: 203,
      comments: 31,
      featured: true
    }
  ];

  const categories = ['All', 'AI & Technology', 'Remote Work', 'Data & Analytics', 
                     'Project Management', 'Learning & Development', 'Security'];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        // Try to fetch from API first
        const response = await fetch('https://api.example.com/blog/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        console.error('API fetch failed, using dummy data:', err);
        setError('Could not connect to server. Showing sample blog posts.');
        // Fall back to dummy data if API fails
        setBlogPosts(dummyBlogPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.button
            onClick={handleBackClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 mb-8 px-4 py-2 glass-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 mb-8"
          >
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {selectedBlog.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">{selectedBlog.authorAvatar}</span>
                </div>
                <span className="font-medium">{selectedBlog.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(selectedBlog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{selectedBlog.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{selectedBlog.views.toLocaleString()} views</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {selectedBlog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedBlog.category}
              </span>
              {selectedBlog.tags && selectedBlog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{selectedBlog.likes}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{selectedBlog.comments}</span>
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </motion.button>
              </div>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{selectedBlog.authorAvatar}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedBlog.author}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Content strategist and visual collaboration expert with over 8 years of experience helping teams communicate more effectively.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-4 py-2">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Insights & Ideas</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Visual Collaboration</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover insights, best practices, and innovative ideas for visual collaboration, team productivity, and organizational success.
            </p>

            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center space-x-2 text-yellow-700 dark:text-yellow-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-btn focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="glass-btn focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => handleBlogClick(post)}
                    className="glass-card overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-blue-600 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">{post.authorAvatar}</span>
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
              </h2>
              <span className="text-gray-500 dark:text-gray-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => handleBlogClick(post)}
                    className="glass-card overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-blue-600 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">{post.authorAvatar}</span>
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or filters.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-blue-800 dark:to-indigo-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Stay updated with our latest insights
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get the latest articles, tips, and best practices delivered to your inbox
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
            
            <p className="text-sm text-blue-200">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;