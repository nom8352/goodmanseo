import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIBusiness from './pages/AIBusiness';
import WebPricing from './pages/WebPricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AICourse from './pages/AICourse';
import AIReport from './pages/AIReport';
import AIReportEnglish from './pages/AIReportEnglish';
import AIReportSample from './pages/AIReportSample';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

const AppShell = () => {
  const { pathname } = useLocation();
  const locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ko';

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar locale={locale} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home locale="en" />} />
            <Route path="/starter-package" element={<Navigate to="/pricing" replace />} />
            <Route path="/ai-business" element={<AIBusiness />} />
            <Route path="/pricing" element={<WebPricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogDetail />} />
            <Route path="/ai-course" element={<AICourse />} />
            <Route path="/ai-report" element={<AIReport />} />
            <Route path="/en/ai-report" element={<AIReportEnglish />} />
            <Route path="/ai-report/sample-luna-skin-clinic" element={<AIReportSample />} />
            <Route path="/ai-report/:sampleSlug" element={<AIReportSample />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/en/contact" element={<Contact locale="en" />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer locale={locale} />
      </div>
    </>
  );
};

export default App;
