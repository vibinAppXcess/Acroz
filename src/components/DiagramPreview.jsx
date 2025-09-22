import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Share2, Download, Settings } from 'lucide-react';

const DiagramPreview = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simplified transforms for better performance
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-violet-50/30 to-blue-50/30 dark:from-gray-900 dark:via-violet-900/10 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale, y }}
          className="relative"
        >
          {/* Main Interface */}
          <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
            {/* Toolbar */}
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Customer Journey Map</span>
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-600/40 transition-all duration-200"
                  >
                    <Layers className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-600/40 transition-all duration-200"
                  >
                    <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Share2 className="w-4 h-4 inline mr-2" />
                    Share
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="relative h-96 bg-gradient-to-br from-white/5 to-violet-50/20 dark:from-gray-800/10 dark:to-violet-900/10 p-8">
              {/* Flow Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-8 left-8"
              >
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 w-40 text-center shadow-xl">
                  <div className="text-white font-bold text-lg">Awareness</div>
                  <div className="text-green-100 text-sm mt-1">Discovery Phase</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-8 left-64"
              >
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-6 w-40 text-center shadow-xl">
                  <div className="text-white font-bold text-lg">Interest</div>
                  <div className="text-blue-100 text-sm mt-1">Engagement</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-32 left-32"
              >
                <div className="bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl p-6 w-40 text-center shadow-xl">
                  <div className="text-white font-bold text-lg">Decision</div>
                  <div className="text-purple-100 text-sm mt-1">Evaluation</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-56 left-8"
              >
                <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-6 w-40 text-center shadow-xl">
                  <div className="text-white font-bold text-lg">Action</div>
                  <div className="text-pink-100 text-sm mt-1">Purchase</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-56 left-64"
              >
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 w-40 text-center shadow-xl">
                  <div className="text-white font-bold text-lg">Retention</div>
                  <div className="text-orange-100 text-sm mt-1">Loyalty</div>
                </div>
              </motion.div>

              {/* Simplified Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M 180 80 Q 220 60 260 80"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-sm"
                />
                <path
                  d="M 320 120 Q 280 140 240 160"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-sm"
                />
                <path
                  d="M 200 200 Q 240 220 280 200"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-sm"
                />
                <path
                  d="M 180 280 Q 220 300 260 280"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-sm"
                />
              </svg>
            </div>

            {/* Status Bar */}
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 px-6 py-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-6">
                <span className="font-medium">5 Elements</span>
                <span>4 Connections</span>
                <span className="hidden sm:inline">Last saved: 2 min ago</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline">Zoom: 100%</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1 hover:bg-white/20 dark:hover:bg-gray-700/30 rounded transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Simplified Floating Action Elements */}
          <div className="absolute -top-8 -right-8 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagramPreview;