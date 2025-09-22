import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Zap, 
  Users, 
  FileText, 
  Database, 
  MessageCircle, 
  Settings, 
  Globe, 
  Shield, 
  Code,
  Play,
  Download,
  Star,
  TrendingUp,
  Briefcase,
  Palette,
  Target,
  BarChart3,
  GitBranch,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Key,
  RefreshCw,
  AlertCircle,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceIntegrationsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Integration categories
  const baseCategories = [
    { id: 'all', name: 'All Integrations', icon: Globe },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'project-management', name: 'Project Management', icon: Briefcase },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'design', name: 'Design & Creative', icon: Palette },
    { id: 'analytics', name: 'Analytics & Data', icon: BarChart3 },
    { id: 'enterprise', name: 'Enterprise', icon: Shield }
  ];

  // Integration data
  const integrations = [
    // Productivity
    {
      id: 'confluence',
      name: 'Confluence',
      description: 'Embed interactive diagrams directly into Confluence pages for better documentation.',
      category: 'productivity',
      status: 'live',
      setupTime: '5 minutes',
      popularity: 95,
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50/50 to-blue-100/30',
      features: ['Embed diagrams', 'Real-time sync', 'Version control', 'Team collaboration'],
      pricing: 'Free',
      setupSteps: [
        'Install the ACROZ.AI app from Atlassian Marketplace',
        'Connect your ACROZ.AI account',
        'Start embedding diagrams in your Confluence pages'
      ],
      benefits: [
        'Seamless integration with existing workflows',
        'Real-time collaboration on diagrams',
        'Version history and change tracking',
        'Powered by ACROZ.AI'
      ]
    },
    {
      id: 'google-workspace',
      name: 'Google Workspace',
      description: 'Add diagrams to Google Docs, Sheets, and Slides with real-time collaboration.',
      category: 'productivity',
      status: 'live',
      setupTime: '3 minutes',
      popularity: 92,
      icon: Database,
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50/50 to-red-100/30',
      features: ['Google Docs integration', 'Sheets embedding', 'Slides support', 'Real-time sync'],
      pricing: 'Free',
      setupSteps: [
        'Install ACROZ.AI add-on from Google Workspace Marketplace',
        'Authorize ACROZ.AI access',
        'Insert diagrams directly into your documents'
      ],
      benefits: [
        'Native Google Workspace experience',
        'Automatic saving and version control',
        'Cross-platform accessibility'
      ]
    },
    {
      id: 'microsoft-office',
      name: 'Microsoft Office',
      description: 'Integrate diagrams into Word, Excel, and PowerPoint with seamless editing.',
      category: 'productivity',
      status: 'live',
      setupTime: '4 minutes',
      popularity: 89,
      icon: FileText,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50/50 to-blue-100/30',
      features: ['Word integration', 'Excel embedding', 'PowerPoint support', 'Cloud sync'],
      pricing: 'Free',
      setupSteps: [
        'Download ACROZ.AI add-in from Microsoft AppSource',
        'Sign in with your ACROZ.AI account',
        'Insert and edit diagrams in Office applications'
      ],
      benefits: [
        'Familiar Office interface',
        'Offline editing capabilities',
        'Enterprise-grade security'
      ]
    },

    // Communication
    {
      id: 'slack',
      name: 'Slack',
      description: 'Share and collaborate on diagrams directly within Slack channels.',
      category: 'communication',
      status: 'live',
      setupTime: '2 minutes',
      popularity: 88,
      icon: MessageCircle,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50/50 to-purple-100/30',
      features: ['Channel sharing', 'Real-time preview', 'Comment threads', 'Notification sync'],
      pricing: 'Free',
      setupSteps: [
        'Add ACROZ.AI app to your Slack workspace',
        'Connect your ACROZ.AI account',
        'Start sharing diagrams in channels'
      ],
      benefits: [
        'Keep conversations and diagrams together',
        'Instant team notifications',
        'Seamless workflow integration'
      ]
    },
    {
      id: 'microsoft-teams',
      name: 'Microsoft Teams',
      description: 'Collaborate on diagrams within Teams channels and meetings.',
      category: 'communication',
      status: 'live',
      setupTime: '3 minutes',
      popularity: 85,
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50/50 to-blue-100/30',
      features: ['Teams integration', 'Meeting sharing', 'Channel collaboration', 'File sync'],
      pricing: 'Free',
      setupSteps: [
        'Install ACROZ.AI app in Microsoft Teams',
        'Configure permissions and channels',
        'Start collaborating on diagrams'
      ],
      benefits: [
        'Integrated team communication',
        'Meeting presentation tools',
        'Enterprise security compliance'
      ]
    },

    // Project Management
    {
      id: 'jira',
      name: 'Jira',
      description: 'Link diagrams to Jira issues and project workflows.',
      category: 'project-management',
      status: 'live',
      setupTime: '5 minutes',
      popularity: 87,
      icon: Settings,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50/50 to-indigo-100/30',
      features: ['Issue linking', 'Workflow diagrams', 'Project visualization', 'Automation rules'],
      pricing: 'Free',
      setupSteps: [
        'Install ACROZ.AI app from Atlassian Marketplace',
        'Configure project mappings',
        'Link diagrams to issues and epics'
      ],
      benefits: [
        'Visual project management',
        'Automated workflow tracking',
        'Enhanced team collaboration'
      ]
    },
    {
      id: 'asana',
      name: 'Asana',
      description: 'Visualize project timelines and workflows with embedded diagrams.',
      category: 'project-management',
      status: 'live',
      setupTime: '4 minutes',
      popularity: 82,
      icon: Target,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50/50 to-red-100/30',
      features: ['Project visualization', 'Timeline diagrams', 'Task mapping', 'Progress tracking'],
      pricing: 'Free',
      setupSteps: [
        'Connect ACROZ.AI to your Asana workspace',
        'Configure project templates',
        'Start visualizing your workflows'
      ],
      benefits: [
        'Clear project visualization',
        'Enhanced team understanding',
        'Streamlined project planning'
      ]
    },

    // Development
    {
      id: 'github',
      name: 'GitHub',
      description: 'Document code architecture and system designs in GitHub repositories.',
      category: 'development',
      status: 'live',
      setupTime: '6 minutes',
      popularity: 90,
      icon: GitBranch,
      color: 'from-gray-700 to-gray-800',
      bgColor: 'from-gray-50/50 to-gray-100/30',
      features: ['Repository integration', 'Architecture docs', 'System diagrams', 'Version control'],
      pricing: 'Free',
      setupSteps: [
        'Install ACROZ.AI GitHub app',
        'Configure repository access',
        'Start documenting your architecture'
      ],
      benefits: [
        'Code and documentation together',
        'Version-controlled diagrams',
        'Developer-friendly workflow'
      ]
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      description: 'Integrate diagrams into GitLab projects and documentation.',
      category: 'development',
      status: 'live',
      setupTime: '5 minutes',
      popularity: 84,
      icon: Code,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50/50 to-orange-100/30',
      features: ['Project integration', 'Wiki diagrams', 'CI/CD visualization', 'Issue tracking'],
      pricing: 'Free',
      setupSteps: [
        'Configure ACROZ.AI in GitLab settings',
        'Set up project permissions',
        'Embed diagrams in project documentation'
      ],
      benefits: [
        'Integrated development workflow',
        'Comprehensive documentation',
        'Team collaboration tools'
      ]
    },

    // Enterprise
    {
      id: 'salesforce',
      name: 'Salesforce',
      description: 'Visualize sales processes and customer journeys within Salesforce.',
      category: 'enterprise',
      status: 'live',
      setupTime: '8 minutes',
      popularity: 86,
      icon: TrendingUp,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50/50 to-cyan-100/30',
      features: ['Process mapping', 'Customer journey visualization', 'Sales pipeline diagrams', 'Custom objects'],
      pricing: 'Enterprise',
      setupSteps: [
        'Install ACROZ.AI package in Salesforce',
        'Configure custom fields and objects',
        'Set up process automation'
      ],
      benefits: [
        'Enhanced sales process visibility',
        'Improved customer understanding',
        'Streamlined sales operations'
      ]
    },
    {
      id: 'okta',
      name: 'Okta',
      description: 'Single sign-on integration for enterprise security and user management.',
      category: 'enterprise',
      status: 'live',
      setupTime: '10 minutes',
      popularity: 83,
      icon: Shield,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50/50 to-green-100/30',
      features: ['SSO integration', 'User provisioning', 'Security policies', 'Audit logging'],
      pricing: 'Enterprise',
      setupSteps: [
        'Configure Okta SAML application',
        'Set up user provisioning rules',
        'Configure security policies'
      ],
      benefits: [
        'Enhanced security compliance',
        'Simplified user management',
        'Centralized access control'
      ]
    }
  ];

  // Calculate dynamic counts
  const categoryCounts = {
    all: integrations.length,
  };
  for (const cat of baseCategories) {
    if (cat.id !== 'all') {
      categoryCounts[cat.id] = integrations.filter(i => i.category === cat.id).length;
    }
  }
  const categories = baseCategories.map(cat => ({ ...cat, count: categoryCounts[cat.id] || 0 }));

  // Filter and sort integrations
  const filteredIntegrations = integrations
    .filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           integration.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popularity - a.popularity;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.popularity - a.popularity;
      }
    });

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/10">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-100/80 dark:bg-indigo-900/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-indigo-700 dark:text-indigo-300 font-medium text-sm">Service Integrations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Connect ACROZ.AI with</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                your favorite tools
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Streamline your workflow by integrating ACROZ.AI with 50+ popular applications. 
              From productivity tools to enterprise solutions, we've got you covered.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg px-3 py-1 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-500 text-white border-indigo-500 shadow-lg'
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCategoryData?.name} Integrations
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </motion.div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/service-integrations/${integration.id}`)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {integration.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {integration.status === 'live' && (
                        <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Live</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {integration.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {integration.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {integration.features.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          +{integration.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Setup Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{integration.setupTime} setup</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{integration.popularity}% popular</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      integration.pricing === 'Free' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}>
                      {integration.pricing}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Connect
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredIntegrations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No integrations found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filter
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Integration Detail */}
      {filteredIntegrations.length > 0 && (
        <section className="py-16 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:to-purple-900/20 backdrop-blur-xl border border-indigo-200/50 dark:border-indigo-700/50 rounded-3xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Integration Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {filteredIntegrations[0].name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Most popular integration
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {filteredIntegrations[0].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Setup Time</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {filteredIntegrations[0].setupTime}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Get Started with {filteredIntegrations[0].name}
                  </motion.button>
                </div>

                {/* Right Column - Setup Steps */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Quick Setup Guide
                  </h4>
                  <div className="space-y-4">
                    {filteredIntegrations[0].setupSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Benefits
                    </h5>
                    <ul className="space-y-2">
                      {filteredIntegrations[0].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're constantly adding new integrations. Let us know what you need, and we'll build it for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
                onClick={() => navigate('/contact-sales')}
              >
                Request Integration
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceIntegrationsPage; 