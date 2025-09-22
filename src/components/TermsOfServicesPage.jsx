import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Gavel, Globe } from 'lucide-react';

const TermsOfServicesPage = () => {
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
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms & Conditions
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
              <Scale className="w-6 h-6 text-blue-600 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to our platform. These Terms and Conditions ("Terms") govern your use of our website, services, and applications (collectively, the "Service").
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              User Responsibilities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As a user of our Service, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Provide accurate and complete information when creating an account</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the integrity or performance of the Service</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Gavel className="w-6 h-6 text-blue-600 mr-3" />
              Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-6 h-6 text-blue-600 mr-3" />
              Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction where our company is established, without regard to its conflict of law provisions.
            </p>
          </motion.div>

          {/* Changes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to These Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions about these Terms, please contact us at:
          </p>
          <a 
            href="mailto:legal@example.com" 
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            legal@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicesPage;