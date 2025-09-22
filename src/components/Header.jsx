import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Product',
      hasDropdown: true,
      items: [
        { name: 'Overview', path: '/overview' },
        { name: 'Service Integrations', path: '/service-integrations' },
        { name: 'ACROZ.AI overview', path: '/overview' }
      ]
    },
    { 
      name: 'Use cases',
      hasDropdown: true,
      items: [
        { name: 'Process documentation', path: '/process-documentation' },
        { name: 'Visualizing teams', path: '/visualizing-teams' },
        { name: 'Technical diagramming', path: '/technical-diagramming' },
        { name: 'Visualizing infrastructure', path: '/visualizing-infrastructure' },
        { name: 'AI diagramming', path: '/ai-diagramming' },
        { name: 'Interactive learning', path: '/interactive-learning' },
        { name: 'Visio replacement', path: '/visio-replacement' },
        { name: 'More use cases', path: '/more-use-case' },
      ]
    },
    { 
      name: 'Blog',
      hasDropdown: false,
      path: '/blog'
    },
    { 
      name: 'Enterprise',
      hasDropdown: false,
      path: '/enterprise'
    },
    { 
      name: 'Pricing',
      hasDropdown: false,
      path: '/pricing'
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ACROZ.AI
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                {item.hasDropdown ? (
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center space-x-1 px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                      activeDropdown === index
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 backdrop-blur-sm'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  </motion.button>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                      isActive(item.path)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 backdrop-blur-sm'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
                
                {item.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-64 transition-all duration-300 transform ${
                    activeDropdown === index 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible translate-y-2'
                  }`}>
                    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-2 overflow-hidden">
                      {item.name === 'Product' && (
                        <div className="p-4 border-b border-gray-100/50 dark:border-gray-700/50">
                          <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 text-sm">
                            Create powerful visuals to improve your ideas, projects, and processes.
                          </h3>
                        </div>
                      )}
                      {item.name === 'Use cases' && (
                        <div className="p-4 border-b border-gray-100/50 dark:border-gray-700/50">
                          <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 text-sm">
                            Work smarter to save time and solve problems.
                          </h3>
                        </div>
                      )}
                      <div className="py-2">
                        {item.items.map((subItem) => (
                          subItem.href ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span>{subItem.name}</span>
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  whileHover={{ opacity: 1, x: 0 }}
                                  className="w-1 h-1 bg-blue-500 rounded-full"
                                />
                              </div>
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <span>{subItem.name}</span>
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  whileHover={{ opacity: 1, x: 0 }}
                                  className="w-1 h-1 bg-blue-500 rounded-full"
                                />
                              </div>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-200 backdrop-blur-sm"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
            
            <Link
              to="/contact-sales"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              Contact sales
            </Link>
            
            <Link
              to="/signup"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-200 shadow-lg"
            >
              Sign up free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
      >
        <div className="px-4 py-6 space-y-3">
          {navItems.map((item, index) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isMobileMenuOpen ? 1 : 0, 
                      x: isMobileMenuOpen ? 0 : -20 
                    }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleDropdownToggle(index)}
                    className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  </motion.button>
                  
                  {activeDropdown === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {item.items.map((subItem) => (
                        subItem.href ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block w-full text-left text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-left text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200"
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
            <Link 
              to="/contact-sales"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
            >
              Contact sales
            </Link>
            <Link 
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-200 shadow-lg"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;