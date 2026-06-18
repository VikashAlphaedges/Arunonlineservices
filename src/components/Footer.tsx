import { MessageCircle, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0f172a] border-t border-white/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <img src="https://lh3.googleusercontent.com/d/1xvO02S9DTYUAxPtsZnHxvj5A0SVgiFkO" referrerPolicy="no-referrer" alt="Arun Online Services Logo" className="h-16 w-auto" />
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed max-w-md mb-8 uppercase tracking-widest leading-loose">
              Setting the standard for document writing and legal consultation in Coimbatore. Simple, Safe, and Secure solutions for individuals and enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/40">
                <MapPin className="text-nexus-gold w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[11px] uppercase tracking-wider">103, First Floor, Aishwarya Complex,<br/>Gopalapuram First Street,<br/>Coimbatore 641018</span>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <Phone className="text-nexus-gold w-4 h-4 shrink-0" />
                <span className="text-[11px] uppercase tracking-wider">0422 2200604</span>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <MessageCircle className="text-nexus-gold w-4 h-4 shrink-0" />
                <span className="text-[11px] uppercase tracking-wider lowercase">WhatsApp: +91 9791397392</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-nexus-gold text-[11px] uppercase tracking-wider transition-colors">Property Registration</a></li>
              <li><a href="#" className="text-white/40 hover:text-nexus-gold text-[11px] uppercase tracking-wider transition-colors">Encumbrance Certificates</a></li>
              <li><a href="#" className="text-white/40 hover:text-nexus-gold text-[11px] uppercase tracking-wider transition-colors">Agreement Drafting</a></li>
              <li><a href="#" className="text-white/40 hover:text-nexus-gold text-[11px] uppercase tracking-wider transition-colors">Document Validation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="h-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/30">
          <div>&copy; {new Date().getFullYear()} Arun Online Services • Trusted Document Writers Coimbatore</div>
          <div className="flex gap-4 md:gap-8 mt-4 md:mt-0">
            <span className="hidden md:inline">Property Registration Experts</span>
            <span className="hidden md:inline">Tamil Nadu Legal Services</span>
            <span className="text-nexus-gold">Authorized Document Writers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
