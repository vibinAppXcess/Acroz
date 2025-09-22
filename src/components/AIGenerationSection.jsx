import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, Wand2, FileText, Zap, ArrowRight, Play, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIGenerationSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                className="inline-flex items-center space-x-2 glass-card px-4 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </motion.div>
                <span className="text-black/90 font-medium text-sm">AI-Powered</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white/90">See your work</span>
                <br />
                <span className="gradient-text">
                  take shape
                </span>
              </h2>

              <p className="text-xl text-black/80 leading-relaxed max-w-lg">
                Generate visuals automatically with AI and data imports, or build your own using intuitive diagramming tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: Wand2, title: "AI-Powered Generation", desc: "Create diagrams from text descriptions", gradient: "from-purple-500 to-pink-500" },
                { icon: FileText, title: "Data Import", desc: "Transform spreadsheets into visual workflows", gradient: "from-blue-500 to-cyan-500" },
                { icon: Zap, title: "Smart Templates", desc: "Pre-built templates for every use case", gradient: "from-green-500 to-emerald-500" }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                      <p className="text-black/70 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-btn group"
              onClick={() => navigate('/signup')}
            >
              <span className="flex items-center space-x-2">
                <span>Try AI Generation</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Right Content - AI Generation Interface */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            {/* Main Interface */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="border-b border-black/20 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <span className="text-black/90 font-semibold text-lg">Generate diagram</span>
                  </div>
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-black/90">Type</label>
                  <select className="w-full glass-btn text-white/90 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Auto-select</option>
                    <option>Flowchart</option>
                    <option>Org Chart</option>
                    <option>Mind Map</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-black/90">Description</label>
                  <textarea 
                    className="w-full h-32 glass-btn text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Create a flowchart showcasing the structure of a revamped customer support system for a SaaS company."
                    defaultValue="Create a flowchart showcasing the structure of a revamped customer support system for a SaaS company."
                  />
                  <div className="text-xs text-white/50 text-right">18000</div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-black/90">Shape libraries</label>
                  <select className="w-full glass-btn text-white/90 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Auto-select</option>
                    <option>Standard Flowchart</option>
                    <option>UML</option>
                    <option>AWS</option>
                  </select>
                </div>

                <motion.button
                  onClick={handleGenerate}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isGenerating}
                  className="w-full gradient-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <motion.div 
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Generating...</span>
                    </div>
                  ) : (
                    'Generate'
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Preview Window */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -right-8 -bottom-8 w-80 h-64 glass-card p-4 shadow-xl"
            >
              {/* Preview Header */}
              <div className="border-b border-white/20 pb-3 mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">Live Preview</span>
                <Play className="w-4 h-4 text-white/70" />
              </div>

              {/* Preview Content */}
              <div className="relative h-full">
                {isGenerating ? (
                  <div className="flex items-center justify-center h-full">
                    <motion.div 
                      className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {[
                      { color: "from-orange-400 to-orange-500", title: "Start", delay: 0 },
                      { color: "from-blue-400 to-blue-500", title: "Process", delay: 0.2 },
                      { color: "from-purple-400 to-purple-500", title: "Decision", delay: 0.4 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: item.delay }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-16 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-xs font-medium">{item.title}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 glass-card p-3 shadow-lg animate-float"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Wand2 className="w-5 h-5 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIGenerationSection;