import { motion } from "motion/react";
import { Services } from "../components/Services";
import { Helmet } from "react-helmet-async";

export function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Our Services | Arun Online Services Coimbatore</title>
        <meta name="description" content="Explore our professional services including Real Estate Documentation, Encumbrance Certificates (EC), Agreement Preparation, Marriage Registration, and more." />
        <link rel="canonical" href="https://arunonlineservices.in/services" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 border border-nexus-gold/40 rounded-full text-[10px] uppercase tracking-[0.2em] text-nexus-gold mb-6">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">
            Comprehensive <span className="italic text-nexus-gold">Legal Portfolios.</span>
          </h1>
          <div className="w-12 h-[1px] bg-nexus-gold mb-8"></div>
        </motion.div>
      </div>
      <Services />
    </div>
  );
}
