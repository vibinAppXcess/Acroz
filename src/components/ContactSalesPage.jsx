import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  Users, 
  Shield, 
  Zap,
  Globe,
  Star,
  Building,
  Calendar,
  Clock,
  ChevronDown
} from 'lucide-react';

// Country flag components
const USFlag = () => (
  <span className="fi fi-us mr-2"></span>
);

const CNFlag = () => (
  <span className="fi fi-cn mr-2"></span>
);

const FRFlag = () => (
  <span className="fi fi-fr mr-2"></span>
);

const INFlag = () => (
  <span className="fi fi-in mr-2"></span>
);

const GBFlag = () => (
  <span className="fi fi-gb mr-2"></span>
);

const ContactSalesPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States",
    code: "+1",
    placeholder: "201-555-5555",
    flag: <USFlag />
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Country data with flags
  const countries = [
    { name: "United States", code: "+1", placeholder: "201-555-5555", flag: <USFlag /> },
    { name: "China (中国)", code: "+86", placeholder: "", flag: <CNFlag /> },
    { name: "France", code: "+33", placeholder: "", flag: <FRFlag /> },
    { name: "India (HIRA)", code: "+91", placeholder: "", flag: <INFlag /> },
    { name: "United Kingdom", code: "+44", placeholder: "", flag: <GBFlag /> }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(formRef.current);
      
      // Set the country code value before submission
      formData.set('PhoneNumber_countrycodeval', selectedCountry.code);
      
      // Submit to Zoho
      const response = await fetch(formRef.current.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        return; // Exit after successful submission
      }
      
      // If fetch fails, proceed with traditional form submission
      formRef.current.submit();
      
    } catch (error) {
      console.error('Form submission error:', error);
      // Proceed with traditional form submission
      formRef.current.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50/30 to-purple-50/30 dark:from-green-900/10 dark:via-blue-900/10 dark:to-purple-900/10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Thank you for your interest!
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our sales team will contact you within 24 hours to discuss how ACROZ.AI Enterprise can boost collaboration and productivity across your teams and workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Clock, text: "Response within 24 hours" },
              { icon: Calendar, text: "Custom demo scheduled" },
              { icon: Users, text: "Dedicated account manager" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center space-y-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl"
              >
                <item.icon className="w-8 h-8 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Back to Contact Form
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-4 py-2">
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Enterprise Sales</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
              <span className="text-gray-900 dark:text-white">Contact our</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                sales team
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Submit the form and we'll contact you to discuss how an Enterprise Plan boosts collaboration and productivity across teams and workflows.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Illustration Container */}
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Background Geometric Shapes */}
                <div className="absolute inset-0">
                  {/* Blue geometric shapes */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg transform rotate-45"
                  />
                  <motion.div
                    animate={{ 
                      rotate: [360, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 25, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-lg"
                  />
                  
                  {/* Large blue triangle */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-45 translate-x-32 translate-y-32"
                    />
                  </div>
                </div>

                {/* Character Illustration */}
                <div className="relative z-10 flex items-center justify-center h-96">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                  >
                    {/* Person sitting on chair */}
                    <div className="relative">
                      {/* Chair */}
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                      >
                        {/* Chair base */}
                        <div className="w-16 h-2 bg-gray-400 rounded-full mb-2"></div>
                        {/* Chair legs */}
                        <div className="flex justify-center space-x-8">
                          <div className="w-1 h-16 bg-gray-500"></div>
                          <div className="w-1 h-16 bg-gray-500"></div>
                          <div className="w-1 h-16 bg-gray-500"></div>
                          <div className="w-1 h-16 bg-gray-500"></div>
                        </div>
                      </motion.div>

                      {/* Person */}
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        {/* Body */}
                        <div className="w-24 h-32 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-3xl mx-auto relative">
                          {/* Head */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full">
                            {/* Glasses */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-6 border-2 border-gray-800 rounded-lg bg-white/20">
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white/30 rounded-full"></div>
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white/30 rounded-full"></div>
                            </div>
                            {/* Hair */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-14 h-8 bg-gray-900 rounded-t-full"></div>
                          </div>
                          
                          {/* Arms */}
                          <div className="absolute top-8 -left-6 w-6 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full transform -rotate-12"></div>
                          <div className="absolute top-8 -right-6 w-6 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full transform rotate-12"></div>
                          
                          {/* Laptop */}
                          <motion.div
                            animate={{ rotateX: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-600 rounded-lg"
                          >
                            <div className="w-full h-6 bg-gray-300 rounded-t-lg"></div>
                            <div className="w-full h-4 bg-gray-800 rounded-b-lg"></div>
                          </motion.div>
                        </div>
                        
                        {/* Legs */}
                        <div className="flex justify-center space-x-4 mt-2">
                          <div className="w-4 h-20 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                          <div className="w-4 h-20 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                        </div>
                        
                        {/* Shoes */}
                        <div className="flex justify-center space-x-6 mt-1">
                          <div className="w-8 h-4 bg-gray-900 rounded-full"></div>
                          <div className="w-8 h-4 bg-gray-900 rounded-full"></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
                className="absolute -top-4 -right-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float"
              >
                <MessageCircle className="w-8 h-8 text-blue-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: '2s' }}
              >
                <Mail className="w-8 h-8 text-indigo-500" />
              </motion.div>
            </motion.div>

            {/* Right Side - Zoho Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl">
                <form 
                  ref={formRef}
                  action="https://forms.zohopublic.in/adzday1/form/architectcontactform1/formperma/q79RCkENNWJsqFWKBpxZTVHeY2OfXXgn-Frx8jNydVo/htmlRecords/submit"
                  method="POST"
                  acceptCharset="UTF-8"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="zf_referrer_name" defaultValue="" />
                  <input type="hidden" name="zf_redirect_url" defaultValue="" />
                  <input type="hidden" name="zc_gad" defaultValue="" />
                  <input type="hidden" name="PhoneNumber_countrycodeval" value={selectedCountry.code} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Name_First" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="Name_First"
                        name="Name_First"
                        defaultValue=""
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="Name_Last" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="Name_Last"
                        name="Name_Last"
                        defaultValue=""
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Company Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="PhoneNumber_countrycode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <div className="flex items-center">
                          {selectedCountry.flag}
                          <span className="text-gray-500">{selectedCountry.code}</span>
                        </div>
                      </div>
                      <input
                        type="tel"
                        id="PhoneNumber_countrycode"
                        name="PhoneNumber_countrycode"
                        defaultValue=""
                        required
                        className="w-full pl-20 pr-10 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={selectedCountry.placeholder}
                      />
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                    {showCountryDropdown && (
                      <div className="mt-1 w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden z-10">
                        {countries.map((country) => (
                          <div
                            key={country.code}
                            className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${selectedCountry.code === country.code ? 'bg-blue-50 dark:bg-blue-900/30' : ''}`}
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryDropdown(false);
                            }}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                {country.flag}
                                <span>{country.name}</span>
                              </div>
                              <span className="text-gray-500">{country.code}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="MultiLine" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="MultiLine"
                      name="MultiLine"
                      defaultValue=""
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                      privacy policy
                    </a>{' '}
                    and agree to receive emails about our products and services.
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Why choose ACROZ.AI Enterprise?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get the advanced features, security, and support your organization needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Dedicated Account Manager",
                description: "Get personalized support from a dedicated enterprise specialist"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Advanced security features including SSO, SAML, and audit logs"
              },
              {
                icon: Zap,
                title: "Priority Support",
                description: "24/7 priority support with guaranteed response times"
              },
              {
                icon: Building,
                title: "Custom Deployment",
                description: "Flexible deployment options including on-premise solutions"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Trusted by enterprise teams
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'IT Director',
                company: 'TechCorp',
                content: 'ACROZ.AI Enterprise has transformed how our 500+ person team collaborates on complex projects.',
                rating: 5,
                avatar: 'SJ'
              },
              {
                name: 'Michael Chen',
                role: 'VP of Engineering',
                company: 'StartupXYZ',
                content: 'The enterprise features and security controls give us complete confidence in our data.',
                rating: 5,
                avatar: 'MC'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8"
              >
                <div className="space-y-6">
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
                  
                  <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-blue-800 dark:to-indigo-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to transform your team's collaboration?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands of enterprise teams who trust ACROZ.AI to visualize their success
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate('/signup')}
              >
                Start free trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Schedule a demo</span>
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSalesPage;