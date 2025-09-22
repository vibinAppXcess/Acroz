import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, TrendingUp, FileText, MessageCircle, Settings, GitBranch, TrendingUp as TrendingUpIcon } from 'lucide-react';

// This should match the integrations array in ServiceIntegrationsPage
const integrations = [
  {
    id: 'confluence',
    name: 'Confluence',
    description: 'Embed interactive diagrams directly into Confluence pages for better documentation.',
    category: 'productivity',
    status: 'live',
    setupTime: '5 minutes',
    popularity: 95,
    rating: 4.8,
    reviews: 1247,
    icon: 'FileText',
    color: 'from-blue-500 to-blue-600',
    features: ['Embed diagrams', 'Real-time sync', 'Version control'],
    pricing: 'Free',
    setupSteps: [
      'Install the ACROZ.AI app from Atlassian Marketplace',
      'Connect your ACROZ.AI account',
      'Start embedding diagrams in your Confluence pages'
    ],
    benefits: [
      'Seamless integration with existing workflows',
      'Real-time collaboration on diagrams',
      'Version history and change tracking'
    ]
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Share and collaborate on diagrams directly within Slack channels.',
    category: 'communication',
    status: 'live',
    setupTime: '2 minutes',
    popularity: 88,
    rating: 4.5,
    reviews: 3421,
    icon: 'MessageCircle',
    color: 'from-purple-500 to-purple-600',
    features: ['Channel sharing', 'Real-time preview', 'Comment threads'],
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
    id: 'jira',
    name: 'Jira',
    description: 'Link diagrams to Jira issues and project workflows.',
    category: 'project-management',
    status: 'live',
    setupTime: '5 minutes',
    popularity: 87,
    rating: 4.6,
    reviews: 2341,
    icon: 'Settings',
    color: 'from-blue-600 to-indigo-600',
    features: ['Issue linking', 'Workflow diagrams', 'Project visualization'],
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
    id: 'github',
    name: 'GitHub',
    description: 'Document code architecture and system designs in GitHub repositories.',
    category: 'development',
    status: 'live',
    setupTime: '6 minutes',
    popularity: 90,
    rating: 4.7,
    reviews: 1876,
    icon: 'GitBranch',
    color: 'from-gray-700 to-gray-800',
    features: ['Repository integration', 'Architecture docs', 'Version control'],
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
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Visualize sales processes and customer journeys within Salesforce.',
    category: 'enterprise',
    status: 'live',
    setupTime: '8 minutes',
    popularity: 86,
    rating: 4.5,
    reviews: 2341,
    icon: 'TrendingUp',
    color: 'from-cyan-500 to-cyan-600',
    features: ['Process mapping', 'Customer journey visualization', 'Sales pipeline'],
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
  }
];

const iconMap = {
  FileText,
  MessageCircle,
  Settings,
  GitBranch,
  TrendingUp: TrendingUpIcon,
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

export default function ServiceIntegrationDetailPage() {
  const { integrationId } = useParams();
  const navigate = useNavigate();
  const integration = integrations.find(i => i.id === integrationId);

  if (!integration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Integration Not Found</h2>
          <p className="mb-4">Sorry, we couldn't find that integration.</p>
          <button onClick={() => navigate('/service-integrations')} className="text-blue-600 underline">Back to Integrations</button>
        </div>
      </div>
    );
  }
  const Icon = iconMap[integration.icon] || FileText;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/10 py-10 px-2">
      <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900`}
          >
            <Icon className="w-12 h-12 md:w-14 md:h-14 text-white drop-shadow-lg" />
          </motion.div>
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2"
            >
              {integration.name}
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center justify-center md:justify-start space-x-2 mb-2"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{integration.rating} ({integration.reviews} reviews)</span>
            </motion.div>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-lg text-gray-700 dark:text-gray-300 mb-2"
            >
              {integration.description}
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {integration.features.map((feature, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: '#6366f1', color: '#fff' }}
                  className="text-xs bg-indigo-100 dark:bg-indigo-800/40 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full font-semibold shadow-sm cursor-pointer transition-all duration-200"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Setup Stepper */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to set up</h2>
          <ol className="relative border-l-2 border-indigo-200 dark:border-indigo-700 ml-4">
            {integration.setupSteps && integration.setupSteps.map((step, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5, type: 'spring' }}
                className="mb-6 ml-6 flex items-start"
              >
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full font-bold shadow-lg border-2 border-white dark:border-gray-900">
                  {idx + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-base">{step}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Animated Benefits Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integration.benefits && integration.benefits.map((benefit, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.04, backgroundColor: '#f1f5f9' }}
                className="flex items-center space-x-3 bg-white/70 dark:bg-gray-800/60 rounded-xl p-4 shadow-sm border border-indigo-100 dark:border-indigo-800 transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Setup/Meta Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span>{integration.setupTime} setup</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span>{integration.popularity}% popular</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>{integration.status}</span>
          </div>
        </motion.div>

        {/* Get Started Button */}
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: '0 0 16px #6366f1' }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg mb-2 tracking-wide"
          onClick={() => navigate('/signup')}
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }}
          className="block w-full text-center text-blue-600 underline mt-2 text-base"
          onClick={() => navigate('/service-integrations')}
        >
          Back to Integrations
        </motion.button>
      </div>
    </div>
  );
} 