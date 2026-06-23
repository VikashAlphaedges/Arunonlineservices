import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { servicesData } from "../data/services";
import { ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState(servicesData.find((s) => s.id === id));
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching delay for skeleton loading state
    setIsLoading(true);
    const timer = setTimeout(() => {
      setService(servicesData.find((s) => s.id === id));
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen bg-nexus-charcoal px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-20 animate-pulse">
           {/* Back link skeleton */}
           <div className="w-32 h-4 bg-white/10 rounded-sm mb-12 mx-auto"></div>
           
           {/* Hero section skeleton */}
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-white/10 rounded-xl mb-8"></div>
             <div className="w-[80%] max-w-2xl h-12 bg-white/10 rounded-sm mb-6"></div>
             <div className="w-[60%] max-w-xl h-6 bg-white/10 rounded-sm mb-2"></div>
             <div className="w-[40%] max-w-md h-6 bg-white/10 rounded-sm"></div>
           </div>

           {/* Content skeleton */}
           <div className="mt-24 max-w-4xl mx-auto space-y-6">
             <div className="w-full h-4 bg-white/5 rounded-sm"></div>
             <div className="w-full h-4 bg-white/5 rounded-sm"></div>
             <div className="w-[90%] h-4 bg-white/5 rounded-sm"></div>
             <div className="w-[80%] h-4 bg-white/5 rounded-sm"></div>
             
             <div className="h-8 w-1/3 bg-white/10 rounded-sm mt-12 mb-8"></div>
             <div className="w-full h-4 bg-white/5 rounded-sm"></div>
             <div className="w-[85%] h-4 bg-white/5 rounded-sm"></div>
             <div className="w-[75%] h-4 bg-white/5 rounded-sm"></div>
             
             {/* Table skeleton */}
             <div className="mt-16 w-full h-64 bg-white/5 rounded-xl border border-white/10"></div>
           </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center">
        <Helmet>
          <title>Service Not Found | Arun Online Services</title>
        </Helmet>
        <h1 className="text-4xl font-serif text-white mb-4">Service Not Found</h1>
        <Link to="/services" className="text-nexus-gold hover:underline uppercase tracking-widest text-[11px]">
          Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-nexus-charcoal">
      <Helmet>
        <title>{service.title} | Arun Online Services Coimbatore</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://arunonlineservices.in/services/${service.id}`} />
      </Helmet>
      {/* Detail Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1e293b]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 to-nexus-charcoal z-0" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Link to="/services" className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-nexus-gold transition-colors mb-8 text-[11px] uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-nexus-charcoal border border-nexus-gold/30 rounded-xl flex items-center justify-center text-nexus-gold mb-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
              {service.title}
            </h1>
            <h2 className="text-xl md:text-3xl text-white/90 font-serif font-light leading-relaxed max-w-4xl mx-auto">
              {service.detail.subtitle}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* Intro / Overview (No hardcoded title) */}
            {service.detail.overview && (
              <div>
                <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line" dangerouslySetInnerHTML={{__html: service.detail.overview.replace(/arunonlineservices/g, '<span class="text-nexus-gold font-mono uppercase tracking-widest text-[#00b4d8] drop-shadow-sm font-bold text-[12px]">arunonlineservices</span>')}}></p>
              </div>
            )}

            {/* Render dynamic sections if present */}
            {service.detail.sections && service.detail.sections.length > 0 && (
              <div className="space-y-16">
                {service.detail.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl md:text-3xl font-serif text-nexus-gold mb-6 border-b border-white/10 pb-4">{section.title}</h3>
                    <div className="text-white/80 leading-relaxed text-lg whitespace-pre-line space-y-4">
                      {typeof section.content === 'string' ? (
                        <p dangerouslySetInnerHTML={{__html: section.content.replace(/arunonlineservices/g, '<span class="text-nexus-gold font-mono uppercase tracking-widest text-[#00b4d8] drop-shadow-sm font-bold text-[12px]">arunonlineservices</span>')}}></p>
                      ) : section.content}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Table Data */}
            {service.detail.tableData && (
              <div className="mt-12 overflow-x-auto shadow-2xl rounded-xl border border-white/10">
                <table className="w-full text-left text-white/80">
                  <thead className="text-[11px] uppercase bg-[#0f172a] text-nexus-gold tracking-widest">
                    <tr>
                      {service.detail.tableData.headers.map((header, idx) => (
                        <th key={idx} scope="col" className="px-6 py-5 border-b border-white/10 whitespace-nowrap">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-[#1e293b]">
                    {service.detail.tableData.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors last:border-0">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-6 py-5 whitespace-pre-line">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* FAQs */}
            {service.detail.faqs && service.detail.faqs.length > 0 && (
              <div className="pt-8 mt-16">
                <h3 className="text-2xl md:text-3xl font-serif text-nexus-gold mb-8 text-center">
                  Frequently Asked Questions (FAQs) About {service.title}
                </h3>
                <div className="space-y-4">
                  {service.detail.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-[#1e293b] border border-white/10 rounded-xl overflow-hidden shadow-lg">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full px-8 py-6 text-left flex items-start justify-between hover:bg-white/5 transition-colors"
                      >
                        <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                        <ChevronDown size={24} className={`text-nexus-gold shrink-0 mt-1 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-6 text-white/70 text-base leading-relaxed" dangerouslySetInnerHTML={{__html: typeof faq.answer === 'string' ? faq.answer.replace(/arunonlineservices/g, '<span class="text-nexus-gold font-mono uppercase tracking-widest text-[#00b4d8] drop-shadow-sm font-bold text-[11px]">arunonlineservices</span>') : faq.answer}}>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features & Process (Legacy for other services) */}
      {((service.detail.features && service.detail.features.length > 0) || (service.detail.process && service.detail.process.length > 0)) && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Key Deliverables */}
            {service.detail.features && service.detail.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8 border-b border-white/10 pb-4">Key Deliverables</h3>
                <ul className="space-y-6">
                  {service.detail.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="text-nexus-gold w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-white/80 tracking-wide text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Execution Strategy */}
            {service.detail.process && service.detail.process.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8 border-b border-white/10 pb-4">Execution Strategy</h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-nexus-gold/30 before:to-transparent">
                  {service.detail.process.map((step, idx) => (
                    <div key={idx} className="relative flex items-start flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-nexus-gold bg-[#0f172a] border border-nexus-gold/50 w-6 h-6 rounded-full flex items-center justify-center z-10 shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-white uppercase tracking-wider text-xs font-bold">{step.step}</h4>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed pl-10">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}
      
      {/* Call to Action */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif text-white mb-6">Ready to secure your intent?</h2>
          <p className="text-white/50 mb-10 text-sm">Consult with our leading experts in {service.title} today.</p>
          <a href="https://wa.me/919791397392" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-nexus-gold text-white font-bold uppercase text-[11px] tracking-widest transition-all inline-block rounded-sm shadow-[0_12px_0_#0077b6] hover:shadow-[0_6px_0_#0077b6] hover:translate-y-[6px] active:shadow-[0_0px_0_#0077b6] active:translate-y-[12px]">
            Book Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
