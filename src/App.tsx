import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetail } from "./pages/ServiceDetail";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Chatbot } from "./components/Chatbot";
import { SEO } from "./components/SEO";
import { TopProgressBar } from "./components/TopProgressBar";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-nexus-charcoal text-[#f5f5f5] font-sans selection:bg-nexus-gold selection:text-black overflow-x-hidden flex flex-col">
      <TopProgressBar />
      <SEO />
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
