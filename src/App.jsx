import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AIGenerationSection from './components/AIGenerationSection';
import CollaborationSection from './components/CollaborationSection';
import DataInsightsSection from './components/DataInsightsSection';
import UseCasesSection from './components/UseCasesSection';
import IntegrationsSection from './components/IntegrationsSection';
import TemplatesSection from './components/TemplatesSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import DiagramPreview from './components/DiagramPreview';
import Footer from './components/Footer';
import AcrozOverview from './components/AcrozOverview';
import ProcessDocumentationSection from './components/ProcessDocumentationSection';
import PricingPage from './components/PricingPage';
import VisualizingTeamsPage from './components/VisualizingTeamsPage';
import ContactSalesPage from './components/ContactSalesPage';
import EnterprisePage from './components/EnterprisePage';
import BlogPage from './components/BlogPage';
import SignupPage from './components/SignupPage';
import TechnicalDiagramming from './components/TechnicalDiagramming';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import VisualizingInfrastructure from './components/VisualizingInfrastructure';
import AIDiagramming from './components/AIDiagramming';
import InteractiveLearning from './components/InteractiveLearning';
import VisioReplacement from './components/VisioReplacement';
import MoreUseCases from './components/MoreUseCases';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicesPage from './components/TermsOfServicesPage';
import SEOHead from './components/SEOHead';
import ServiceIntegrationsPage from './components/ServiceIntegrationsPage';
import ServiceIntegrationDetailPage from './components/ServiceIntegrationDetailPage';

// Scroll to Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AIGenerationSection />
      <CollaborationSection />
      <DataInsightsSection />
      <UseCasesSection />
      <IntegrationsSection />
      <TemplatesSection />
      <CapabilitiesSection />
      <DiagramPreview />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SEOHead />
        <ScrollToTop />
        <div className="min-h-screen transition-colors duration-500">
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/overview" element={
              <>
                <Header />
                <AcrozOverview />
                <Footer />
              </>
            } />
            <Route path="/process-documentation" element={
              <>
                <Header />
                <ProcessDocumentationSection />
                <Footer />
              </>
            } />
            <Route path="/visualizing-teams" element={
              <>
                <Header />
                <VisualizingTeamsPage />
                <Footer />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Header />
                <BlogPage />
                <Footer />
              </>
            } />
            <Route path="/pricing" element={
              <>
                <Header />
                <PricingPage />
                <Footer />
              </>
            } />
            <Route path="/contact-sales" element={
              <>
                <Header />
                <ContactSalesPage />
                <Footer />
              </>
            } />
            <Route path="/enterprise" element={
              <>
                <Header />
                <EnterprisePage />
                <Footer />
              </>
            } />
            <Route path="/technical-diagramming" element={
              <>
                <Header />
                <TechnicalDiagramming />
                <Footer />
              </>
            } />
            <Route path="/visualizing-infrastructure" element={
              <>
                <Header />
                <VisualizingInfrastructure />
                <Footer />
              </>
            } />
            <Route path="/ai-diagramming" element={
              <>
                <Header />
                <AIDiagramming />
                <Footer />
              </>
            } />
            <Route path="/interactive-learning" element={
              <>
                <Header />
                <InteractiveLearning />
                <Footer />
              </>
            } />
            <Route path="/visio-replacement" element={
              <>
                <Header />
                <VisioReplacement />
                <Footer />
              </>
            } />
            <Route path="/more-use-case" element={
              <>
                <Header />
                <MoreUseCases />
                <Footer />
              </>
            } />
            <Route path="/privacy-policy" element={
              <>
                <Header />
                <PrivacyPolicyPage />
                <Footer />
              </>
            } />
            <Route path="/terms-of-services" element={
              <>
                <Header />
                <TermsOfServicesPage />
                <Footer />
              </>
            } />
            <Route path="/service-integrations" element={
              <>
                <Header />
                <ServiceIntegrationsPage />
                <Footer />
              </>
            } />
            <Route path="/service-integrations/:integrationId" element={
              <>
                <Header />
                <ServiceIntegrationDetailPage />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
