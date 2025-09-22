import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Layers, Grid, Workflow } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const TemplatesSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const templateCategories = [
    {
      title: 'Flowcharts',
      icon: Workflow,
      templates: [
        { name: 'Process Flow', color: 'from-blue-400 to-blue-500' },
        { name: 'Decision Tree', color: 'from-green-400 to-green-500' },
        { name: 'Workflow', color: 'from-purple-400 to-purple-500' },
        { name: 'System Flow', color: 'from-orange-400 to-orange-500' }
      ]
    },
    {
      title: 'Org Charts',
      icon: Grid,
      templates: [
        { name: 'Hierarchy', color: 'from-pink-400 to-pink-500' },
        { name: 'Team Structure', color: 'from-cyan-400 to-cyan-500' },
        { name: 'Department', color: 'from-yellow-400 to-yellow-500' },
        { name: 'Matrix Org', color: 'from-indigo-400 to-indigo-500' }
      ]
    },
    {
      title: 'Mind Maps',
      icon: Layers,
      templates: [
        { name: 'Brainstorm', color: 'from-emerald-400 to-emerald-500' },
        { name: 'Project Plan', color: 'from-rose-400 to-rose-500' },
        { name: 'Strategy Map', color: 'from-violet-400 to-violet-500' },
        { name: 'Concept Map', color: 'from-teal-400 to-teal-500' }
      ]
    },
    {
      title: 'Technical',
      icon: FileText,
      templates: [
        { name: 'Database ERD', color: 'from-slate-400 to-slate-500' },
        { name: 'Network Diagram', color: 'from-blue-500 to-blue-600' },
        { name: 'Architecture', color: 'from-purple-500 to-purple-600' },
        { name: 'UML Diagram', color: 'from-green-500 to-green-600' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % templateCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + templateCategories.length) % templateCategories.length);
  };

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/10">
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
              <span className="text-gray-900 dark:text-white">Where seeing becomes</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
                doing, faster
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Not sure how to visualize your systems, processes, or org structures? Get inspiration (and a big head start) with ACROZ.AI templates.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Template Categories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {templateCategories.map((category, index) => (
                  <motion.button
                    key={category.title}
                    onClick={() => setCurrentSlide(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                      currentSlide === index
                        ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-orange-300 dark:border-orange-600 shadow-lg'
                        : 'bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-white/30 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-700/60'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        currentSlide === index 
                          ? 'bg-gradient-to-br from-orange-400 to-orange-500' 
                          : 'bg-gray-200 dark:bg-gray-600'
                      }`}>
                        <category.icon className={`w-5 h-5 ${
                          currentSlide === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                        }`} />
                      </div>
                      <h3 className={`font-semibold ${
                        currentSlide === index 
                          ? 'text-gray-900 dark:text-white' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {category.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.templates.slice(0, 4).map((template, templateIndex) => (
                        <div
                          key={templateIndex}
                          className={`h-8 bg-gradient-to-br ${template.color} rounded-lg flex items-center justify-center`}
                        >
                          <span className="text-white text-xs font-medium truncate px-2">
                            {template.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                <span>Explore templates</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Right Content - Template Preview */}
            <motion.div
              style={{ scale }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
                {/* Preview Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        {templateCategories[currentSlide].title} Templates
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-600/40 transition-all duration-200"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2 bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-600/40 transition-all duration-200"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Template Grid */}
                <div className="p-8">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {templateCategories[currentSlide].templates.map((template, index) => (
                      <motion.div
                        key={template.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-4 border border-white/30 dark:border-gray-600/30 hover:bg-white/40 dark:hover:bg-gray-600/40 transition-all duration-300">
                          {/* Template Preview */}
                          <div className="aspect-square mb-3 relative overflow-hidden rounded-xl">
                            {currentSlide === 0 && (
                              // Flowchart preview
                              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                <div className="space-y-2">
                                  <div className={`w-16 h-8 bg-gradient-to-br ${template.color} rounded-lg mx-auto`}></div>
                                  <div className="w-1 h-4 bg-gray-400 mx-auto"></div>
                                  <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-full mx-auto transform rotate-45`}></div>
                                  <div className="w-1 h-4 bg-gray-400 mx-auto"></div>
                                  <div className={`w-16 h-8 bg-gradient-to-br ${template.color} rounded-lg mx-auto`}></div>
                                </div>
                              </div>
                            )}
                            {currentSlide === 1 && (
                              // Org chart preview
                              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                <div className="space-y-3">
                                  <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-full mx-auto`}></div>
                                  <div className="flex space-x-2 justify-center">
                                    <div className={`w-8 h-8 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                    <div className={`w-8 h-8 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                  </div>
                                  <div className="flex space-x-1 justify-center">
                                    <div className={`w-6 h-6 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                    <div className={`w-6 h-6 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                    <div className={`w-6 h-6 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {currentSlide === 2 && (
                              // Mind map preview
                              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                <div className="relative">
                                  <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                  <div className={`absolute -top-2 -left-8 w-8 h-8 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                  <div className={`absolute -top-2 -right-8 w-8 h-8 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                  <div className={`absolute -bottom-2 -left-8 w-8 h-8 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                  <div className={`absolute -bottom-2 -right-8 w-8 h-8 bg-gradient-to-br ${template.color} rounded-full`}></div>
                                </div>
                              </div>
                            )}
                            {currentSlide === 3 && (
                              // Technical diagram preview
                              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className={`w-12 h-8 bg-gradient-to-br ${template.color} rounded`}></div>
                                  <div className={`w-12 h-8 bg-gradient-to-br ${template.color} rounded`}></div>
                                  <div className={`w-12 h-8 bg-gradient-to-br ${template.color} rounded`}></div>
                                  <div className={`w-12 h-8 bg-gradient-to-br ${template.color} rounded`}></div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                            {template.name}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 px-6 py-4 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    {templateCategories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? 'bg-gradient-to-r from-orange-400 to-orange-500 scale-125'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float">
                <FileText className="w-8 h-8 text-orange-500" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <Layers className="w-8 h-8 text-red-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplatesSection;