// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Brain, Database, Layers, Code, Zap, User, FileText, BarChart3 } from 'lucide-react';

// const CapabilitiesSection = () => {
//   const containerRef = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

//   const capabilities = [
//     {
//       id: 'ai-generation',
//       title: 'Generate diagram with AI',
//       icon: Brain,
//       active: true
//     },
//     {
//       id: 'data-linking',
//       title: 'Data linking',
//       icon: Database,
//       active: false
//     },
//     {
//       id: 'conditional-formatting',
//       title: 'Conditional formatting',
//       icon: BarChart3,
//       active: false
//     },
//     {
//       id: 'uml-markup',
//       title: 'UML markup',
//       icon: Code,
//       active: false
//     },
//     {
//       id: 'layers',
//       title: 'Layers',
//       icon: Layers,
//       active: false
//     }
//   ];

//   return (
//     <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           style={{ y }}
//           className="space-y-16"
//         >
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center space-y-6"
//           >
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400">
//                 Capabilities for next-generation
//               </span>
//               <br />
//               <span className="text-gray-900 dark:text-white">diagramming</span>
//             </h2>
//             <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
//               Go beyond shapes and lines. Create diagrams in less time with data-driven intelligence.
//             </p>
//           </motion.div>

//           {/* Capability Tabs */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {capabilities.map((capability, index) => (
//               <motion.button
//                 key={capability.id}
//                 onClick={() => setActiveTab(index)}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
//                   activeTab === index
//                     ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-lg'
//                     : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70'
//                 }`}
//               >
//                 <capability.icon className="w-5 h-5" />
//                 <span className="font-medium">{capability.title}</span>
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Main Content */}
//           <motion.div
//             style={{ scale }}
//             className="relative"
//           >
//             <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
//               {/* Content Area */}
//               <div className="relative h-96 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10">
//                 {/* Left Side - Person with Laptop */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.3 }}
//                   className="absolute left-8 top-1/2 transform -translate-y-1/2"
//                 >
//                   <div className="relative">
//                     {/* Person silhouette */}
//                     <div className="w-48 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative">
//                       {/* Head */}
//                       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-700 rounded-full"></div>
//                       {/* Body */}
//                       <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-800 rounded-lg"></div>
//                       {/* Laptop */}
//                       <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-600 rounded-lg">
//                         <div className="w-full h-2/3 bg-gray-300 rounded-t-lg"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Center - AI Generation Interface */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="absolute left-1/2 top-8 transform -translate-x-1/2 w-80"
//                 >
//                   <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
//                     <div className="space-y-4">
//                       <div className="flex items-center space-x-3">
//                         <Brain className="w-6 h-6 text-blue-500" />
//                         <h3 className="font-semibold text-gray-900 dark:text-white">Generate diagram</h3>
//                       </div>
                      
//                       <div className="space-y-3">
//                         <div>
//                           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
//                           <select className="w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
//                             <option>Auto-select</option>
//                           </select>
//                         </div>
                        
//                         <div>
//                           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
//                           <textarea 
//                             className="w-full mt-1 h-20 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm resize-none"
//                             placeholder="Create a flowchart showcasing the structure of a revamped customer support system for a SaaS company."
//                             defaultValue="Create a flowchart showcasing the structure of a revamped customer support system for a SaaS company."
//                           />
//                           <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">18000</div>
//                         </div>
                        
//                         <div>
//                           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Shape libraries</label>
//                           <select className="w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
//                             <option>Auto-select</option>
//                           </select>
//                         </div>
                        
//                         <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300">
//                           Generate
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Center-Right - Generated Flowchart */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="absolute right-1/4 top-16 w-64"
//                 >
//                   <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-4">
//                     <div className="space-y-3">
//                       {/* Flowchart elements */}
//                       <div className="flex justify-center">
//                         <div className="w-16 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
//                           <span className="text-white text-xs font-medium">Start</span>
//                         </div>
//                       </div>
                      
//                       <div className="flex justify-center">
//                         <div className="w-1 h-4 bg-gray-400"></div>
//                       </div>
                      
//                       <div className="flex justify-center">
//                         <div className="w-16 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg transform rotate-45 flex items-center justify-center">
//                           <span className="text-white text-xs font-medium transform -rotate-45">Decision</span>
//                         </div>
//                       </div>
                      
