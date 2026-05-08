import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight, MessageSquare, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-[3rem] p-12 md:p-20 border border-white/5 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Inner decorative elements */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <MessageSquare size={200} />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8 uppercase tracking-[0.3em]"
            >
              <MessageSquare size={14} />
              Open for Collaboration
            </motion.div>

            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to <span className="text-primary italic">Secure</span> Your Next Project?
            </h2>

            <p className="font-body text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Whether you need a robust full-stack application or a security audit 
              for your existing platform, I'm here to build it better and stronger.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="default"
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-bold px-10 py-8 rounded-2xl text-lg shadow-[0_0_20px_rgba(245,160,0,0.3)]"
                onClick={() => window.location.href = "mailto:rashiig72@gmail.com"}
              >
                <Mail className="w-6 h-6 mr-3" />
                Initiate Contact
              </Button>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 glass-dark rounded-2xl border border-white/10 text-white/60 hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/rashigarg04"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 glass-dark rounded-2xl border border-white/10 text-white/60 hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-20 pt-12 border-t border-white/5">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Location Base</p>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-lg">Greater Noida, India</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-end gap-2">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Communication</p>
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-lg">rashiig72@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
