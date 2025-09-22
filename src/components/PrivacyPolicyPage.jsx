import { motion } from 'framer-motion';
import { Shield, Lock, Database, Cookie, EyeOff, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your privacy matters at ACROZ.AI. This Privacy Policy explains how Acroz Technologies ("we," "us," or "our") collects, uses, and protects your information when you use our AI-powered diagramming and collaboration platform, including all features and integrations.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By using ACROZ.AI, you consent to the practices described in this policy.
            </p>
          </motion.div>

          {/* Information Collection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="w-6 h-6 text-blue-600 mr-3" />
              Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We collect information to provide, improve, and secure ACROZ.AI. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Account Data:</strong> Name, email, password, and profile details you provide when signing up or using integrations.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use ACROZ.AI, including diagrams created, features used, device/browser info, and IP address.
              </li>
              <li>
                <strong>Integration Data:</strong> Data shared with third-party services (e.g., Google, Microsoft, Slack) when you connect integrations.
              </li>
              <li>
                <strong>Cookies & Analytics:</strong> We use cookies and analytics tools to understand usage and improve our Service.
              </li>
            </ul>
          </motion.div>

          {/* Use of Data */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 text-blue-600 mr-3" />
              How We Use Your Data
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Provide and operate ACROZ.AI and its integrations</li>
              <li>Personalize your experience and improve our features</li>
              <li>Communicate with you about updates, support, and offers</li>
              <li>Analyze usage to enhance security and performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <EyeOff className="w-6 h-6 text-blue-600 mr-3" />
              Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use industry-standard security measures to protect your data, including encryption, access controls, and regular audits. However, no system is 100% secure, so we encourage you to use strong passwords and protect your account.
            </p>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Cookie className="w-6 h-6 text-blue-600 mr-3" />
              Cookies & Tracking
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ACROZ.AI uses cookies and similar technologies to remember your preferences, keep you signed in, and analyze usage. You can control cookies through your browser settings, but disabling them may affect your experience.
            </p>
          </motion.div>

          {/* Changes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update this Privacy Policy to reflect changes in our Service, technology, or legal requirements. Updates will be posted on this page. Continued use of ACROZ.AI after changes means you accept the new policy.
            </p>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            For privacy questions, contact us at:
          </p>
          <a 
            href="mailto:privacy@ACROZ.AI" 
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            privacy@ACROZ.AI
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;