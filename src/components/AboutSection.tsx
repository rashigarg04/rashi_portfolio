import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, MapPin, Mail, ExternalLink, Code2, ShieldCheck, Zap, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Counter from "./Counter";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const stats = [
    { label: "Experience", value: "2+ Years", icon: Zap },
    { label: "Projects", value: "15+ Done", icon: Code2 },
    { label: "Security", value: "Certified", icon: ShieldCheck },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("rashiig72@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      icon: <Check className="w-4 h-4 text-green-500" />
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT: IMAGE & STATS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative group max-w-md mx-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass-dark border border-white/5 shadow-2xl">
                <img
                  src="/assets/MEE.jpeg"
                  alt="Rashi Garg"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-12 -right-6 lg:-right-12 glass-dark p-8 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl hidden sm:block"
              >
                <div className="flex gap-10">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center group/stat">
                      <stat.icon className="w-5 h-5 text-primary/40 group-hover/stat:text-primary mx-auto mb-3 transition-colors duration-500" />
                      <p className="text-2xl font-bold text-white mb-1 tracking-tight">
                        <Counter value={stat.value} />
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-primary text-[10px] font-mono mb-8 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Technical Background
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Engineering with <span className="text-primary italic">Resilience</span>.
            </h2>

            <div className="space-y-8 mb-12 text-lg text-white/50 font-light leading-relaxed">
              <p>
                I am a dedicated <span className="text-white font-medium">Full-Stack Engineer</span> specialized in the MERN ecosystem. My philosophy centers on building applications that aren't just visually stunning, but are structurally sound and inherently secure.
              </p>

              <p>
                With a deep fascination for <span className="text-primary font-medium">Cybersecurity</span>, I integrate defensive programming practices into every line of code I write. My goal is to bridge the gap between creative design and technical resilience.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-4 group">
                <MapPin className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-sm text-white/70 font-light tracking-wide">Greater Noida, India</span>
              </div>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-4 group hover:bg-white/5 p-2 rounded-xl transition-all"
              >
                <Mail className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-sm text-white/70 font-light tracking-wide">rashiig72@gmail.com</span>
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-white/20 group-hover:text-white/60" />}
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-16 rounded-2xl shadow-xl transition-all"
                asChild
              >
                <a href="/assets/Rashi Resume New.pdf" download>
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/10 hover:border-primary/40 hover:bg-white/5 text-white/80 rounded-2xl px-10 h-16 transition-all"
                asChild
              >
                <a href="#contact">
                  <ExternalLink className="w-5 h-5 mr-3 opacity-40" />
                  Let's Talk
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
