import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, ChevronDown, Star, Users, Zap, Shield, Globe, Crown, Sparkles, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const PricingPage = () => {
  const [showFullComparison, setShowFullComparison] = useState(false);
  const [activeTab, setActiveTab] = useState('acroz');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const navigate = useNavigate();


  const pricingPlans = [
    {
      name: 'Free',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      originalPrice: null,
      period: '',
      description: 'Perfect for getting started',
      products: ['ACROZ.AI'],
      buttonText: 'Start free',
      buttonStyle: 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      popular: false,
      badge: null,
      features: [
        '3 editable ACROZ.AI documents',
        '60 shapes per ACROZ.AI document',
        '100 templates',
        'Basic Visual Activities',
        'Basic data linking',
        'Presentation mode',
        'Commenting',
        'Learning center'
      ],
      note: 'No credit card required',
      gradient: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
      iconColor: 'text-gray-600 dark:text-gray-400'
    },
    {
      name: 'Individual',
      price: billingCycle === 'monthly' ? '$9' : '$7.95',
      originalPrice: billingCycle === 'monthly' ? null : '$9',
      period: '/month',
      description: 'For individual professionals',
      products: ['ACROZ.AI'],
      buttonText: 'Buy now',
      buttonStyle: 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20',
      popular: false,
      badge: null,
      features: [
        'Everything on Free, plus:',
        'Unlimited editable documents',
        'Unlimited objects per document',
        'Premium Visual Activities',
        '1 GB of storage',
        'Visio import and export',
        'Premium shape libraries',
        'Premium templates'
      ],
      gradient: 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      name: 'Team',
      price: billingCycle === 'monthly' ? '$10' : '$8.95',
      originalPrice: billingCycle === 'monthly' ? null : '$10',
      period: '/user/month',
      description: 'Best for collaboration',
      products: ['ACROZ.AI'],
      buttonText: 'Start free trial',
      buttonStyle: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl',
      popular: false,
      badge: null,
      features: [
        'Everything on Individual, plus:',
        'Developer platform',
        'Visual Activities advanced controls',
        'Revision history with versioning',
        'Call others to me',
        'Password protected publishing',
        'Microsoft 365, Confluence, Jira, and LeanIX integrations'
      ],
      gradient: 'from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      originalPrice: null,
      period: '',
      description: 'For large organizations',
      products: ['ACROZ.AI'],
      buttonText: 'Contact sales',
      buttonStyle: 'border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
      popular: false,
      badge: null,
      features: [
        'Everything on Team, plus:',
        'Team hubs',
        'Universal canvas',
        'Includes ACROZ.AI for virtual whiteboarding',
        'Customizable document status',
        'SAML authentication',
        'Enforceable sharing restrictions',
        'Advanced data and automation',
        'Salesforce integration',
        'Enterprise templates',
        'Enterprise Shield add-on',
        'Agile Accelerator',
        'Cloud Accelerator'
      ],
      gradient: 'from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    }
  ];

  const companyLogos = [
    { name: 'Amazon', color: 'text-orange-500' },
    { name: 'Google', color: 'text-blue-500' },
    { name: 'HP', color: 'text-blue-600' },
    { name: 'Atlassian', color: 'text-blue-600' },
    { name: 'Stripe', color: 'text-purple-600' },
    { name: 'Asana', color: 'text-red-500' },
    { name: 'Shopify', color: 'text-green-600' },
    { name: 'Delta', color: 'text-red-600' },
    { name: 'NASA', color: 'text-blue-700' },
    { name: 'CVS Health', color: 'text-red-600' },
    { name: 'US Foods', color: 'text-green-600' },
    { name: 'Caterpillar', color: 'text-yellow-600' },
    { name: 'Glassdoor', color: 'text-green-600' },
    { name: 'Beyond Meat', color: 'text-green-600' }
  ];

  const faqs = [
    {
      question: 'Do I have to pay to use ACROZ.AI?',
      answer: 'No, we offer a free version of ACROZ.AI that gives you access to basic features, including three editable documents, up to 60 shapes per document, and 100 professional templates. To take full advantage of ACROZ.AI\'s intelligent diagramming features, start a free trial with an Individual or Team license.'
    },
    {
      question: 'How long is the free trial and what happens when it ends?',
      answer: 'An ACROZ.AI free trial lasts seven days. During the trial, you will have access to all premium ACROZ.AI features. You will need to add payment information at the time of sign up, but you will not be charged until the trial ends. Once your trial period is over, you can continue using ACROZ.AI and will be billed automatically unless you choose to cancel.'
    },
    {
      question: 'How do paid plans work?',
      answer: 'Paid plans unlock access to premium features that are not available on our free plans, including unlimited shapes, unlimited documents, and access to over 1,000 premium templates. You can choose to pay monthly or save and pay annually. Cancel anytime and you\'ll still have access for the remainder of your billing period.'
    },
    {
      question: 'What is the difference between ACROZ.AI Individual and Team licenses?',
      answer: 'Individual licenses work well for smaller projects that require minimal collaboration, while Team licenses are better suited for groups that need to collaborate quickly and deliver feedback in real time. Team licenses include all the same great features an Individual plan offers, but with additional features such as commenting, revision history with versioning, and integrations with Confluence, Jira, and more.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'ACROZ.AI has transformed how our team visualizes complex processes. The collaboration features are game-changing.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Lead',
      company: 'StartupXYZ',
      content: 'The AI features save us hours of work every week. Best investment we\'ve made for our documentation.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'GlobalCorp',
      content: 'Enterprise features and security give us peace of mind while enabling seamless collaboration.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const handlePlanAction = (plan) => {
    if (plan.name === 'Enterprise') {
      navigate('/contact-sales');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
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
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
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
            className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-xl"
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
            {/* Logo with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center space-x-3"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
              </motion.div>
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                ACROZ.AI
              </span>
            </motion.div>

            {/* Main Heading with Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Choose the perfect plan
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">
                  for your team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Start free and scale as you grow. Unlock powerful features with flexible pricing designed for teams of all sizes.
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-4"
            >
              <span className={`text-lg font-medium transition-colors ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Monthly
              </span>
              <motion.button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-16 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{
                    x: billingCycle === 'monthly' ? 0 : 32
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <div className="flex items-center space-x-2">
                <span className={`text-lg font-medium transition-colors ${billingCycle === 'annual' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  Annual
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: billingCycle === 'annual' ? 1 : 0 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold"
                >
                  Save 20%
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Diagram Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Floating Elements */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-10 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-0 left-1/3 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Shield className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Central Flow */}
              <div className="flex items-center justify-center space-x-8 py-16">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-24 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold">Start</span>
                </motion.div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-gray-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-24 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold">Create</span>
                </motion.div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-gray-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-24 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold">Share</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: plan.popular ? 1.02 : 1.05,
                  y: -10
                }}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 transition-all duration-500 overflow-hidden ${
                  plan.popular 
                    ? 'border-orange-400 dark:border-orange-500 transform scale-105 z-10' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5`} />
                
                {/* Popular Badge */}
                {false && (
                  <motion.div></motion.div>
                )}

                {/* Other Badges */}
                {false && (
                  <div></div>
                )}

                <div className="relative z-10 p-8">
                  {/* Plan Header */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          plan.popular 
                            ? 'bg-gradient-to-br from-orange-400 to-red-500' 
                            : plan.name === 'Enterprise'
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                            : plan.name === 'Individual'
                            ? 'bg-gradient-to-br from-purple-500 to-violet-600'
                            : 'bg-gradient-to-br from-gray-400 to-gray-500'
                        }`}
                      >
                        {plan.name === 'Free' && <Users className="w-6 h-6 text-white" />}
                        {plan.name === 'Individual' && <Zap className="w-6 h-6 text-white" />}
                        {plan.name === 'Team' && <Users className="w-6 h-6 text-white" />}
                        {plan.name === 'Enterprise' && <Shield className="w-6 h-6 text-white" />}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                        )}
                        {plan.period && <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>}
                      </div>
                      {billingCycle === 'annual' && plan.originalPrice && (
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Save ${(parseFloat(plan.originalPrice.replace('$', '')) - parseFloat(plan.price.replace('$', ''))) * 12}/year
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Products included:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {plan.products.map((product, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full"
                          >
                            <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">{product}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.button
                    onClick={() => handlePlanAction(plan)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${plan.buttonStyle} ${
                      plan.popular ? 'transform hover:scale-105' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{plan.buttonText}</span>
                      {plan.popular && <Sparkles className="w-5 h-5" />}
                    </div>
                  </motion.button>

                  {plan.note && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 flex items-center justify-center space-x-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{plan.note}</span>
                    </motion.div>
                  )}

                  {/* Enhanced Features */}
                  <div className="mt-8 space-y-4">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <Star className={`w-4 h-4 ${plan.iconColor}`} />
                      <span>What's included:</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.slice(0, 6).map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start space-x-3"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="mt-0.5"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                      {plan.features.length > 6 && (
                        <li className="text-sm text-gray-500 dark:text-gray-400 italic">
                          +{plan.features.length - 6} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Compare Features Link */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium flex items-center space-x-2 group"
                    >
                      <span>Compare all features</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Feature Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <motion.button
              onClick={() => setShowFullComparison(!showFullComparison)}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>See full feature comparison</span>
              <motion.div
                animate={{ rotate: showFullComparison ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of teams who trust ACROZ.AI to bring their ideas to life
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
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Rating */}
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
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                99% of the Fortune 500
              </span>
            </h2>

            {/* Enhanced Company Logos Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center justify-items-center">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className={`text-2xl md:text-3xl font-bold ${company.color} opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                    {company.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 relative overflow-hidden">
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
            className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
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
                Ready to get started?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join millions of professionals who trust ACROZ.AI to bring their ideas to life
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                onClick={() => setShowSignupPopup(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start free trial</span>
                <Sparkles className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Contact sales
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signup Popup */}

    </div>
  );
};

export default PricingPage;