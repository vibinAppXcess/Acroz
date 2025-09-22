import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  BarChart3, 
  Zap,
  CheckCircle,
  Star,
  Crown,
  Sparkles,
  Database,
  Cloud,
  FileText,
  MessageCircle,
  Eye,
  UserCheck,
  Building,
  Award,
  TrendingUp,
  Target,
  Workflow,
  Brain,
  Code,
  Phone,
  Mail,
  Calendar,
  Clock,
  Server,
  Network,
  Key,
  ShieldCheck,
  Scale,
  HardDrive,
  GitBranch,
  ZapOff,
  Cpu
} from 'lucide-react';

const EnterprisePage = () => {
  const containerRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const enterpriseFeatures = [
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, SAML SSO, and advanced audit controls.',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50/50 to-red-100/30 dark:from-red-900/20 dark:to-red-800/30',
      features: [
        'SOC 2 Type II Compliance',
        'SAML Single Sign-On',
        'Advanced Audit Logs',
        'Data Loss Prevention',
        'Role-based Access Control'
      ],
      additionalContent: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <ShieldCheck className="w-8 h-8 text-red-500" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Real-time Threat Detection</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">AI-powered anomaly detection monitors for suspicious activity 24/7</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <Key className="w-8 h-8 text-red-500" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">End-to-End Encryption</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">All data encrypted in transit and at rest with AES-256 encryption</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30 text-center">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Penetration Tests</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">Quarterly</div>
            </div>
            <div className="p-3 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30 text-center">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Security Audits</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">Annual</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'scalability',
      title: 'Enterprise Scalability',
      description: 'Scale seamlessly from hundreds to thousands of users with enterprise-grade infrastructure.',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/30',
      features: [
        'Unlimited Users',
        '99.9% Uptime SLA',
        'Global CDN',
        'Auto-scaling Infrastructure',
        'Priority Support'
      ],
      additionalContent: (
        <div className="space-y-6">
          <div className="p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Global Infrastructure</h4>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Data Centers</span>
              <span className="font-bold text-gray-900 dark:text-white">12</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Edge Locations</span>
              <span className="font-bold text-gray-900 dark:text-white">150+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Countries Served</span>
              <span className="font-bold text-gray-900 dark:text-white">50+</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <Server className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Load Balancing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Automatic traffic distribution across multiple servers</p>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl text-center">
            <div className="text-sm text-blue-700 dark:text-blue-300">Peak Concurrent Users</div>
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">50,000+</div>
          </div>
        </div>
      )
    },
    {
      id: 'management',
      title: 'Advanced Management',
      description: 'Centralized administration with powerful controls for user management and governance.',
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50/50 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/30',
      features: [
        'Centralized User Management',
        'Group Policies',
        'Document Retention',
        'Usage Analytics',
        'Custom Branding'
      ],
      additionalContent: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <UserCheck className="w-8 h-8 text-purple-500" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Admin Dashboard</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Complete visibility and control over all organization activities</p>
            </div>
          </div>
          <div className="p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Policy Controls</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Password Complexity Rules</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Session Timeout Policies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">IP Restriction Rules</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30 text-center">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Admin Roles</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">8+</div>
            </div>
            <div className="p-3 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600/30 text-center">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Custom Reports</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">20+</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'integration',
      title: 'Enterprise Integrations',
      description: 'Deep integrations with enterprise tools and custom API access for seamless workflows.',
      icon: Workflow,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50/50 to-green-100/30 dark:from-green-900/20 dark:to-green-800/30',
      features: [
        'Enterprise API Access',
        'Custom Integrations',
        'Webhook Support',
        'Data Export Tools',
        'Third-party Connectors'
      ],
      additionalContent: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <GitBranch className="w-8 h-8 text-green-500" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">API Ecosystem</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">RESTful APIs with comprehensive documentation</p>
            </div>
          </div>
          <div className="p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Popular Integrations</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Microsoft</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Slack</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Atlassian</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl text-center">
            <div className="text-sm text-green-700 dark:text-green-300">API Requests per Month</div>
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">10M+</div>
          </div>
        </div>
      )
    }
  ];

  const securityCertifications = [
    { name: 'SOC 2 Type II', icon: Shield, description: 'Audited security controls' },
    { name: 'GDPR Compliant', icon: Globe, description: 'European data protection' },
    { name: 'HIPAA Ready', icon: FileText, description: 'Healthcare compliance' },
    { name: 'ISO 27001', icon: Award, description: 'Information security management' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Fortune 500 Tech Company',
      content: 'ACROZ.AI Enterprise has transformed how our 2,000+ person organization collaborates on complex technical documentation. The security features give us complete confidence.',
      rating: 5,
      avatar: 'SJ',
      companyLogo: 'T'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'Global Manufacturing Corp',
      content: 'The scalability and enterprise integrations have been game-changing. We\'ve reduced documentation time by 60% across all our engineering teams.',
      rating: 5,
      avatar: 'MC',
      companyLogo: 'G'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Information Officer',
      company: 'Healthcare Systems Inc',
      content: 'HIPAA compliance and advanced security controls were essential for our healthcare organization. ACROZ.AI Enterprise delivered exactly what we needed.',
      rating: 5,
      avatar: 'ER',
      companyLogo: 'H'
    }
  ];

  const enterpriseStats = [
    { number: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
    { number: '500K+', label: 'Enterprise Users', icon: Users },
    { number: '24/7', label: 'Priority Support', icon: Clock },
    { number: '150+', label: 'Integrations', icon: Workflow }
  ];

  const companyLogos = [
    { name: 'Microsoft', color: 'text-blue-600' },
    { name: 'Amazon', color: 'text-orange-500' },
    { name: 'Google', color: 'text-blue-500' },
    { name: 'IBM', color: 'text-blue-700' },
    { name: 'Oracle', color: 'text-red-600' },
    { name: 'Salesforce', color: 'text-blue-500' },
    { name: 'Adobe', color: 'text-red-500' },
    { name: 'Cisco', color: 'text-blue-600' },
    { name: 'Intel', color: 'text-blue-600' },
    { name: 'HP', color: 'text-blue-600' },
    { name: 'Dell', color: 'text-blue-700' },
    { name: 'VMware', color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-12">
            {/* Enterprise Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-6 py-3"
            >
              <Crown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-semibold">Enterprise Solution</span>
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="text-gray-900 dark:text-white">Enterprise-grade</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  visual collaboration
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Scale visual collaboration across your entire organization with enterprise security, advanced management controls, and dedicated support.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm text-gray-900 dark:text-white font-semibold text-lg rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Priority Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {enterpriseStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section ref={containerRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ y }}
            className="space-y-20"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Enterprise-grade features for scale
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything your organization needs to collaborate securely and efficiently at enterprise scale
              </p>
            </motion.div>

            {/* Feature Tabs */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tab Navigation */}
              <div className="lg:w-1/4 space-y-4">
                {enterpriseFeatures.map((feature, index) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
                      activeFeature === index
                        ? `bg-gradient-to-br ${feature.bgColor} border-blue-300 dark:border-blue-600 shadow-lg transform scale-105`
                        : 'bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-white/30 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-700/60'
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeFeature === index 
                            ? `bg-gradient-to-br ${feature.color}` 
                            : 'bg-gray-200 dark:bg-gray-600'
                        }`}
                        animate={{
                          rotate: activeFeature === index ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className={`w-6 h-6 transition-colors duration-300 ${
                          activeFeature === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                        }`} />
                      </motion.div>
                      <h3 className={`font-bold text-lg transition-colors duration-300 ${
                        activeFeature === index 
                          ? 'text-gray-900 dark:text-white' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeFeature === index 
                        ? 'text-gray-700 dark:text-gray-300' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Feature Content */}
              <div className="lg:w-3/4">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`h-full bg-gradient-to-br ${enterpriseFeatures[activeFeature].bgColor} backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl overflow-hidden shadow-2xl`}
                >
                  {/* Content Header */}
                  <div className="p-8 border-b border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${enterpriseFeatures[activeFeature].color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {(() => {
                          const IconComponent = enterpriseFeatures[activeFeature].icon;
                          return <IconComponent className="w-8 h-8 text-white" />;
                        })()}
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {enterpriseFeatures[activeFeature].title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                          {enterpriseFeatures[activeFeature].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Feature List */}
                    <div className="p-8">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Key Features</h4>
                      <div className="space-y-4">
                        {enterpriseFeatures[activeFeature].features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center space-x-3 p-4 bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Content */}
                    <div className="p-8 border-l border-white/20 dark:border-gray-700/20">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Additional Benefits</h4>
                      {enterpriseFeatures[activeFeature].additionalContent}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the highest standards for security and compliance with industry-leading certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Trusted by enterprise leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how leading organizations transform their collaboration with ACROZ.AI Enterprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8"
              >
                <div className="space-y-6">
                  {/* Company Logo */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.companyLogo}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Fortune 500 companies
              </span>
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className={`text-2xl md:text-3xl font-bold ${company.color} opacity-60 group-hover:opacity-100 transition-all duration-300`}>
                    {company.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Sales CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-blue-800 dark:to-indigo-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to scale your visual collaboration?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get a personalized demo and see how ACROZ.AI Enterprise can transform your organization
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Sales</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo</span>
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Custom pricing available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Dedicated support team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Implementation assistance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;