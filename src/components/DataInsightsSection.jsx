import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { BarChart3, Database, TrendingUp, Users, Target, Zap, ExternalLink } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const DataInsightsSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const employees = [
    { id: 1001, name: 'Sarah Johnson', position: 'CEO', reports: 5, status: 'active' },
    { id: 1002, name: 'Michael Chen', position: 'CFO', reports: 1, status: 'active' },
    { id: 1003, name: 'Emily Rodriguez', position: 'COO', reports: 2, status: 'active' },
    { id: 1004, name: 'David Smith', position: 'CTO', reports: 3, status: 'active' },
    { id: 1005, name: 'Jennifer Park', position: 'CMO', reports: 2, status: 'active' },
    { id: 1006, name: 'Alexandra Kim', position: 'Chief HR Officer', reports: 3, status: 'active' },
    { id: 1007, name: 'Kevin Thompson', position: 'Sr. Software Engineer', reports: 1, status: 'active' },
    { id: 1008, name: 'Jessica Parker', position: 'Sr. Software Engineer', reports: 0, status: 'active' },
    { id: 1009, name: 'Brian Davis', position: 'Sr. Financial Analyst', reports: 0, status: 'active' },
    { id: 1010, name: 'Rachel Nguyen', position: 'Sr. Product Manager', reports: 2, status: 'active' }
  ];

  const orgChart = [
    { name: 'Sabrina Perry', role: 'CEO', level: 1, connections: ['Meg', 'Mickey'] },
    { name: 'Meg', role: 'Manager', level: 2, connections: ['Irene'] },
    { name: 'Mickey Richards', role: 'Assistant', level: 2, connections: [] },
    { name: 'Irene Spinelle', role: 'Senior HR', level: 3, connections: [] }
  ];

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/10">
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
              <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full px-4 py-2">
                <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-purple-700 dark:text-purple-300 font-medium text-sm">Data-Driven</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  Take action
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">on insights</span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Use intelligent features to improve data visibility, so you can make informed decisions and boost innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: Database, title: "Live Data Integration", desc: "Connect to databases, spreadsheets, and APIs in real-time" },
                { icon: TrendingUp, title: "Smart Analytics", desc: "Automatically identify patterns and trends in your data" },
                { icon: Target, title: "Actionable Insights", desc: "Get recommendations to optimize your workflows" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-700/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                <span>Explore Data Features</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Data Interface */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            {/* Main Data Interface */}
            <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden">
              {/* Data Linking Panel */}
              <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Database className="w-6 h-6 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Data Linking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Split View */}
              <div className="flex h-80">
                {/* Left Side - Data Table */}
                <div className="w-1/2 p-4 border-r border-white/20 dark:border-gray-700/20">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-medium text-gray-600 dark:text-gray-400 pb-2 border-b border-white/20 dark:border-gray-700/20">
                      <span className="w-8">#</span>
                      <span className="flex-1">Name</span>
                      <span className="w-16">ID</span>
                      <span className="w-16">Position</span>
                      <span className="w-8">Reports</span>
                    </div>
                    
                    <div className="space-y-1 max-h-64 overflow-y-auto">
                      {employees.slice(0, 8).map((employee, index) => (
                        <motion.div
                          key={employee.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setSelectedEmployee(employee)}
                          className={`flex items-center space-x-2 text-xs p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedEmployee?.id === employee.id 
                              ? 'bg-purple-100/50 dark:bg-purple-900/30' 
                              : 'hover:bg-white/30 dark:hover:bg-gray-700/30'
                          }`}
                        >
                          <span className="w-8 text-gray-500">{index + 1}</span>
                          <span className="flex-1 text-gray-700 dark:text-gray-300 truncate">{employee.name}</span>
                          <span className="w-16 text-gray-500">{employee.id}</span>
                          <span className="w-16 text-gray-500 truncate">{employee.position}</span>
                          <span className="w-8 text-gray-500">{employee.reports}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Org Chart */}
                <div className="w-1/2 p-4 relative">
                  <div className="space-y-4">
                    {/* CEO Level */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-center"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">×</span>
                        </div>
                        <div className="text-center mt-2">
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Sabrina Perry</div>
                          <div className="text-xs text-gray-500">CEO</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Manager Level */}
                    <div className="flex justify-center space-x-8">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Meg</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div className="text-center mt-1">
                          <div className="text-xs text-gray-500">Manager</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Mickey</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div className="text-center mt-1">
                          <div className="text-xs text-gray-500">Assistant</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Employee Level */}
                    <div className="flex justify-start">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative ml-8"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-semibold">Irene</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div className="text-center mt-1">
                          <div className="text-xs text-gray-500">Senior HR</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Additional Team Members */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[
                        { name: 'Alex', role: 'Designer', color: 'from-purple-400 to-purple-500' },
                        { name: 'Sam', role: 'Dev', color: 'from-orange-400 to-orange-500' },
                        { name: 'Jordan', role: 'QA', color: 'from-teal-400 to-teal-500' }
                      ].map((member, index) => (
                        <motion.div
                          key={member.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className={`w-8 h-8 bg-gradient-to-br ${member.color} rounded-lg flex items-center justify-center shadow-lg mx-auto`}>
                            <span className="text-white text-xs font-semibold">{member.name[0]}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{member.role}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <path
                      d="M 120 60 L 120 80 L 80 80 L 80 100"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 120 80 L 160 80 L 160 100"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 80 120 L 80 140"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 px-6 py-3 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span>Connected objects: 12</span>
                  <span>•</span>
                  <span>Last sync: 2 min ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Live data</span>
                </div>
              </div>
            </div>

            {/* Floating Analytics Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Team Growth</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">+23% this quarter</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Insight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-3 shadow-xl animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Smart Insight</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataInsightsSection;