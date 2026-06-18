import { motion } from "motion/react";
import { FileText, Building2, ScrollText, HeartHandshake, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../data/services";

interface ServiceProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ id, icon, title, description, index }: ServiceProps) => {
  const navigate = useNavigate();

  return (
    <div className="perspective-[1000px] h-full" onClick={() => navigate(`/services/${id}`)}>
      <motion.article
        initial={{ opacity: 0, y: 50, z: 0 }}
        whileInView={{ opacity: 1, y: 0, z: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          type: "spring",
          stiffness: 350,
          damping: 20,
        }}
        whileHover={{ 
          y: 8,
          z: -40,
          rotateX: 10,
          scale: 0.96,
          boxShadow: "inset 0 20px 30px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.02)"
        }}
        whileTap={{
          y: 20,
          z: -80,
          rotateX: 18,
          scale: 0.90,
          boxShadow: "inset 0 40px 60px rgba(0, 0, 0, 1), inset 0 0px 0px rgba(255, 255, 255, 0)"
        }}
        style={{
          boxShadow: "0 15px 25px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05), inset 0 -4px 10px rgba(0,0,0,0.6)",
          transformOrigin: "bottom center"
        }}
        className="group p-8 bg-[#1e293b] hover:bg-[#0f172a] border border-[#334155] hover:border-nexus-gold/30 rounded-xl cursor-pointer transform-gpu flex flex-col h-full"
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] text-nexus-gold block uppercase font-mono tracking-widest group-hover:opacity-50 transition-opacity">
            0{index + 1}
          </span>
          <div className="text-nexus-gold/50 group-hover:text-nexus-gold group-hover:scale-90 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all">
            {icon}
          </div>
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 group-hover:text-nexus-gold transition-colors">{title}</h3>
        <p className="text-[11px] text-white/40 leading-relaxed font-sans">
          {description}
        </p>
      </motion.article>
    </div>
  );
};

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-nexus-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] text-nexus-gold uppercase mb-4"
          >
            Services Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-light text-white max-w-4xl mx-auto leading-tight"
          >
            Our Core Services: Everything You Need <span className="italic text-nexus-gold">Under One Roof.</span>
          </motion.h3>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/50 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            We provide A-to-Z document writing and registration services. Whatever your legal need is, we have a straightforward solution for it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
