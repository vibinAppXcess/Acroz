// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { ArrowRight, CheckCircle, Play, Users, Zap, Shield } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//    const navigate = useNavigate();
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <section 
//       ref={containerRef} 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding grid-pattern"
//     >
//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
//       >
//         <div className="text-center space-y-12">
//           {/* Trust Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center space-x-2 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-6 py-2"
//           >
//             <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
//             <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Trusted by 15M+ professionals worldwide</span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
//               <span className="text-gray-900 dark:text-white">Create</span>
//               <br />
//               <span className="gradient-text">intelligent</span>
//               <br />
//               <span className="text-gray-900 dark:text-white">diagrams</span>
//             </h1>
//             <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
//               Transform complex ideas into clear, professional diagrams with AI-powered tools and real-time collaboration.
//             </p>
//           </motion.div>

//           {/* Value Propositions */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
//           >
//             {[
//               { 
//                 icon: Zap, 
//                 title: "AI-Powered Generation", 
//                 desc: "Create diagrams from text descriptions instantly"
//               },
//               { 
//                 icon: Users, 
//                 title: "Real-time Collaboration", 
//                 desc: "Work together with your team seamlessly"
//               },
//               { 
//                 icon: Shield, 
//                 title: "Enterprise Security", 
//                 desc: "Bank-level security and compliance"
//               }
//             ].map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
//                 className="glass-card p-6 text-center"
//               >
//                 <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                   <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="space-y-6"
//           >
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="gradient-btn flex items-center space-x-2 text-lg px-8 py-4"
//                 onClick={() => navigate('/signup')}
//               >
//                 <span>Start Free Trial</span>
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="glass-btn flex items-center space-x-2 text-lg px-8 py-4"
//               >
//                 <Play className="w-5 h-5" />
//                 <span>Watch Demo</span>
//               </motion.button>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
//               <div className="flex items-center space-x-2">
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span>Free 14-day trial</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span>No credit card required</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Dashboard Preview */}
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ delay: 1, duration: 1 }}
//             className="relative max-w-5xl mx-auto mt-16"
//           >
//             <div className="glass-card p-8 shadow-professional-lg">
//               {/* Dashboard Header */}
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                   </div>
//                   <span className="text-gray-700 dark:text-gray-300 font-medium">Customer Journey Workflow</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
//                     <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">JD</span>
//                   </div>
//                   <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
//                     <span className="text-green-600 dark:text-green-400 text-xs font-semibold">SM</span>
//                   </div>
//                   <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
//                     <span className="text-purple-600 dark:text-purple-400 text-xs font-semibold">AL</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Dashboard Content */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 {[
//                   { title: "Awareness", color: "bg-blue-500", delay: 0 },
//                   { title: "Interest", color: "bg-green-500", delay: 0.1 },
//                   { title: "Decision", color: "bg-purple-500", delay: 0.2 },
//                   { title: "Action", color: "bg-orange-500", delay: 0.3 }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.2 + item.delay, duration: 0.4 }}
//                     className={`${item.color} rounded-xl p-4 h-20 flex items-center justify-center shadow-professional`}
//                   >
//                     <span className="text-white font-semibold">{item.title}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Status Bar */}
//               <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
//                 <span>4 team members • Last updated 2 minutes ago</span>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <span>All changes saved</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;










import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play, Users, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding grid-pattern">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-12">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-6 py-2"
          >
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Trusted by 15M+ professionals worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Create</span>
              <br />
              <span className="gradient-text">intelligent</span>
              <br />
              <span className="text-gray-900 dark:text-white">diagrams</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Transform complex ideas into clear, professional diagrams with AI-powered tools and real-time collaboration.
            </p>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { 
                icon: Zap, 
                title: "AI-Powered Generation", 
                desc: "Create diagrams from text descriptions instantly"
              },
              { 
                icon: Users, 
                title: "Real-time Collaboration", 
                desc: "Work together with your team seamlessly"
              },
              { 
                icon: Shield, 
                title: "Enterprise Security", 
                desc: "Bank-level security and compliance"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-btn flex items-center space-x-2 text-lg px-8 py-4"
                onClick={() => navigate('/signup')}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-btn flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative max-w-5xl mx-auto mt-16"
          >
            <div className="glass-card p-8 shadow-professional-lg">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Customer Journey Workflow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">JD</span>
                  </div>
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xs font-semibold">SM</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-xs font-semibold">AL</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { title: "Awareness", color: "bg-blue-500", delay: 0 },
                  { title: "Interest", color: "bg-green-500", delay: 0.1 },
                  { title: "Decision", color: "bg-purple-500", delay: 0.2 },
                  { title: "Action", color: "bg-orange-500", delay: 0.3 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + item.delay, duration: 0.4 }}
                    className={`${item.color} rounded-xl p-4 h-20 flex items-center justify-center shadow-professional`}
                  >
                    <span className="text-white font-semibold">{item.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* Status Bar */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>4 team members • Last updated 2 minutes ago</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>All changes saved</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;