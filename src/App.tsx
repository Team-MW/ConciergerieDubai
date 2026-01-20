import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const ActivitesAquatiques = lazy(() => import('./pages/ActivitesAquatiques'));
const DesertTour = lazy(() => import('./pages/DesertTour'));
const ActivitesDiverses = lazy(() => import('./pages/ActivitesDiverses'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/activites-aquatiques" element={<PageWrapper><ActivitesAquatiques /></PageWrapper>} />
        <Route path="/desert-tour" element={<PageWrapper><DesertTour /></PageWrapper>} />
        <Route path="/activites-diverses" element={<PageWrapper><ActivitesDiverses /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/mentions-legales" element={<PageWrapper><MentionsLegales /></PageWrapper>} />
        <Route path="/politique-confidentialite" element={<PageWrapper><PolitiqueConfidentialite /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-white text-primary">Chargement...</div>}>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
