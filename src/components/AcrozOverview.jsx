import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Play, Users, Zap, Brain, Shield, CheckCircle, Star, Globe } from 'lucide-react';
import AcrozFeaturesSection from './AcrozFeaturesSection';
import { useNavigate } from "react-router-dom";


const AcrozOverview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ai-prompt');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagramming',
      description: 'Generate diagrams instantly with AI prompts and intelligent automation'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with your team in real-time'
    },
    {
      icon: Zap,
      title: 'Smart Templates',
      description: 'Get started quickly with intelligent templates and shape libraries'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data protection'
    }
  ];

  const integrationLogos = [
    { name: 'Google', color: 'from-red-500 to-yellow-500' },
    { name: 'Microsoft', color: 'from-blue-500 to-cyan-500' },
    { name: 'Slack', color: 'from-purple-500 to-pink-500' },
    { name: 'Atlassian', color: 'from-blue-600 to-indigo-600' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'ACROZ.AI has transformed how our team visualizes complex processes.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Lead',
      company: 'StartupXYZ',
      content: 'The AI features save us hours of work every week.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-4 py-2"
                >
                  <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Intelligent Diagramming</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Diagram your</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">people, processes,</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">and systems</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  Take advantage of intelligent features such as AI and automation to help your team communicate complex ideas, collaborate in real time, and boost innovation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg text-lg"
                   onClick={() => navigate('/signup')}
                >
                  Sign up free
                </motion.button>

                <div className="text-center sm:text-left">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">or continue with</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sign in</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-sm"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sign in</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sign in</span>
                    </motion.button>
                  </div>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    By registering, you agree to our{' '}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
                    {' '}and you acknowledge that you have read and understand our{' '}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Interface Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">ML</span>
                      </div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">KH</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interface Content */}
                <div className="p-6 space-y-6">
                  {/* AI Prompt Flow Section */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">AI Prompt Flow</span>
                    </div>
                    
                    {/* Prompt Shapes */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Prompt Shapes</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="w-12 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded border-2 border-blue-300"></div>
                          <div className="w-12 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded border-2 border-green-300"></div>
                          <div className="w-12 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded border-2 border-purple-300"></div>
                          <div className="w-12 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded border-2 border-orange-300"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Prompt Grouping</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="w-12 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded border-2 border-cyan-300"></div>
                          <div className="w-12 h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded border-2 border-pink-300"></div>
                          <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded border-2 border-yellow-300"></div>
                          <div className="w-12 h-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded border-2 border-indigo-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Diagram */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System Prompt</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">U</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">User Prompt</span>
                      </div>
                    </div>

                    {/* Flow Elements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-20 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Setup</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="w-20 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Process</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-20 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Input</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="w-20 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Output</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Import Section */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Import</span>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Chat Bubble */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Users className="w-6 h-6 text-white" />
                </div>

                {/* Floating Info Icon */}
                <div className="absolute bottom-4 right-20 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs">i</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AcrozFeaturesSection />

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Why teams choose ACROZ.AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful features that help you create, collaborate, and communicate more effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Integrates with your workflow
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect ACROZ.AI with the tools your team already uses
            </p>
          </motion.div>

          <div className="flex items-center justify-center space-x-8">
            {integrationLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 bg-gradient-to-br ${logo.color} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <span className="text-white font-bold text-lg">{logo.name.charAt(0)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Trusted by millions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join millions of users who trust ACROZ.AI to visualize their ideas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                Start free trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 px-8 py-4 glass-btn"
              >
                <Play className="w-5 h-5" />
                <span>Watch demo</span>
              </motion.button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AcrozOverview;