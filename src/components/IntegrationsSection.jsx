import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Zap, Users, FileText, Database, Code, MessageCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const IntegrationsSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const integrations = [
    {
      name: 'Confluence',
      description: 'Increase clarity and collaboration across teams by adding ACROZ.AI documents to Confluence.',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/30',
      screenshot: {
        bg: 'from-yellow-100 to-orange-100',
        elements: [
          { type: 'sidebar', color: 'bg-white', width: 'w-1/4' },
          { type: 'main', color: 'bg-white', width: 'w-3/4' },
          { type: 'diagram', color: 'from-green-400 to-emerald-500', shapes: ['rect', 'circle', 'diamond'] }
        ]
      }
    },
    {
      name: 'Microsoft Teams',
      description: 'Collaborate seamlessly by integrating ACROZ.AI directly into your Teams workflow.',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50/50 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/30',
      screenshot: {
        bg: 'from-purple-100 to-blue-100',
        elements: [
          { type: 'chat', color: 'bg-white', width: 'w-1/3' },
          { type: 'canvas', color: 'bg-gray-50', width: 'w-2/3' },
          { type: 'diagram', color: 'from-purple-400 to-blue-500', shapes: ['rect', 'rect', 'rect'] }
        ]
      }
    },
    {
      name: 'Slack',
      description: 'Share and collaborate on diagrams without leaving your Slack workspace.',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50/50 to-green-100/30 dark:from-green-900/20 dark:to-green-800/30',
      screenshot: {
        bg: 'from-green-100 to-teal-100',
        elements: [
          { type: 'channels', color: 'bg-gray-800', width: 'w-1/4' },
          { type: 'messages', color: 'bg-white', width: 'w-3/4' },
          { type: 'diagram', color: 'from-green-400 to-teal-500', shapes: ['circle', 'rect', 'circle'] }
        ]
      }
    },
    {
      name: 'Google Workspace',
      description: 'Embed interactive diagrams in Google Docs, Sheets, and Slides.',
      icon: Database,
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50/50 to-red-100/30 dark:from-red-900/20 dark:to-red-800/30',
      screenshot: {
        bg: 'from-red-100 to-orange-100',
        elements: [
          { type: 'toolbar', color: 'bg-white', width: 'w-full' },
          { type: 'document', color: 'bg-white', width: 'w-full' },
          { type: 'diagram', color: 'from-red-400 to-orange-500', shapes: ['rect', 'diamond', 'rect'] }
        ]
      }
    },
    {
      name: 'Jira',
      description: 'Link your project management with visual documentation in Jira.',
      icon: Code,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50/50 to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-800/30',
      screenshot: {
        bg: 'from-blue-100 to-indigo-100',
        elements: [
          { type: 'sidebar', color: 'bg-gray-100', width: 'w-1/4' },
          { type: 'board', color: 'bg-white', width: 'w-3/4' },
          { type: 'diagram', color: 'from-blue-400 to-indigo-500', shapes: ['rect', 'rect', 'circle'] }
        ]
      }
    },
    {
      name: 'Salesforce',
      description: 'Visualize your sales processes and customer journeys within Salesforce.',
      icon: Zap,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50/50 to-cyan-100/30 dark:from-cyan-900/20 dark:to-cyan-800/30',
      screenshot: {
        bg: 'from-cyan-100 to-blue-100',
        elements: [
          { type: 'nav', color: 'bg-blue-800', width: 'w-full' },
          { type: 'content', color: 'bg-white', width: 'w-full' },
          { type: 'diagram', color: 'from-cyan-400 to-blue-500', shapes: ['circle', 'diamond', 'rect'] }
        ]
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrations.length) % integrations.length);
  };

  const currentIntegration = integrations[currentSlide];

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Whatever your workflow, there's</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                an integration for that
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Streamline processes and eliminate silos by connecting ACROZ.AI with dozens of your team's favorite apps.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Go to marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Main Integration Showcase */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <div className={`relative bg-gradient-to-br ${currentIntegration.bgColor} backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden`}>
              {/* Navigation */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/30 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-black/20 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/30 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Screenshot Area */}
              <div className={`relative h-96 bg-gradient-to-br ${currentIntegration.screenshot.bg} p-8`}>
                {/* Browser Window Frame */}
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden h-full"
                >
                  {/* Browser Header */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-600 rounded-lg px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <currentIntegration.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">ACROZ.AI Diagrams</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex h-full">
                    {/* Sidebar (if applicable) */}
                    {currentIntegration.screenshot.elements.find(el => el.type === 'sidebar' || el.type === 'channels') && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`${currentIntegration.screenshot.elements.find(el => el.type === 'sidebar' || el.type === 'channels').width} ${currentIntegration.screenshot.elements.find(el => el.type === 'sidebar' || el.type === 'channels').color} p-4 border-r border-gray-200 dark:border-gray-600`}
                      >
                        <div className="space-y-3">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Main Content */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex-1 p-6 relative"
                    >
                      {/* Diagram Elements */}
                      <div className="grid grid-cols-3 gap-4 h-full">
                        {currentIntegration.screenshot.elements.find(el => el.type === 'diagram')?.shapes.map((shape, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`bg-gradient-to-br ${currentIntegration.screenshot.elements.find(el => el.type === 'diagram').color} shadow-lg flex items-center justify-center text-white font-semibold text-sm ${
                              shape === 'circle' ? 'rounded-full aspect-square' :
                              shape === 'diamond' ? 'rounded-lg transform rotate-45 aspect-square' :
                              'rounded-xl h-16'
                            }`}
                          >
                            {shape === 'diamond' ? (
                              <span className="transform -rotate-45">Step {index + 1}</span>
                            ) : (
                              <span>Step {index + 1}</span>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        <defs>
                          <linearGradient id={`integrationGradient-${currentSlide}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M 120 80 Q 180 60 240 80"
                          stroke={`url(#integrationGradient-${currentSlide})`}
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.8, duration: 1.5 }}
                        />
                        <motion.path
                          d="M 300 100 Q 360 80 420 100"
                          stroke={`url(#integrationGradient-${currentSlide})`}
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 1.0, duration: 1.5 }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Integration Info */}
              <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 p-8">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center space-y-4"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${currentIntegration.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <currentIntegration.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {currentIntegration.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                    {currentIntegration.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${currentIntegration.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    onClick={() => navigate('/signup')}
                  >
                    <span>Learn more</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
              {integrations.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? `bg-gradient-to-r ${currentIntegration.color} scale-125 shadow-lg`
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Integration Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {integrations.map((integration, index) => (
              <motion.button
                key={integration.name}
                onClick={() => setCurrentSlide(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${
                  currentSlide === index
                    ? `bg-gradient-to-br ${integration.bgColor} border-indigo-300 dark:border-indigo-600 shadow-lg`
                    : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/70'
                }`}
              >
                <div className="space-y-3">
                  <motion.div 
                    className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center transition-all duration-300 ${
                      currentSlide === index 
                        ? `bg-gradient-to-br ${integration.color}` 
                        : 'bg-gray-200 dark:bg-gray-600 group-hover:bg-gray-300 dark:group-hover:bg-gray-500'
                    }`}
                    whileHover={{ rotate: 5 }}
                  >
                    <integration.icon className={`w-6 h-6 transition-colors duration-300 ${
                      currentSlide === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                    }`} />
                  </motion.div>
                  <h4 className={`font-semibold text-center transition-colors duration-300 ${
                    currentSlide === index 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {integration.name}
                  </h4>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;