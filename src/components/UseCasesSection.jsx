import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Workflow, Brain, Users, Code, Zap, Database, GitBranch, BarChart3 } from 'lucide-react';

const UseCasesSection = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const useCases = [
    {
      id: 'process-maps',
      title: 'Process maps and flowcharts',
      description: 'Establish a single source of truth as you map out and optimize every process. Use features such as:',
      features: [
        'Diagram as code',
        'Quick diagramming',
        'Real-time collaboration'
      ],
      integrations: ['Microsoft Teams', 'Notion', 'Salesforce'],
      color: 'from-orange-400 to-orange-500',
      bgColor: 'from-orange-50/50 to-orange-100/30 dark:from-orange-900/20 dark:to-orange-800/30',
      diagramElements: [
        { type: 'start', label: 'Start', color: 'from-orange-400 to-orange-500', shape: 'rounded-lg' },
        { type: 'process', label: 'Process', color: 'from-blue-400 to-blue-500', shape: 'rounded-lg' },
        { type: 'decision', label: 'Decision', color: 'from-yellow-400 to-amber-500', shape: 'rounded-lg transform rotate-45' },
        { type: 'end', label: 'End', color: 'from-green-400 to-emerald-500', shape: 'rounded-lg' }
      ]
    },
    {
      id: 'ai-generated',
      title: 'AI-generated diagrams',
      description: 'Save time and effort by letting AI do the diagramming and summarizing for you. Use features such as:',
      features: [
        'Generate diagram with AI',
        'Enhance prompt',
        'Summarize'
      ],
      integrations: ['OpenAI', 'Claude', 'Gemini'],
      color: 'from-blue-400 to-blue-500',
      bgColor: 'from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/30',
      diagramElements: [
        { type: 'input', label: 'AI Input', color: 'from-purple-400 to-violet-500', shape: 'rounded-lg' },
        { type: 'generate', label: 'Generate', color: 'from-blue-400 to-cyan-500', shape: 'rounded-lg' },
        { type: 'review', label: 'Review', color: 'from-green-400 to-emerald-500', shape: 'rounded-lg' },
        { type: 'export', label: 'Export', color: 'from-orange-400 to-red-500', shape: 'rounded-lg' }
      ]
    },
    {
      id: 'org-planning',
      title: 'Org and team planning',
      description: 'Build dynamic org charts to visualize people and workloads by department or team. Use features such as:',
      features: [
        'Data imports',
        'Data linking',
        'Group view'
      ],
      integrations: ['Google Workspace', 'Microsoft 365', 'BambooHR'],
      color: 'from-green-400 to-green-500',
      bgColor: 'from-green-50/50 to-green-100/30 dark:from-green-900/20 dark:to-green-800/30',
      diagramElements: [
        { type: 'ceo', label: 'CEO', color: 'from-blue-500 to-blue-600', shape: 'rounded-full w-12 h-12' },
        { type: 'cto', label: 'CTO', color: 'from-green-500 to-emerald-600', shape: 'rounded-full w-10 h-10' },
        { type: 'cfo', label: 'CFO', color: 'from-purple-500 to-violet-600', shape: 'rounded-full w-10 h-10' },
        { type: 'cmo', label: 'CMO', color: 'from-orange-500 to-red-600', shape: 'rounded-full w-10 h-10' }
      ]
    },
    {
      id: 'technical',
      title: 'Technical diagrams',
      description: 'Improve documentation by creating visuals that boost clarity and efficiency. Use features such as:',
      features: [
        'ERD markup',
        'Conditional formatting',
        'Layers'
      ],
      integrations: ['Confluence', 'GitHub', 'Microsoft Teams'],
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-50/50 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/30',
      diagramElements: [
        { type: 'database', label: 'Database', color: 'from-gray-600 to-gray-700', shape: 'rounded-lg' },
        { type: 'api', label: 'API', color: 'from-blue-600 to-blue-700', shape: 'rounded-lg' },
        { type: 'service', label: 'Service', color: 'from-green-600 to-green-700', shape: 'rounded-lg' },
        { type: 'ui', label: 'UI', color: 'from-purple-600 to-purple-700', shape: 'rounded-lg' }
      ]
    }
  ];

  const tabs = [
    { id: 'process-maps', label: 'Process maps and flowcharts', icon: Workflow },
    { id: 'ai-generated', label: 'AI-generated diagrams', icon: Brain },
    { id: 'org-planning', label: 'Org and team planning', icon: Users },
    { id: 'technical', label: 'Technical diagrams', icon: Code }
  ];

  const currentUseCase = useCases[activeTab];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50/30 to-blue-50/30 dark:from-teal-900/10 dark:via-cyan-900/10 dark:to-blue-900/10">
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
              <span className="text-gray-900 dark:text-white">How teams use </span>
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                ACROZ.AI
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">to create diagrams with intelligence</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar - Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-2"
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-500 ${
                    activeTab === index
                      ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-orange-300 dark:border-orange-600 shadow-lg transform scale-105'
                      : 'bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-white/30 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-700/60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeTab === index 
                          ? 'bg-gradient-to-br from-orange-400 to-orange-500 scale-110' 
                          : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                      animate={{
                        rotate: activeTab === index ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <tab.icon className={`w-4 h-4 transition-colors duration-300 ${
                        activeTab === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                      }`} />
                    </motion.div>
                    <span className={`font-medium text-sm transition-colors duration-300 ${
                      activeTab === index 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Right Content - Use Case Details */}
            <motion.div
              style={{ scale }}
              className="lg:col-span-9"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`bg-gradient-to-br ${currentUseCase.bgColor} backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl overflow-hidden shadow-2xl`}
                >
                  {/* Content Header */}
                  <div className="p-8 border-b border-white/20 dark:border-gray-700/20">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4 flex-1">
                        <motion.div 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <motion.div 
                            className={`w-12 h-12 bg-gradient-to-br ${currentUseCase.color} rounded-xl flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {(() => {
                              const IconComponent = tabs[activeTab].icon;
                              return IconComponent && <IconComponent className="w-6 h-6 text-white" />;
                            })()}
                          </motion.div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {currentUseCase.title}
                          </h3>
                        </motion.div>
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentUseCase.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 space-y-8">
                    {/* Features */}
                    <div className="space-y-4">
                      <motion.h4 
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        Key Features:
                      </motion.h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentUseCase.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="flex items-center space-x-3 p-4 bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30 hover:bg-white/60 dark:hover:bg-gray-600/60 transition-all duration-300"
                          >
                            <motion.div 
                              className={`w-3 h-3 bg-gradient-to-br ${currentUseCase.color} rounded-full`}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Diagram Preview */}
                    <div className="space-y-4">
                      <motion.h4 
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Preview:
                      </motion.h4>
                      <motion.div 
                        className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-gray-600/30"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className={`grid ${activeTab === 2 ? 'grid-cols-2 md:grid-cols-4 gap-6' : 'grid-cols-2 md:grid-cols-4 gap-4'}`}>
                          {currentUseCase.diagramElements.map((element, index) => (
                            <motion.div
                              key={element.type}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ 
                                delay: 0.8 + index * 0.15, 
                                type: "spring", 
                                stiffness: 200,
                                damping: 15
                              }}
                              whileHover={{ 
                                scale: 1.1, 
                                y: -5,
                                transition: { type: "spring", stiffness: 400 }
                              }}
                              className={`bg-gradient-to-br ${element.color} ${element.shape} ${
                                activeTab === 2 ? 'flex items-center justify-center mx-auto' : 'p-3 text-center'
                              } shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
                            >
                              <span className={`text-white font-semibold ${
                                activeTab === 2 ? 'text-xs' : 
                                element.type === 'decision' ? 'text-xs transform -rotate-45' : 'text-sm'
                              }`}>
                                {element.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Animated Connecting Lines */}
                        {activeTab !== 2 && (
                          <motion.svg 
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 1.2 }}
                          >
                            <defs>
                              <linearGradient id={`flowGradient-${activeTab}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                            <motion.path
                              d="M 120 60 Q 180 40 240 60"
                              stroke={`url(#flowGradient-${activeTab})`}
                              strokeWidth="2"
                              fill="none"
                              className="drop-shadow-sm"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1.3, duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.path
                              d="M 300 80 Q 360 60 420 80"
                              stroke={`url(#flowGradient-${activeTab})`}
                              strokeWidth="2"
                              fill="none"
                              className="drop-shadow-sm"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                            />
                          </motion.svg>
                        )}
                      </motion.div>
                    </div>

                    {/* Integrations */}
                    <div className="space-y-4">
                      <motion.h4 
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        Integrates with:
                      </motion.h4>
                      <div className="flex items-center space-x-4">
                        {currentUseCase.integrations.map((integration, index) => (
                          <motion.div
                            key={integration}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1.0 + index * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="group relative"
                          >
                            <div className="w-12 h-12 bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30 flex items-center justify-center hover:bg-white/60 dark:hover:bg-gray-600/60 transition-all duration-300">
                              <div className={`w-8 h-8 bg-gradient-to-br ${currentUseCase.color} rounded-lg flex items-center justify-center`}>
                                <span className="text-white text-xs font-bold">{integration.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                              {integration}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${currentUseCase.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <span>Learn more</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Enhanced Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-8"
          >
            <motion.button
              onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
              disabled={activeTab === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>

            <div className="flex items-center space-x-3">
              {useCases.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${currentUseCase.color} scale-125 shadow-lg`
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => setActiveTab(Math.min(useCases.length - 1, activeTab + 1))}
              disabled={activeTab === useCases.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;