//                       <div className="flex justify-center space-x-4">
//                         <div className="flex flex-col items-center space-y-2">
//                           <div className="w-1 h-4 bg-gray-400"></div>
//                           <div className="w-14 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
//                             <span className="text-white text-xs font-medium">Process</span>
//                           </div>
//                         </div>
//                         <div className="flex flex-col items-center space-y-2">
//                           <div className="w-1 h-4 bg-gray-400"></div>
//                           <div className="w-14 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
//                             <span className="text-white text-xs font-medium">Process</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="flex justify-center">
//                         <div className="w-1 h-4 bg-gray-400"></div>
//                       </div>
                      
//                       <div className="flex justify-center">
//                         <div className="w-16 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
//                           <span className="text-white text-xs font-medium">End</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Right Side - Data Linking Interface */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   className="absolute right-8 top-8 w-72"
//                 >
//                   <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl overflow-hidden">
//                     {/* Header */}
//                     <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                           <Database className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-white">Data Linking</h3>
//                           <p className="text-orange-100 text-sm">Marketing org chart</p>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="p-4 space-y-4">
//                       <div className="space-y-2">
//                         <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//                           <span>Sales Performance</span>
//                           <div className="flex-1 border-b border-gray-200 dark:border-gray-600"></div>
//                         </div>
                        
//                         <div className="space-y-1">
//                           {[
//                             { name: 'Julia J.', role: 'Region', location: 'East', quota: '100' },
//                             { name: 'Jesse J.', role: 'Manager', location: 'South', quota: '50' },
//                             { name: 'Jonah', role: 'Manager', location: 'North', quota: '83' },
//                             { name: 'Jamie', role: 'Manager', location: 'East', quota: '200' },
//                             { name: 'Jackie', role: 'Manager', location: 'NW', quota: '2' },
//                             { name: 'James', role: 'Manager', location: 'SE', quota: '40' }
//                           ].map((person, index) => (
//                             <div key={index} className={`flex items-center space-x-2 text-xs p-2 rounded ${index === 3 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
//                               <span className="w-4 text-gray-500">{index + 1}</span>
//                               <span className="flex-1 text-gray-700 dark:text-gray-300">{person.name}</span>
//                               <span className="w-16 text-gray-500">{person.role}</span>
//                               <span className="w-12 text-gray-500">{person.location}</span>
//                               <span className="w-8 text-gray-500">{person.quota}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
                      
//                       {/* Org Chart Preview */}
//                       <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
//                         <div className="space-y-3">
//                           <div className="flex justify-center">
//                             <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
//                               <User className="w-6 h-6 text-white" />
//                             </div>
//                           </div>
//                           <div className="flex justify-center space-x-4">
//                             <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg"></div>
//                             <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg"></div>
//                             <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Floating User Avatars */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8, delay: 0.7 }}
//                   className="absolute top-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-4 border-white shadow-lg animate-float"
//                 >
//                   <div className="w-full h-full rounded-full bg-orange-300 flex items-center justify-center">
//                     <span className="text-white font-semibold text-sm">👨</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8, delay: 0.8 }}
//                   className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-4 border-white shadow-lg animate-float"
//                   style={{ animationDelay: '1s' }}
//                 >
//                   <div className="w-full h-full rounded-full bg-blue-300 flex items-center justify-center">
//                     <span className="text-white font-semibold text-sm">👩</span>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Bottom Description */}
//               <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 p-8 text-center">
//                 <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//                   Describe a diagram you'd like to create, and AI will generate it automatically. Enhance or edit your prompt to keep iterating.
//                 </p>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute -top-6 -left-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float">
//               <Zap className="w-8 h-8 text-blue-500" />
//             </div>

//             <div className="absolute -bottom-4 -right-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
//               <FileText className="w-8 h-8 text-purple-500" />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CapabilitiesSection;












import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Database, Layers, Code, Zap, User, FileText, BarChart3 } from 'lucide-react';

