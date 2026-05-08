import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Code2 } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0B] pt-20 pb-10 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute -bottom-10 left-0 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-display">
        RASHI
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-black font-bold text-xl">
                R
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Rashi<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed font-light">
              Engineering secure, performant, and visually stunning digital 
              ecosystems. Bridging the gap between code and design with 
              a focus on security and scalability.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/rashigarg04" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#F5A000" }}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center text-white/40 transition-all border border-white/5"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-mono text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["About", "Skills", "Work", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Spec */}
          <div>
            <h4 className="text-white font-bold mb-6 font-mono text-sm uppercase tracking-widest">Stack Focus</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind", "Framer"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-white/40 rounded-lg text-xs font-mono border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} — Designed & Engineered by Rashi Garg
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-primary transition-colors group text-xs font-mono uppercase tracking-widest"
          >
            <span>Back to System Root</span>
            <div className="p-2 glass-dark rounded-lg border border-white/5 group-hover:border-primary/40 transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
