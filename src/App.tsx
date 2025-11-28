import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpHivePage from './pages/HelpHivePage';
import DiaBeatPage from './pages/DiaBeatPage';
import GradPlannerPage from './pages/GradPlannerPage';
import VRCompliancePage from './pages/VRCompliancePage';
import AirbnbPage from './pages/AirbnbPage';
import BlogPodcastPage from './pages/BlogPodcastPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { initGA, trackPageView } from './utils/analytics';

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics on app load
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/helphive" element={<HelpHivePage />} />
          <Route path="/projects/diabeat" element={<DiaBeatPage />} />
          <Route path="/projects/gradplanner" element={<GradPlannerPage />} />
          <Route path="/projects/vr-compliance" element={<VRCompliancePage />} />
          <Route path="/projects/blog-podcast" element={<BlogPodcastPage />} />
          <Route path="/projects/airbnb" element={<AirbnbPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;