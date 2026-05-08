import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar, ShieldCheck, BadgeCheck, Trophy } from "lucide-react";

const certificates = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Palo Alto Networks",
    date: "Dec 2025",
    credentialId: "PA-CYBER-2025",
    image: "/assets/cybersecurity fundamentals.jpeg",
    verifyUrl: "/assets/cybersecurity fundamentals.jpeg",
    type: "Security"
  },
  {
    title: "MERN Stack Developer",
    issuer: "Coursevita",
    date: "Jan 2026",
    credentialId: "MERN-CV-2026",
    image: "/assets/Coursevita.jpeg",
    verifyUrl: "/assets/Coursevita.jpeg",
    type: "Development"
  },
  {
    title: "Volunteer @ Hack O'Clock",
    issuer: "Google Developer Group",
    date: "April 2025",
    credentialId: "GDG-HACK-2025",
    image: "/assets/gdg.jpeg",
    verifyUrl: "/assets/gdg.jpeg",
    type: "Community"
  },
  {
    title: "Flipkart Runway Season 5",
    issuer: "Flipkart",
    date: "2022",
    credentialId: "FLIPKART-RUNWAY-5",
    image: "/assets/flipkart.png",
    verifyUrl: "/assets/flipkart.png",
    type: "Achievement"
  },
  {
    title: "Hackathon Excellence",
    issuer: "NIET, Greater Noida",
    date: "April 2024",
    credentialId: "NIET-HACK-2024",
    image: "/assets/hackathon.png",
    verifyUrl: "/assets/hackathon.png",
    type: "Hackathon"
  },
  {
    title: "Cybersecurity Internship",
    issuer: "AICTE - EduSkills",
    date: "Dec 2025",
    credentialId: "AICTE-CYBER-2025",
    image: "/assets/paloalto.png",
    verifyUrl: "/assets/paloalto.png",
    type: "Internship"
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-[0.3em]"
          >
            <Trophy size={14} />
            Verified Credentials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Certificates & <span className="text-primary italic">Recognition</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full glass-dark rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-lg glass-dark border border-white/10 text-[10px] uppercase tracking-widest text-primary font-bold">
                    {cert.type}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4 text-white/30 text-[10px] font-mono uppercase tracking-widest">
                    <Calendar size={12} />
                    {cert.date}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  <p className="text-white/50 text-sm font-light mb-6">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                      <ShieldCheck size={14} className="text-primary/50" />
                      ID: {cert.credentialId}
                    </div>
                    
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors"
                    >
                      <BadgeCheck size={16} className="text-primary" />
                      Verify
                      <ExternalLink size={12} className="opacity-40" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
