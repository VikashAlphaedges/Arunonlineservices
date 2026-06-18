import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://lh3.googleusercontent.com/d/1xvO02S9DTYUAxPtsZnHxvj5A0SVgiFkO" referrerPolicy="no-referrer" alt="Arun Online Services Logo" className="h-16 w-auto" />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10 text-[11px] uppercase tracking-widest text-white/50 h-24">
              <Link to="/" className="hover:text-nexus-gold transition-colors py-2 font-medium">Home</Link>
              
              <div className="relative group h-full flex items-center">
                <Link to="/services" className="hover:text-nexus-gold transition-colors font-medium flex items-center gap-1 group-hover:text-nexus-gold">
                  Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                </Link>
                
                <div className="absolute top-24 left-0 w-72 bg-[#0f172a] border border-white/10 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 before:content-[''] before:absolute before:top-[-20px] before:left-0 before:w-full before:h-[20px] before:bg-transparent">
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {servicesData.map(service => (
                      <Link 
                        key={service.id} 
                        to={`/services/${service.id}`} 
                        className="block px-5 py-4 text-[10px] text-white/70 hover:text-nexus-gold hover:bg-white/5 border-b border-white/5 last:border-0 uppercase tracking-widest transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                  <div className="bg-[#1e293b] p-3 text-center border-t border-nexus-gold/20 shrink-0">
                    <Link to="/services" className="text-[10px] text-nexus-gold hover:text-white uppercase tracking-widest font-bold transition-colors">
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/919791397392" target="_blank" rel="noopener noreferrer" className="hover:text-nexus-gold transition-colors py-2 font-medium">Consultation</a>
              <a href="#blogs" className="hover:text-nexus-gold transition-colors py-2 font-medium">Blogs</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-nexus-border focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        className={`md:hidden ${isOpen ? "block" : "hidden"}`} 
        id="mobile-menu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1e293b] border-b border-white/5">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-nexus-gold block px-3 py-2 text-[11px] uppercase tracking-widest font-medium">Home</Link>
          
          <div className="space-y-1">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left text-gray-300 hover:text-nexus-gold flex items-center justify-between px-3 py-2 text-[11px] uppercase tracking-widest font-medium"
            >
              <span>Services</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pl-6 py-2 space-y-4 border-l border-white/10 ml-4 mb-2">
                {servicesData.map(service => (
                  <Link 
                    key={service.id} 
                    to={`/services/${service.id}`} 
                    onClick={() => setIsOpen(false)} 
                    className="text-gray-400 hover:text-nexus-gold block text-[10px] uppercase tracking-[0.15em] transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link 
                    to="/services" 
                    onClick={() => setIsOpen(false)} 
                    className="text-nexus-gold hover:text-white block text-[10px] uppercase tracking-[0.15em] font-bold mt-4 transition-colors"
                  >
                    View All Services
                  </Link>
              </div>
            </div>
          </div>

          <a href="https://wa.link/xpbtce" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-nexus-gold block px-3 py-2 text-[11px] uppercase tracking-widest font-medium">Consultation</a>
          <a href="#blogs" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-nexus-gold block px-3 py-2 text-[11px] uppercase tracking-widest font-medium">Blogs</a>
        </div>
      </motion.div>
    </nav>
  );
}
