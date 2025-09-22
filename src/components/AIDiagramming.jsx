import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Target, 
  BarChart3, 
  Play,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Shield,
  Crown,
  Sparkles,
  Settings,
  Eye,
  MessageCircle,
  FileText,
  Database,
  Workflow,
  Brain,
  Code
} from 'lucide-react';

const AIDiagramming = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-100/80 dark:bg-yellow-900/30 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-full px-4 py-2">
              <Brain className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-yellow-700 dark:text-yellow-300 font-medium text-sm">AI Diagramming</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">AI-powered diagramming</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                for instant results
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Generate diagrams from text, automate layouts, and get smart suggestions. ACROZ.AI leverages AI to turn your ideas into professional visuals in seconds.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/signup')}
            >
              <span>Get started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Optimize your org structure */}
      <section ref={containerRef} className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Optimize your org structure
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Streamline team reorganization by easily dragging, dropping, testing, and sharing new structures. Elevate optimization with collaboration and versioning.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Target, text: 'Drag and drop reorganization' },
                  { icon: Users, text: 'Real-time collaboration' },
                  { icon: FileText, text: 'Version control and testing' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Right Content - Org Structure Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/30 dark:bg-gray-700/30 rounded-lg px-3 py-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Org Structure Optimization</span>
                    </div>
                  </div>
                </div>

                {/* Interface Content */}
                <div className="p-8 relative">
                  {/* Toolbar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        {[
                          { icon: Eye, label: 'View' },
                          { icon: Settings, label: 'Edit' },
                          { icon: MessageCircle, label: 'Comment' }
                        ].map((tool, index) => (
                          <motion.div
                            key={tool.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-2 bg-white/40 dark:bg-gray-600/40 rounded-lg hover:bg-white/60 dark:hover:bg-gray-500/60 transition-all duration-200 cursor-pointer"
                          >
                            <tool.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-semibold">L</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-semibold">F</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Org Chart */}
                  <div className="space-y-6">
                    {/* Top Level */}
                    <div className="flex justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="relative"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gray-300"></div>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">☀</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Second Level */}
                    <div className="flex justify-center space-x-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="relative"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gray-300"></div>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                          Lily
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="relative"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gray-300"></div>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                          Francis
                        </div>
                      </motion.div>
                    </div>

                    {/* Third Level */}
                    <div className="flex justify-center space-x-8">
                      {['orange', 'teal', 'orange'].map((color, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                          className="relative"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-full flex items-center justify-center shadow-lg`}>
                            <div className="w-6 h-6 bg-white rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gray-300"></div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <path d="M 200 80 L 200 100 L 150 100 L 150 120" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                    <path d="M 200 100 L 250 100 L 250 120" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                    <path d="M 150 140 L 150 160" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                    <path d="M 200 140 L 200 160" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                    <path d="M 250 140 L 250 160" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Floating User Avatars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-4 border-white shadow-lg animate-float flex items-center justify-center"
              >
                <span className="text-white font-semibold text-sm">👨</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-4 border-white shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-white font-semibold text-sm">👩</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Align Agile teams with strategic initiatives */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Interface */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/30 dark:bg-gray-700/30 rounded-lg px-3 py-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Agile Team Alignment</span>
                    </div>
                  </div>
                </div>

                {/* Interface Content */}
                <div className="p-8 relative">
                  {/* Left Side - Comments Panel */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/40 dark:bg-gray-700/40 rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Comments</div>
                        <div className="space-y-3">
                          {[
                            { name: 'Maureen S.', comment: 'Lorem ipsum dolor sit amet...', color: 'bg-red-500' },
                            { name: 'John D.', comment: 'Lorem ipsum dolor sit amet...', color: 'bg-blue-500' },
                            { name: 'Priscilla', comment: 'Lorem ipsum dolor sit amet...', color: 'bg-yellow-500' }
                          ].map((comment, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="flex items-start space-x-2"
                            >
                              <div className={`w-6 h-6 ${comment.color} rounded-full flex items-center justify-center`}>
                                <span className="text-white text-xs font-bold">{comment.name.charAt(0)}</span>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{comment.name}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">{comment.comment}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="w-full mt-3 px-3 py-2 bg-blue-500 text-white text-xs rounded-lg"
                        >
                          Reply
                        </motion.button>
                      </div>
                    </div>

                    {/* Right Side - Kanban Board */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { title: 'Sprint 1', color: 'from-orange-400 to-orange-500' },
                          { title: 'Sprint 2', color: 'from-yellow-400 to-yellow-500' },
                          { title: 'Sprint 3', color: 'from-blue-400 to-blue-500' },
                          { title: 'Sprint 4', color: 'from-purple-400 to-purple-500' }
                        ].map((sprint, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className={`bg-gradient-to-br ${sprint.color} rounded-lg p-4 text-center shadow-lg`}
                          >
                            <div className="text-white font-semibold text-sm">{sprint.title}</div>
                            <div className="mt-2 space-y-1">
                              <div className="w-full h-2 bg-white/30 rounded"></div>
                              <div className="w-full h-2 bg-white/30 rounded"></div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Additional Elements */}
                      <div className="flex items-center justify-between">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.0 }}
                          className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center"
                        >
                          <span className="text-white text-xs">A</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1 }}
                          className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full"
                        >
                          Julian
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="bg-white/40 dark:bg-gray-700/40 rounded-lg p-3"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating User Avatars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full border-4 border-white shadow-lg animate-float flex items-center justify-center"
              >
                <span className="text-white font-semibold text-sm">👨</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-4 border-white shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-white font-semibold text-sm">👩</span>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Align Agile teams with strategic initiatives
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Optimize Scrum team dynamics. Use Visual Activities and more to align roles, prep for sprints, and empower teams for seamless transitions within Agile frameworks.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Brain, text: 'AI-powered diagram generation' },
                  { icon: Zap, text: 'Smart layout & auto-arrange' },
                  { icon: Sparkles, text: 'Instant suggestions & improvements' },
                  { icon: Workflow, text: 'Automated process mapping' },
                  { icon: Star, text: 'One-click beautify' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Gain organizational clarity */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Gain organizational clarity
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Create a dynamic blueprint of your business structure, then use data overlays to envision the future by identifying skills gaps, implementing talent development programs, and more.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: BarChart3, text: 'Dynamic business blueprints' },
                  { icon: Database, text: 'Data overlay capabilities' },
                  { icon: Brain, text: 'Skills gap identification' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Right Content - Organizational Clarity Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/30 dark:bg-gray-700/30 rounded-lg px-3 py-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Organizational Clarity Dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Interface Content */}
                <div className="p-8 relative">
                  {/* Top Controls */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Status</span>
                        <select className="text-xs bg-white/40 dark:bg-gray-700/40 rounded px-2 py-1">
                          <option>Assigned</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Quarters</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700 dark:text-gray-300">📅 Q1-Q4</span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full"
                    >
                      Taylor
                    </motion.div>
                  </div>

                  {/* Timeline Grid */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      {['Quarter 1', 'Quarter 2', 'Quarter 3'].map((quarter, index) => (
                        <motion.div
                          key={quarter}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {quarter}
                        </motion.div>
                      ))}
                    </div>

                    {/* Department Rows */}
                    <div className="space-y-3">
                      {[
                        { dept: 'UX', color: 'from-orange-400 to-orange-500', quarters: [true, false, false] },
                        { dept: 'Engineering', color: 'from-orange-400 to-yellow-500', quarters: [false, true, false] }
                      ].map((dept, deptIndex) => (
                        <motion.div
                          key={dept.dept}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + deptIndex * 0.1 }}
                          className="grid grid-cols-4 gap-4 items-center"
                        >
                          <div className={`bg-gradient-to-r ${dept.color} rounded-lg p-3 text-center text-white font-semibold`}>
                            {dept.dept}
                          </div>
                          {dept.quarters.map((active, qIndex) => (
                            <div key={qIndex} className="space-y-2">
                              {active && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 1.0 + qIndex * 0.1 }}
                                  className="space-y-1"
                                >
                                  <div className="w-full h-3 bg-orange-400 rounded"></div>
                                  <div className="w-3/4 h-3 bg-orange-300 rounded"></div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Done</div>
                                </motion.div>
                              )}
                              {qIndex === 1 && deptIndex === 1 && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 1.2 }}
                                  className="space-y-1"
                                >
                                  <div className="w-full h-3 bg-blue-400 rounded"></div>
                                  <div className="w-1/2 h-3 bg-blue-300 rounded"></div>
                                  <div className="text-xs text-blue-600">In progress</div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      ))}
                    </div>

                    {/* User Avatar */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 }}
                      className="flex items-center space-x-3 mt-6"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">👨</span>
                      </div>
                      <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                        Felix
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating User Avatars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-4 border-white shadow-lg animate-float flex items-center justify-center"
              >
                <span className="text-white font-semibold text-sm">👩</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-4 border-white shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-white font-semibold text-sm">👨</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why teams choose ACROZ.AI section would go here */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Why teams choose ACROZ.AI for team visualization
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful features that help teams visualize, organize, and optimize their structure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Dynamic Org Charts",
                description: "Create interactive organizational charts that adapt to your team's changing structure"
              },
              {
                icon: Target,
                title: "Strategic Alignment",
                description: "Align team goals with organizational objectives through visual planning tools"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description: "Make informed decisions with real-time data overlays and analytics"
              },
              {
                icon: Workflow,
                title: "Process Optimization",
                description: "Streamline workflows and identify bottlenecks in your team processes"
              },
              {
                icon: Brain,
                title: "Skills Management",
                description: "Identify skill gaps and plan talent development initiatives"
              },
              {
                icon: Zap,
                title: "Agile Integration",
                description: "Seamlessly integrate with Agile frameworks and sprint planning"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to visualize your team's success?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Start creating dynamic org charts and optimizing your team structure today
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                onClick={() => navigate('/signup')}

              >
                <span>Start free trial</span>
                <Sparkles className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                onClick={() => navigate('/contact-sales')}

              >
                Contact sales
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIDiagramming;