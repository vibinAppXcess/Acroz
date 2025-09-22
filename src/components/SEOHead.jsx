import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = () => {
  const location = useLocation();

  // SEO data for different pages
  const seoData = {
    '/': {
      title: 'ACROZ.AI - Intelligent Diagramming Platform',
      description: 'Create, collaborate, and visualize diagrams with AI-powered intelligence. Professional diagramming platform for teams, technical architecture, infrastructure mapping, and process documentation.',
      keywords: 'diagramming, AI diagramming, technical diagrams, infrastructure mapping, team visualization, process documentation, collaboration, Visio alternative',
      ogImage: 'https://ACROZ.AI/og-image.jpg',
      twitterImage: 'https://ACROZ.AI/twitter-image.jpg'
    },
    '/overview': {
      title: 'Product Overview - ACROZ.AI Intelligent Diagramming Platform',
      description: 'Discover how ACROZ.AI revolutionizes diagramming with AI-powered features, real-time collaboration, and professional templates for technical and business diagrams.',
      keywords: 'diagramming platform, AI diagramming, collaboration tools, technical diagrams, business diagrams, ACROZ.AI overview',
      ogImage: 'https://ACROZ.AI/overview-og.jpg',
      twitterImage: 'https://ACROZ.AI/overview-twitter.jpg'
    },
    '/process-documentation': {
      title: 'Process Documentation - Create Professional Workflow Diagrams | ACROZ.AI',
      description: 'Streamline your process documentation with intelligent workflow diagrams. Create, edit, and share process maps with AI assistance and real-time collaboration.',
      keywords: 'process documentation, workflow diagrams, process mapping, business processes, flowchart, BPMN, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/process-doc-og.jpg',
      twitterImage: 'https://ACROZ.AI/process-doc-twitter.jpg'
    },
    '/visualizing-teams': {
      title: 'Team Visualization - Create Organizational Charts & Team Diagrams | ACROZ.AI',
      description: 'Visualize your team structure with intelligent organizational charts. Create clear team hierarchies, role mappings, and collaboration diagrams with AI assistance.',
      keywords: 'team visualization, organizational chart, org chart, team structure, hierarchy diagram, team mapping, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/teams-og.jpg',
      twitterImage: 'https://ACROZ.AI/teams-twitter.jpg'
    },
    '/technical-diagramming': {
      title: 'Technical Diagramming - Architecture & System Diagrams | ACROZ.AI',
      description: 'Create professional technical diagrams including system architecture, network diagrams, database schemas, and software design with AI-powered assistance.',
      keywords: 'technical diagramming, system architecture, network diagrams, database schema, software design, UML, ERD, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/technical-og.jpg',
      twitterImage: 'https://ACROZ.AI/technical-twitter.jpg'
    },
    '/visualizing-infrastructure': {
      title: 'Infrastructure Visualization - Network & Cloud Architecture Diagrams | ACROZ.AI',
      description: 'Map your infrastructure with detailed network diagrams, cloud architecture, and system topology. Create comprehensive infrastructure documentation with AI assistance.',
      keywords: 'infrastructure visualization, network diagrams, cloud architecture, system topology, infrastructure mapping, AWS, Azure, GCP, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/infrastructure-og.jpg',
      twitterImage: 'https://ACROZ.AI/infrastructure-twitter.jpg'
    },
    '/ai-diagramming': {
      title: 'AI-Powered Diagramming - Intelligent Diagram Creation | ACROZ.AI',
      description: 'Leverage AI to create diagrams faster and smarter. Generate diagrams from text descriptions, auto-layout components, and get intelligent suggestions for your visualizations.',
      keywords: 'AI diagramming, intelligent diagram creation, auto-layout, diagram generation, AI assistance, smart diagrams, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/ai-diagramming-og.jpg',
      twitterImage: 'https://ACROZ.AI/ai-diagramming-twitter.jpg'
    },
    '/interactive-learning': {
      title: 'Interactive Learning - Educational Diagrams & Training Materials | ACROZ.AI',
      description: 'Create engaging educational diagrams and interactive learning materials. Perfect for training, tutorials, and educational content with collaborative features.',
      keywords: 'interactive learning, educational diagrams, training materials, tutorial creation, learning visualization, educational content, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/learning-og.jpg',
      twitterImage: 'https://ACROZ.AI/learning-twitter.jpg'
    },
    '/visio-replacement': {
      title: 'Visio Alternative - Professional Diagramming Platform | ACROZ.AI',
      description: 'Replace Microsoft Visio with a modern, AI-powered diagramming platform. Create professional diagrams with better collaboration, cloud storage, and intelligent features.',
      keywords: 'Visio alternative, Microsoft Visio replacement, professional diagramming, cloud-based diagrams, collaboration tools, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/visio-replacement-og.jpg',
      twitterImage: 'https://ACROZ.AI/visio-replacement-twitter.jpg'
    },
    '/more-use-case': {
      title: 'More Use Cases - Diagramming Solutions for Every Need | ACROZ.AI',
      description: 'Explore additional use cases for ACROZ.AI diagramming platform. From mind mapping to project planning, discover how our tools can enhance your workflow.',
      keywords: 'diagramming use cases, mind mapping, project planning, brainstorming, visual thinking, diagram applications, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/use-cases-og.jpg',
      twitterImage: 'https://ACROZ.AI/use-cases-twitter.jpg'
    },
    '/pricing': {
      title: 'Pricing Plans - Choose Your ACROZ.AI Plan | ACROZ.AI',
      description: 'Explore ACROZ.AI pricing plans designed for individuals, teams, and enterprises. Start free or upgrade to unlock advanced features and collaboration tools.',
      keywords: 'ACROZ.AI pricing, diagramming software pricing, team collaboration pricing, enterprise diagramming, subscription plans, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/pricing-og.jpg',
      twitterImage: 'https://ACROZ.AI/pricing-twitter.jpg'
    },
    '/enterprise': {
      title: 'Enterprise Solutions - Scalable Diagramming for Large Organizations | ACROZ.AI',
      description: 'Enterprise-grade diagramming solutions with advanced security, SSO integration, custom branding, and dedicated support for large organizations.',
      keywords: 'enterprise diagramming, large organization solutions, SSO integration, custom branding, enterprise security, dedicated support, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/enterprise-og.jpg',
      twitterImage: 'https://ACROZ.AI/enterprise-twitter.jpg'
    },
    '/contact-sales': {
      title: 'Contact Sales - Get in Touch with ACROZ.AI Team | ACROZ.AI',
      description: 'Contact our sales team to learn more about ACROZ.AI enterprise solutions, custom implementations, and how we can help your organization.',
      keywords: 'contact sales, enterprise sales, custom implementation, sales inquiry, ACROZ.AI sales team, diagramming consultation',
      ogImage: 'https://ACROZ.AI/contact-sales-og.jpg',
      twitterImage: 'https://ACROZ.AI/contact-sales-twitter.jpg'
    },
    '/blog': {
      title: 'Blog - Latest Insights on Diagramming & Collaboration | ACROZ.AI',
      description: 'Stay updated with the latest insights on diagramming, collaboration, AI in visual communication, and tips for creating better diagrams with ACROZ.AI.',
      keywords: 'diagramming blog, collaboration insights, AI visual communication, diagram tips, visual thinking, ACROZ.AI blog',
      ogImage: 'https://ACROZ.AI/blog-og.jpg',
      twitterImage: 'https://ACROZ.AI/blog-twitter.jpg'
    },
    '/signup': {
      title: 'Sign Up - Start Creating Diagrams with ACROZ.AI | ACROZ.AI',
      description: 'Join thousands of users creating professional diagrams with ACROZ.AI. Sign up for free and start building your first diagram in minutes.',
      keywords: 'sign up, create account, free diagramming, start diagramming, ACROZ.AI registration, diagram creation',
      ogImage: 'https://ACROZ.AI/signup-og.jpg',
      twitterImage: 'https://ACROZ.AI/signup-twitter.jpg'
    },
    '/privacy-policy': {
      title: 'Privacy Policy - How ACROZ.AI Protects Your Data | ACROZ.AI',
      description: 'Learn how ACROZ.AI protects your privacy and handles your data. Our comprehensive privacy policy ensures your information is secure and confidential.',
      keywords: 'privacy policy, data protection, user privacy, GDPR compliance, data security, ACROZ.AI privacy',
      ogImage: 'https://ACROZ.AI/privacy-og.jpg',
      twitterImage: 'https://ACROZ.AI/privacy-twitter.jpg'
    },
    '/terms-of-services': {
      title: 'Terms of Service - ACROZ.AI Usage Terms | ACROZ.AI',
      description: 'Read ACROZ.AI terms of service to understand your rights and responsibilities when using our diagramming platform and services.',
      keywords: 'terms of service, usage terms, service agreement, user rights, ACROZ.AI terms, platform usage',
      ogImage: 'https://ACROZ.AI/terms-og.jpg',
      twitterImage: 'https://ACROZ.AI/terms-twitter.jpg'
    },
    '/service-integrations': {
      title: 'Service Integrations - Connect ACROZ.AI with Your Favorite Tools | ACROZ.AI',
      description: 'Integrate ACROZ.AI with 50+ popular applications including Confluence, Slack, Jira, GitHub, Salesforce and more. Streamline your workflow with powerful integrations.',
      keywords: 'service integrations, app integrations, Confluence integration, Slack integration, Jira integration, GitHub integration, Salesforce integration, workflow automation, ACROZ.AI',
      ogImage: 'https://ACROZ.AI/service-integrations-og.jpg',
      twitterImage: 'https://ACROZ.AI/service-integrations-twitter.jpg'
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const pageData = seoData[currentPath] || seoData['/'];

    // Update document title
    document.title = pageData.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageData.description;

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = pageData.keywords;

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = pageData.title;

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = pageData.description;

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = pageData.ogImage;

    // Update Twitter Card tags
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('property', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.content = pageData.title;

    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('property', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.content = pageData.description;

    let twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('property', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.content = pageData.twitterImage;

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://ACROZ.AI${currentPath}`;

  }, [location.pathname]);

  return null;
};

export default SEOHead; 