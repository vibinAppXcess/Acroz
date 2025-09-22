import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Monitor, 
  Users, 
  Database, 
  Puzzle, 
  Shield, 
  Play, 
  MessageCircle, 
  Eye, 
  Settings,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  BarChart3,
  FileText,
  Lock
} from 'lucide-react';

const AcrozFeaturesSection = () => {
  const containerRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const features = [
    {
      id: 'cross-platform',
      title: 'Get started easily on PC, Mac, and Linux',
      description: 'Our cloud-based platform and intuitive interface make it simple to start diagramming, no matter the device, browser, or operating system.',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50/50 to-cyan-100/30 dark:from-blue-900/20 dark:to-cyan-800/30',
      interface: {
        type: 'editor',
        elements: [
          { type: 'toolbar', items: ['select', 'shapes', 'text', 'connector'] },
          { type: 'sidebar', content: 'shapes' },
          { type: 'canvas', diagram: 'flowchart' }
        ]
      }
    },
    {
      id: 'collaboration',
      title: 'Diagram together, from anywhere',
      description: 'ACROZ.AI improves the way teams work together with real-time co-authoring, in-editor chat, shape-specific comments, and collaborative cursors.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50/50 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-800/30',
      interface: {
        type: 'collaboration',
        elements: [
          { type: 'users', count: 3 },
          { type: 'comments', active: true },
          { type: 'cursors', live: true }
        ]
      }
    },
    {
      id: 'data-visualization',
      title: 'See data in context—instantly',
      description: 'Overlay important metrics on existing diagrams through data linking or use auto-visualization to generate org charts, ERDs, and more.',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50/50 to-emerald-100/30 dark:from-green-900/20 dark:to-emerald-800/30',
      interface: {
        type: 'data',
        elements: [
          { type: 'data-panel', visible: true },
          { type: 'linked-shapes', count: 4 },
          { type: 'metrics', overlay: true }
        ]
      }
    },
    {
      id: 'integrations',
      title: 'Integrate with your most-used apps',
      description: 'Start new diagrams or include existing visuals where conversations are already happening, such as Google Workspace, Atlassian, Microsoft Office, Asana, and Slack.',
      icon: Puzzle,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50/50 to-red-100/30 dark:from-orange-900/20 dark:to-red-800/30',
      interface: {
        type: 'integrations',
        elements: [
          { type: 'app-grid', apps: ['google', 'microsoft', 'slack', 'atlassian'] }
        ]
      }
    },
    {
      id: 'enterprise',
      title: 'A solution that scales as your company does',
      description: 'Trust ACROZ.AI as your document repository—increase account security through centralized account management, document retention, and more.',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50/50 to-purple-100/30 dark:from-indigo-900/20 dark:to-purple-800/30',
      interface: {
        type: 'admin',
        elements: [
          { type: 'user-management', users: 24 },
          { type: 'security', features: ['sso', 'audit', 'retention'] }
        ]
      }
    }
  ];

  const currentFeature = features[activeFeature];

  const integrationLogos = [
    { name: 'Google', icon: Globe, color: 'from-red-500 to-yellow-500' },
    { name: 'Microsoft', icon: FileText, color: 'from-blue-500 to-cyan-500' },
    { name: 'Slack', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
    { name: 'Atlassian', icon: Zap, color: 'from-blue-600 to-indigo-600' },
    { name: 'Dropbox', icon: Database, color: 'from-blue-400 to-blue-600' },
    { name: 'Jira', icon: Settings, color: 'from-blue-500 to-blue-700' },
    { name: 'Confluence', icon: FileText, color: 'from-blue-600 to-blue-800' },
    { name: 'AWS', icon: Database, color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Diagram. Collaborate. Visualize data.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                All in one platform.
              </span>
            </h2>
          </motion.div>

          {/* Feature 1: Cross-Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-4 py-2">
                <Monitor className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Cross-Platform</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Get started easily on PC, Mac, and Linux
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Our cloud-based platform and intuitive interface make it simple to start diagramming, no matter the device, browser, or operating system.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/30 dark:bg-gray-700/30 rounded-lg px-3 py-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">ACROZ.AI</span>
                    </div>
                  </div>
                </div>

                {/* Editor Interface */}
                <div className="p-6">
                  {/* Toolbar */}
                  <div className="flex items-center space-x-4 mb-6 p-3 bg-white/30 dark:bg-gray-700/30 rounded-lg">
                    {[
                      { icon: Eye, label: 'Select' },
                      { icon: FileText, label: 'Shapes' },
                      { icon: MessageCircle, label: 'Text' },
                      { icon: ArrowRight, label: 'Connect' }
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

                  {/* Canvas with Flowchart */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-center space-x-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-20 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white text-xs font-semibold">Start</span>
                      </motion.div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        className="w-20 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white text-xs font-semibold">Process</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="w-16 h-16 bg-black/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/90 transition-all duration-200"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Collaboration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header with Users */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Team Collaboration</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {['D', 'E'].map((initial, index) => (
                          <div
                            key={initial}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold border-2 border-white ${
                              initial === 'D' ? 'bg-blue-500' : 'bg-orange-500'
                            }`}
                          >
                            {initial}
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg"
                      >
                        Share
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Collaboration Interface */}
                <div className="p-6 relative">
                  {/* Diagram Elements */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">Backend configuration</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <div className="w-20 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">Process</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Comments */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-600/50 rounded-xl p-3 shadow-xl max-w-xs"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">D</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">@Emily</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Can you look into this?</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">E</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">@Dax</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">You got it!</div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full px-3 py-1 bg-orange-500 text-white text-xs rounded-lg"
                      >
                        Comment
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Live Cursor */}
                  <motion.div
                    animate={{ x: [100, 150, 100], y: [50, 80, 50] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute pointer-events-none"
                  >
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                      Emily
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-purple-700 dark:text-purple-300 font-medium text-sm">Real-time Collaboration</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Diagram together, from anywhere
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                ACROZ.AI improves the way teams work together with real-time co-authoring, in-editor chat, shape-specific comments, and collaborative cursors.
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: MessageCircle, text: 'In-editor chat and comments' },
                  { icon: Eye, text: 'Live collaborative cursors' },
                  { icon: Users, text: 'Real-time co-authoring' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Data Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 rounded-full px-4 py-2">
                <Database className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300 font-medium text-sm">Data Visualization</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                See data in context—instantly
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Overlay important metrics on existing diagrams through data linking or use auto-visualization to generate org charts, ERDs, and more.
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: BarChart3, text: 'Live data overlays' },
                  { icon: Database, text: 'Auto-generated diagrams' },
                  { icon: Zap, text: 'Real-time data sync' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Data Panel */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Data Linking</span>
                    <div className="ml-auto w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Network Diagram with Data */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left side - Network elements */}
                    <div className="space-y-3">
                      {[
                        { name: 'Subnet', color: 'from-orange-400 to-orange-500' },
                        { name: 'VPC', color: 'from-blue-400 to-blue-500' },
                        { name: 'Instance', color: 'from-green-400 to-green-500' }
                      ].map((element, index) => (
                        <motion.div
                          key={element.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className={`w-16 h-12 bg-gradient-to-r ${element.color} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-xs font-semibold">{element.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Right side - Data overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-black/80 text-white p-3 rounded-lg text-xs space-y-1"
                    >
                      <div className="text-green-400">SubnetId: subnet-04234043fdc6b23</div>
                      <div className="text-blue-400">VirtualizationType: hvm</div>
                      <div className="text-yellow-400">VpcId: vpc-0ba27a7e1a5b54b35</div>
                      <div className="text-gray-300">$Tags: {}</div>
                      <div className="text-purple-400">HostName: traffic-source-ec2-instance-c-vpc.com</div>
                      <div className="text-cyan-400">Application: App1</div>
                      <div className="text-orange-400">Environment: Production</div>
                      <div className="text-pink-400">Name: traffic-source-ec2-instance-c</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Integrations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden p-8">
                {/* Integration Network */}
                <div className="relative">
                  {/* Central ACROZ.AI Logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg z-10"
                  >
                    <span className="text-white font-bold text-lg">L</span>
                  </motion.div>

                  {/* Integration Apps in Circle */}
                  {integrationLogos.slice(0, 8).map((app, index) => {
                    const angle = (index * 45) * (Math.PI / 180);
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={app.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}>
                          <app.icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    {integrationLogos.slice(0, 8).map((_, index) => {
                      const angle = (index * 45) * (Math.PI / 180);
                      const radius = 120;
                      const x1 = 200 + Math.cos(angle) * 32;
                      const y1 = 150 + Math.sin(angle) * 32;
                      const x2 = 200 + Math.cos(angle) * (radius - 24);
                      const y2 = 150 + Math.sin(angle) * (radius - 24);
                      
                      return (
                        <motion.line
                          key={index}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="url(#integrationGradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        />
                      );
                    })}
                    <defs>
                      <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center space-x-2 bg-orange-100/80 dark:bg-orange-900/30 backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 rounded-full px-4 py-2">
                <Puzzle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-orange-700 dark:text-orange-300 font-medium text-sm">Integrations</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Integrate with your most-used apps
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Start new diagrams or include existing visuals where conversations are already happening, such as Google Workspace, Atlassian, Microsoft Office, Asana, and Slack.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {['Google Workspace', 'Microsoft Office', 'Slack', 'Atlassian'].map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{app}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Feature 5: Enterprise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-indigo-100/80 dark:bg-indigo-900/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-indigo-700 dark:text-indigo-300 font-medium text-sm">Enterprise Ready</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                A solution that scales as your company does
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Trust ACROZ.AI as your document repository—increase account security through centralized account management, document retention, and more.
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: Lock, text: 'Advanced security controls' },
                  { icon: Users, text: 'Centralized user management' },
                  { icon: FileText, text: 'Document retention policies' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Admin Panel Header */}
                <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-indigo-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Admin Console</span>
                  </div>
                </div>

                {/* User Management Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-6 gap-3 mb-6">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative"
                      >
                        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                        </div>
                        {[3, 7, 11, 15].includes(index) && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Admin Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-lg p-3 space-y-2"
                  >
                    {[
                      'Edit user profile',
                      'Edit licenses',
                      'Edit roles',
                      'Edit groups',
                      'Password reset',
                      'Delete users'
                    ].map((action, index) => (
                      <div
                        key={action}
                        className={`px-3 py-2 rounded text-sm cursor-pointer transition-all duration-200 ${
                          index === 2 
                            ? 'bg-orange-500 text-white' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/30'
                        }`}
                      >
                        {action}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcrozFeaturesSection;