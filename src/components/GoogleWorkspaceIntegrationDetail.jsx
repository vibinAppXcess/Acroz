import { motion } from 'framer-motion';
import { Database, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const integration = {
  name: 'Google Workspace',
  description: 'Add diagrams to Google Docs, Sheets, and Slides with real-time collaboration.',
  setupTime: '3 minutes',
  popularity: 92,
  icon: Database,
  color: 'from-red-500 to-red-600',
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
};

export default function GoogleWorkspaceIntegrationDetail() {
  const navigate = useNavigate();
  const Icon = integration.icon;
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/10 py-10 px-2">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2"
          >
            {integration.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-2"
          >
            {integration.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {integration.features.map((feature, idx) => (
              <span
                key={idx}
                className="text-xs bg-red-100 dark:bg-red-800/40 text-red-700 dark:text-red-200 px-3 py-1 rounded-full font-semibold shadow-sm"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Setup Steps & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white/70 dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Setup Guide</h2>
          <ol className="space-y-4 list-decimal list-inside">
            {integration.setupSteps.map((step, idx) => (
              <li key={idx} className="text-gray-700 dark:text-gray-300 text-base">
                {step}
              </li>
            ))}
          </ol>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/70 dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Benefits</h2>
          <ul className="space-y-3">
            {integration.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Meta Info & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4 mb-8"
      >
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span>{integration.setupTime} setup</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
          <TrendingUp className="w-4 h-4" />
          <span>{integration.popularity}% popular</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Live</span>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
        onClick={() => navigate('/signup')}
      >
        Get Started with Google Workspace
      </motion.button>
    </div>
  );
} 