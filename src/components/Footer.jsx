import { motion } from 'framer-motion';
import { Globe, Linkedin, Twitter, Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDark } = useTheme();

  const footerSections = [
    { 
      title: 'Product',
      links: [
        { name: 'Overview', path: '/overview' },
        { name: 'ACROZ.AI overview', path: '/overview' }
      ]
    },
    { 
      title: 'Use cases',
      links: [
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
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Support', href: '#' }
      ]
    },
    { 
      title: 'Company',
      links: [
        { name: 'About us', href: '#' },
        { name: 'Contact', path: '/contact-sales' }
      ]
    }
  ];

  const legalLinks = [
    
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-services' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        <motion.span whileHover={{ x: 4 }} className="block">
                          {link.name}
                        </motion.span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        <motion.span whileHover={{ x: 4 }} className="block">
                          {link.name}
                        </motion.span>
                      </a>
                    )}
                  </li>
                ))}
                {section.title === 'Product' && (
                  <li>
                    <Link
                      to="/service-integrations"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      <motion.span whileHover={{ x: 4 }} className="block">
                        Service Integrations
                      </motion.span>
                    </Link>
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Left Side - Logo and Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/" className="flex items-center space-x-3">
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ACROZ.AI
                  </span>
                </motion.div>
              </Link>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <motion.span whileHover={{ x: 2 }} className="block">
                      {link.name}
                    </motion.span>
                  </a>
                ))}
              </div>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:shadow-md`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Right Side - Language Selector */}
            <div className="flex items-center space-x-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 shadow-inner"
              >
                <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <select className="bg-transparent text-gray-700 dark:text-gray-300 text-sm border-none focus:outline-none cursor-pointer">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} ACROZ.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;