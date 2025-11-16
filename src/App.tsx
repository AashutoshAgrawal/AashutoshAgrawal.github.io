import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpHivePage from './pages/HelpHivePage';
import DiaBeatPage from './pages/DiaBeatPage';
import GradPlannerPage from './pages/GradPlannerPage';
import VRCompliancePage from './pages/VRCompliancePage';
import AirbnbPage from './pages/AirbnbPage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/helphive" element={<HelpHivePage />} />
          <Route path="/projects/diabeat" element={<DiaBeatPage />} />
          <Route path="/projects/gradplanner" element={<GradPlannerPage />} />
          <Route path="/projects/vr-compliance" element={<VRCompliancePage />} />
          <Route path="/projects/airbnb" element={<AirbnbPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;