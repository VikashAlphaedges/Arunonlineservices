import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { homeFaqs } from "../data/homeFaqs";

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center text-left">
        <h3 className="font-serif text-lg md:text-xl text-white pr-4">{question}</h3>
        <ChevronDown className={`text-nexus-gold shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-white/50 leading-relaxed font-sans text-sm md:text-base">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Arun Online Services | Best Real Estate & Document Services in Coimbatore</title>
        <meta name="description" content="Based in Coimbatore, Arunonlineservices provides expert document writing, Encumbrance Certificates (EC), Patta/Chitta transfers, property registrations, and marriage registration services." />
        <meta name="keywords" content="Real Estate Documentation Coimbatore, EC Services Coimbatore, Marriage Registration Coimbatore, Property Registration Coimbatore, Patta Transfer Coimbatore, Legal Agreements Coimbatore" />
        <link rel="canonical" href="https://arunonlineservices.in/" />
      </Helmet>
      <Hero />

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 bg-nexus-charcoal relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 border border-nexus-gold/40 rounded-full text-[10px] uppercase tracking-[0.2em] text-nexus-gold mb-6">
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6">
              Why Coimbatore Families <br/><span className="italic text-nexus-gold font-bold">Choose Us</span>
            </h2>
            <div className="w-12 h-[1px] bg-nexus-gold mb-8"></div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/70 leading-relaxed text-base md:text-lg space-y-6"
          >
            <p>
              When it comes to property and family matters, trust is everything. A single mistake in a land document or a missed signature can cause years of trouble. People in Coimbatore prefer <span className="text-nexus-gold font-mono tracking-widest font-bold">arunonlineservices</span> because we keep things simple and transparent.
            </p>
            <p>
              We don't sit behind glass doors and use confusing English words to scare you. We sit down with you, explain exactly what your documents mean in plain Tamil or English, and tell you exactly what the government fees will be upfront. From checking your Patta and Chitta to standing by your side during the final registration, we treat your property and your family's security as if it were our own.
            </p>
          </motion.div>
        </div>
      </section>

      <Services />

      {/* Let Us Handle the Paperwork */}
      <section className="py-24 relative overflow-hidden bg-[#1e293b] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6">
                Let Us Handle the <span className="italic text-nexus-gold font-bold">Paperwork</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
                You work hard for your family. Let us work hard to protect what you've built. If you are planning a property transaction, need an agreement written, or just have a doubt about a legal document, do not hesitate to reach out. At <span className="text-nexus-gold font-mono uppercase tracking-widest text-sm font-bold">arunonlineservices</span>, our doors are always open to the people of Coimbatore. Contact us today to get your paperwork sorted the right way, the first time.
              </p>
              <a href="https://wa.me/919791397392" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-nexus-gold text-white font-bold uppercase text-[11px] tracking-widest transition-all inline-block rounded-sm shadow-[0_12px_0_#0077b6] hover:shadow-[0_6px_0_#0077b6] hover:translate-y-[6px] active:shadow-[0_0px_0_#0077b6] active:translate-y-[12px]">
                Ask For Help Now
              </a>
           </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6">
            Frequently Asked <span className="italic text-nexus-gold font-bold">Questions</span>
          </h2>
           <div className="w-12 h-[1px] bg-nexus-gold mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col border-t border-white/10">
          {homeFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={`Q${index + 1}: ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
}
