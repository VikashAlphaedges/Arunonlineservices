import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetail } from "./pages/ServiceDetail";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Chatbot } from "./components/Chatbot";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-nexus-charcoal text-[#f5f5f5] font-sans selection:bg-nexus-gold selection:text-black overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
