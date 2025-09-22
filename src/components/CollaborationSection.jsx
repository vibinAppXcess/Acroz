import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, MessageCircle, Share2, Eye, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const CollaborationSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeUsers] = useState([
    { name: 'Britta', color: 'from-orange-400 to-orange-500', avatar: 'B' },
    { name: 'Dean', color: 'from-blue-400 to-blue-500', avatar: 'D' },
    { name: 'Abed', color: 'from-yellow-400 to-yellow-500', avatar: 'A' },
    { name: 'Ian', color: 'from-blue-500 to-blue-600', avatar: 'I' }
  ]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-violet-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Collaboration Interface */}
          <motion.div
            style={{ scale }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Collaboration Interface */}
            <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header with Active Users */}
              <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Customer support workflow</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {activeUsers.map((user, index) => (
                      <motion.div
                        key={user.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`w-8 h-8 bg-gradient-to-br ${user.color} rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg border-2 border-white/50`}
                        style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                      >
                        {user.avatar}
                      </motion.div>
                    ))}
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-semibold ml-2">
                      +3
                    </div>
                  </div>
                </div>
              </div>

              {/* Canvas Area with Collaborative Elements */}
              <div className="relative h-96 bg-gradient-to-br from-white/5 to-blue-50/20 dark:from-gray-800/10 dark:to-blue-900/10 p-6">
                {/* Left Flow */}
                <div className="absolute top-8 left-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-4 w-32 text-center shadow-lg"
                  >
                    <div className="text-white font-semibold text-sm">Start</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-3 w-28 text-center shadow-lg transform rotate-45"
                  >
                    <div className="text-white font-semibold text-xs transform -rotate-45">Decision</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl p-4 w-32 text-center shadow-lg"
                  >
                    <div className="text-white font-semibold text-sm">Process</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl p-4 w-32 text-center shadow-lg"
                  >
                    <div className="text-white font-semibold text-sm">End</div>
                  </motion.div>
                </div>

                {/* Right Flow with User Avatars */}
                <div className="absolute top-8 right-8 space-y-6">
                  {/* Britta's Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      Britta
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">B</span>
                    </div>
                  </motion.div>

                  {/* Dean's Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative flex items-center space-x-3"
                  >
                    <div className="space-y-2">
                      <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg p-2 w-20 text-center shadow-lg">
                        <div className="text-white font-semibold text-xs">Step 1</div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg p-2 w-20 text-center shadow-lg">
                        <div className="text-white font-semibold text-xs">Step 2</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      Dean
                    </div>
                  </motion.div>

                  {/* Abed's Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      Abed
                    </div>
                  </motion.div>

                  {/* Ian's Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      Ian
                    </div>
                  </motion.div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                  <defs>
                    <linearGradient id="collabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 180 80 Q 220 60 280 80"
                    stroke="url(#collabGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                  <path
                    d="M 180 160 Q 220 140 280 160"
                    stroke="url(#collabGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                </svg>

                {/* Live Cursor */}
                <motion.div
                  animate={{ x: [200, 250, 200], y: [150, 180, 150] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute pointer-events-none"
                >
                  <div className="bg-violet-500 rounded-full w-3 h-3 shadow-lg"></div>
                  <div className="bg-violet-500 text-white text-xs px-2 py-1 rounded-lg mt-1 shadow-lg">
                    Britta is editing
                  </div>
                </motion.div>
              </div>

              {/* Status Bar */}
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 px-6 py-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>4 viewing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Auto-saved 30s ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>All changes synced</span>
                </div>
              </div>
            </div>

            {/* Floating Comment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl max-w-xs animate-float"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  B
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Britta</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    "Should we add a feedback loop here?"
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            style={{ y }}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Align people
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">and priorities</span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Collaborate on diagrams in real time or anytime. Create a shared understanding with visual documentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: Users, title: "Real-time Collaboration", desc: "Work together seamlessly with live cursors and instant updates" },
                { icon: MessageCircle, title: "Contextual Comments", desc: "Add feedback directly on diagram elements" },
                { icon: Share2, title: "Smart Sharing", desc: "Control access and permissions with granular settings" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-700/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                Start Collaborating
              </motion.button>
              <span className="text-gray-600 dark:text-gray-400 text-sm">Free for teams up to 3 members</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;