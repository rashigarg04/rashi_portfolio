import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ShieldCheck, Terminal as TerminalIcon } from "lucide-react";
import Terminal from "./Terminal";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] flex items-center px-6 md:px-16 relative overflow-hidden py-20">
      
      {/* Elegant Background Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 blur-[200px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-600/10 blur-[180px] rounded-full" 
        />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-mono mb-10 tracking-[0.2em] backdrop-blur-md">
            <ShieldCheck size={12} className="animate-pulse" />
            <span className="uppercase">Securing the digital frontier</span>
          </div>

          <h1 className="text-white font-display text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
            Building <span className="text-primary italic relative">
              Secure
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-2 left-0 h-[4px] bg-primary/30 -z-10"
              />
            </span> <br/> 
            Experiences.
          </h1>

          <div className="space-y-6 mb-12">
            <p className="text-white/90 text-2xl md:text-3xl font-light tracking-tight">
              I’m <span className="font-semibold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Rashi Garg</span>
            </p>
            <p className="text-white/40 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed font-light">
              Full-Stack Architect & Cybersecurity Researcher. 
              Engineering resilient digital infrastructures with 
              a focus on AI-driven security and high-performance MERN apps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="px-10 py-5 bg-primary text-black font-bold rounded-2xl shadow-xl hover:shadow-primary/20 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Explore Deployments
            </motion.a>

            <motion.a
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              href="#contact"
              className="px-10 py-5 border border-white/10 text-white/70 font-bold rounded-2xl backdrop-blur-sm transition-all text-sm uppercase tracking-widest"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: TERMINAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-4 sm:px-0"
        >
          <div className="absolute -inset-10 bg-primary/5 rounded-[3rem] blur-[80px] -z-10" />
          <Terminal />
          
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-4 glass-dark px-4 py-2 rounded-xl border border-white/10 hidden md:flex items-center gap-3 shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-[10px] uppercase text-white/60 font-mono tracking-widest">Environment: Encrypted</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/20 hover:text-primary transition-colors duration-500"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase font-mono">System Initialization</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>

    </section>
  );
};

export default HeroSection;
