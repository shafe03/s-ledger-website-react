import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeaturePage from "./components/FeaturePage";
import PricingPage from "./components/PricingPage";
import LearnSupportPage from "./components/LearnSupportPage";
import Footer from "./components/Footer";
import DocsPage from "./components/DocsPage";
import TutorialPage from "./components/TutorialsPage";
import AboutUsPage from "./components/AboutUsPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<FeaturePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="learn-support" element={<LearnSupportPage />} />
        <Route path="tutorials" element={<TutorialPage />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