const CapabilitiesSection = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const capabilities = [
    {
      id: 'ai-generation',
      title: 'Generate diagram with AI',
      icon: Brain,
      description: "Describe a diagram you'd like to create, and AI will generate it automatically. Enhance or edit your prompt to keep iterating.",
      content: (
        <>
          {/* Left Side - Person with Laptop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 top-1/2 transform -translate-y-1/2"
          >
            <div className="relative">
              {/* Person silhouette */}
              <div className="w-48 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative">
                {/* Head */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-700 rounded-full"></div>
                {/* Body */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-800 rounded-lg"></div>
                {/* Laptop */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-600 rounded-lg">
                  <div className="w-full h-2/3 bg-gray-300 rounded-t-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - AI Generation Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1/2 top-8 transform -translate-x-1/2 w-80"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Generate diagram</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                    <select className="w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
                      <option>Auto-select</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea 
                      className="w-full mt-1 h-20 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm resize-none"
                      placeholder="Create a flowchart showcasing the structure of a revamped customer support system for a SaaS company."
                      defaultValue="Create a flowchart showcasing the structure of a revamped customer support system for a SaaS company."
                    />
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">18000</div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Shape libraries</label>
                    <select className="w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
                      <option>Auto-select</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center-Right - Generated Flowchart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-1/4 top-16 w-64"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-4">
              <div className="space-y-3">
                {/* Flowchart elements */}
                <div className="flex justify-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Start</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-1 h-4 bg-gray-400"></div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-16 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg transform rotate-45 flex items-center justify-center">
                    <span className="text-white text-xs font-medium transform -rotate-45">Decision</span>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-1 h-4 bg-gray-400"></div>
                    <div className="w-14 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-medium">Process</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-1 h-4 bg-gray-400"></div>
                    <div className="w-14 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-medium">Process</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-1 h-4 bg-gray-400"></div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium">End</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Data Linking Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-8 top-8 w-72"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Data Linking</h3>
                    <p className="text-orange-100 text-sm">Marketing org chart</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span>Sales Performance</span>
                    <div className="flex-1 border-b border-gray-200 dark:border-gray-600"></div>
                  </div>
                  
                  <div className="space-y-1">
                    {[
                      { name: 'Julia J.', role: 'Region', location: 'East', quota: '100' },
                      { name: 'Jesse J.', role: 'Manager', location: 'South', quota: '50' },
                      { name: 'Jonah', role: 'Manager', location: 'North', quota: '83' },
                      { name: 'Jamie', role: 'Manager', location: 'East', quota: '200' },
                      { name: 'Jackie', role: 'Manager', location: 'NW', quota: '2' },
                      { name: 'James', role: 'Manager', location: 'SE', quota: '40' }
                    ].map((person, index) => (
                      <div key={index} className={`flex items-center space-x-2 text-xs p-2 rounded ${index === 3 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
                        <span className="w-4 text-gray-500">{index + 1}</span>
                        <span className="flex-1 text-gray-700 dark:text-gray-300">{person.name}</span>
                        <span className="w-16 text-gray-500">{person.role}</span>
                        <span className="w-12 text-gray-500">{person.location}</span>
                        <span className="w-8 text-gray-500">{person.quota}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Org Chart Preview */}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating User Avatars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-4 border-white shadow-lg animate-float"
          >
            <div className="w-full h-full rounded-full bg-orange-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">👨</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-4 border-white shadow-lg animate-float"
            style={{ animationDelay: '1s' }}
          >
            <div className="w-full h-full rounded-full bg-blue-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">👩</span>
            </div>
          </motion.div>
        </>
      )
    },
    {
      id: 'data-linking',
      title: 'Data linking',
      icon: Database,
      description: "Connect your diagrams to live data sources and see them update automatically when your data changes.",
      content: (
        <>
          {/* Left Side - Database Connection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 top-1/2 transform -translate-y-1/2"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6 w-64">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Database className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Sources</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google Sheets</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Airtable</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Notion</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Excel</span>
                  </div>
                  
                  <button className="w-full mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                    + Add data source
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Data Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Team Performance</h3>
                  <div className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Live data
                  </div>
                </div>
                
                <div className="space-y-3">
                  {/* Bar chart */}
                  <div className="h-32 flex items-end space-x-2">
                    {[40, 70, 60, 90, 50, 80].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{['M', 'T', 'W', 'T', 'F', 'S'][index]}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Team members */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Design', 'Eng', 'Product'].map((team, index) => (
                      <div key={index} className="p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400">{team}</div>
                        <div className="font-medium text-gray-900 dark:text-white">{['8', '12', '5'][index]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Org Chart with Data */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-8 top-8 w-72"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Org Chart</h3>
                    <p className="text-blue-100 text-sm">Connected to HRIS</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  {/* CEO */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Managers */}
                  <div className="flex justify-center space-x-6">
                    {['Eng', 'Design', 'PM'].map((dept, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-1 h-4 bg-gray-400"></div>
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-xs mt-1 text-center text-gray-700 dark:text-gray-300">{dept}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Team members */}
                  <div className="flex justify-center space-x-1">
                    {Array(6).fill(0).map((_, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Data status */}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Last updated</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Just now</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )
    },
    {
      id: 'conditional-formatting',
      title: 'Conditional formatting',
      icon: BarChart3,
      description: "Automatically style your diagrams based on data values with powerful conditional formatting rules.",
      content: (
        <>
          {/* Left Side - Formatting Rules */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 top-8 w-64"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Formatting Rules</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</span>
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">High = Red</div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Done = Green</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Department</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Eng = Blue</div>
                  </div>
                  
                  <button className="w-full mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                    + Add rule
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Flowchart with Formatting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Project Workflow</h3>
                
                <div className="space-y-3">
                  {/* Flowchart with colored nodes */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-full h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Start</span>
                    </div>
                    
                    <div className="w-1 h-4 bg-gray-400"></div>
                    
                    <div className="w-full h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Planning</span>
                    </div>
                    
                    <div className="w-1 h-4 bg-gray-400"></div>
                    
                    <div className="flex space-x-2 w-full">
                      <div className="flex-1 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Design</span>
                      </div>
                      <div className="flex-1 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Develop</span>
                      </div>
                    </div>
                    
                    <div className="w-1 h-4 bg-gray-400"></div>
                    
                    <div className="w-full h-10 bg-gradient-to-r from-red-400 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Testing</span>
                    </div>
                    
                    <div className="w-1 h-4 bg-gray-400"></div>
                    
                    <div className="w-full h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Legend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-8 top-8 w-64"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Color Legend</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Completed</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">In Progress</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Pending</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-400 rounded-sm"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Development</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-400 rounded-sm"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Blocked</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )
    },
    {
      id: 'uml-markup',
      title: 'UML markup',
      icon: Code,
      description: "Create UML diagrams quickly using simple markup language without dragging and dropping shapes.",
      content: (
        <>
          {/* Left Side - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 top-8 w-96 h-80"
          >
            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">
              {/* Editor header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm font-medium text-gray-300">
                  sequence.uml
                </div>
              </div>
              
              {/* Editor content */}
              <div className="p-4 font-mono text-sm text-gray-300">
                <div className="text-purple-400">@startuml</div>
                <div className="text-blue-400">actor User</div>
                <div className="text-blue-400">participant "Order System" as OS</div>
                <div className="text-blue-400">participant "Payment System" as PS</div>
                <div className="text-blue-400">database "Inventory" as DB</div>
                <br />
                <div className="text-green-400">User &rarr; OS : Place Order</div>
                <div className="text-green-400">OS &rarr; DB : Check Inventory</div>
                <div className="text-green-400">DB &rarr;&rarr; OS : Item Available</div>
                <div className="text-green-400">OS &rarr; PS : Process Payment</div>
                <div className="text-green-400">PS &rarr;&rarr; OS : Payment Confirmed</div>
                <div className="text-green-400">OS &rarr;&rarr; User : Order Confirmation</div>
                <br />
                <div className="text-purple-400">@enduml</div>
              </div>
            </div>
          </motion.div>

          {/* Center - Generated UML */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Sequence Diagram</h3>
                
                {/* UML diagram */}
                <div className="space-y-6">
                  {/* Actors */}
                  <div className="flex justify-between">
                    <div className="w-16 h-20 flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </div>
                      <span className="text-xs mt-1 text-center">User</span>
                    </div>
                    
                    <div className="w-16 h-20 flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-xs">OS</span>
                      </div>
                      <span className="text-xs mt-1 text-center">Order System</span>
                    </div>
                    
                    <div className="w-16 h-20 flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-xs">PS</span>
                      </div>
                      <span className="text-xs mt-1 text-center">Payment System</span>
                    </div>
                    
                    <div className="w-16 h-20 flex flex-col items-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-purple-500" />
                      </div>
                      <span className="text-xs mt-1 text-center">Inventory</span>
                    </div>
                  </div>
                  
                  {/* Sequence lines */}
                  <div className="relative h-48">
                    {/* Vertical lines */}
                    <div className="absolute top-0 left-1/8 w-px h-full bg-gray-300"></div>
                    <div className="absolute top-0 left-3/8 w-px h-full bg-gray-300"></div>
                    <div className="absolute top-0 left-5/8 w-px h-full bg-gray-300"></div>
                    <div className="absolute top-0 left-7/8 w-px h-full bg-gray-300"></div>
                    
                    {/* Horizontal arrows */}
                    <div className="absolute top-8 left-1/8 w-1/4 h-px bg-green-500">
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-green-500 transform rotate-45"></div>
                    </div>
                    
                    <div className="absolute top-16 left-3/8 w-1/4 h-px bg-green-500">
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-green-500 transform rotate-45"></div>
                    </div>
                    
                    <div className="absolute top-24 left-5/8 w-1/4 h-px bg-green-500">
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-green-500 transform rotate-45"></div>
                    </div>
                    
                    <div className="absolute top-32 left-3/8 w-1/4 h-px bg-green-500">
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-green-500 transform rotate-45"></div>
                    </div>
                    
                    <div className="absolute top-40 left-1/8 w-1/4 h-px bg-green-500">
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-green-500 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - UML Types */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-8 top-8 w-64"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">UML Types</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Sequence</div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">@startuml ... @enduml</div>
                  </div>
                  
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Class</div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">class ClassName</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Use Case</div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">actor User</div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">State</div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">[*] &rarr; State</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )
    },
    {
      id: 'layers',
      title: 'Layers',
      icon: Layers,
      description: "Organize complex diagrams with layers to show different levels of detail or separate concerns.",
      content: (
        <>
          {/* Left Side - Layers Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 top-8 w-64"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Layers className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Layers</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Infrastructure</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Servers, networks</div>
                  </div>
                  
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Application</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Services, APIs</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg opacity-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Databases, storage</div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg opacity-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Security</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Auth, permissions</div>
                  </div>
                  
                  <button className="w-full mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                    + Add layer
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Layered Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">System Architecture</h3>
                
                {/* Layered diagram */}
                <div className="space-y-4">
                  {/* Infrastructure layer */}
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Infrastructure</span>
                      <div className="flex space-x-1">
                        {['AWS', 'Azure', 'GCP'].map((cloud, index) => (
                          <div key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded">
                            {cloud}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Application layer */}
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Application</span>
                      <div className="flex space-x-1">
                        {['API', 'Auth', 'Web'].map((app, index) => (
                          <div key={index} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded">
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Data layer (hidden) */}
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg opacity-50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Data</span>
                      <div className="flex space-x-1">
                        {['SQL', 'NoSQL'].map((db, index) => (
                          <div key={index} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded">
                            {db}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Security layer (hidden) */}
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg opacity-50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Security</span>
                      <div className="flex space-x-1">
                        {['IAM', 'Certs'].map((sec, index) => (
                          <div key={index} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded">
                            {sec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Layer Controls */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-8 top-8 w-64"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Layer Controls</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Visibility</span>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Locking</span>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Opacity</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Z-index</span>
                    <div className="flex space-x-1">
                      <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )
    }
  ];

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
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
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400">
                Capabilities for next-generation
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">diagramming</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Go beyond shapes and lines. Create diagrams in less time with data-driven intelligence.
            </p>
          </motion.div>

          {/* Capability Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {capabilities.map((capability, index) => (
              <motion.button
                key={capability.id}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-lg'
                    : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70'
                }`}
              >
                <capability.icon className="w-5 h-5" />
                <span className="font-medium">{capability.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
              {/* Content Area */}
              <div className="relative h-96 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10">
                {capabilities[activeTab].content}
              </div>

              {/* Bottom Description */}
              <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 p-8 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  {capabilities[activeTab].description}
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float">
              <Zap className="w-8 h-8 text-blue-500" />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <FileText className="w-8 h-8 text-purple-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;