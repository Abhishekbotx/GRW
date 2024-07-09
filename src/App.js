import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Application from './components/Application/ApplicationPage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import PrivacyPolicyDashbaord from './components/Privacy Policy/PrivacyPolicyDashbaord';
import TermsAndConditionDashboard from './components/TermsAndCondition/TermsAndConditionDashboard';
import LoginPage from './components/Login/Login';
import { FirebaseProvider } from './context/FirebaseContext';
import SignupPage from './components/Login/Signup';

const App = () => {
  return (
    <FirebaseProvider>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/privacy" element={<PrivacyPolicyDashbaord></PrivacyPolicyDashbaord>} /> 
        <Route path="/tc" element={<TermsAndConditionDashboard></TermsAndConditionDashboard>} /> 
        <Route path="/model-hunt" element={<Application />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
    </FirebaseProvider>
  );
};

export default App;


 