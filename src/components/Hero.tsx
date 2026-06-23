import { useEffect, useState } from "react";
import { motion } from "motion/react";

function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`font-mono font-bold tracking-widest ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block text-current"
      >
        _
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 grayscale mix-blend-luminosity"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-nexus-charcoal via-nexus-charcoal/90 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-nexus-charcoal/40 z-[1] pointer-events-none lg:hidden" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20 pb-32 perspective-[1000px]">
          
          <div className="lg:col-span-12 xl:col-span-10 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-3 py-1 border border-nexus-gold/40 rounded-full text-[10px] uppercase tracking-[0.2em] text-nexus-gold">Established 2018 • Trusted by Multiple business professionals</span>
            </motion.div>
            
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.1] text-white">
              Your Trusted Legal Document Writers in Coimbatore:<br/>
              <span className="italic text-nexus-gold font-bold">Simple, Safe, and Secure</span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-start gap-4 text-white/70 mb-10 mt-8"
            >
              <div className="w-12 h-[1px] bg-nexus-gold hidden sm:block mt-3 shrink-0"></div>
              <div className="text-sm md:text-base max-w-2xl leading-relaxed space-y-4">
                <p>
                  Whether you are buying your first piece of land, registering your marriage, or renting out your family home, dealing with legal documents can feel overwhelming. Government offices, endless paperwork, and confusing legal words can easily stress anyone out. You don't need complicated "hi-fi" legal jargon; you need clear answers, honest guidance, and someone who knows the local system inside and out.
                </p>
                <p>
                  Welcome to <TypewriterText className="text-nexus-gold" text="arunonlineservices" />. We are proud to be Coimbatore's most approachable and reliable document writing service. For years, we have been helping ordinary families, first-time home buyers, and small business owners across Tamil Nadu secure their hard-earned assets. We speak your language, understand your concerns, and handle the heavy lifting at the Sub-Registrar Office so you can have complete peace of mind.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 sm:items-center mt-6"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://wa.me/919791397392" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-nexus-gold text-white font-bold uppercase text-[11px] tracking-widest transition-all text-center rounded-sm shadow-[0_12px_0_#0077b6] hover:shadow-[0_6px_0_#0077b6] hover:translate-y-[6px] active:shadow-[0_0px_0_#0077b6] active:translate-y-[12px]">
                  Schedule Consultation
                </a>
                <a href="#services" className="px-8 py-4 bg-[#1e293b] border border-white/10 text-white uppercase text-[11px] tracking-widest transition-all text-center rounded-sm shadow-[0_12px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_0_rgba(255,255,255,0.1)] hover:translate-y-[6px] active:shadow-[0_0px_0_rgba(255,255,255,0.1)] active:translate-y-[12px] hover:text-nexus-gold hover:border-nexus-gold/30">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </header>
  );
}
