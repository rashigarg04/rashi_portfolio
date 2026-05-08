import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Terminal, Code2, Cpu, GraduationCap, Award, Mail, Info, Sparkles } from "lucide-react";
import { toast } from "sonner";

const navItems = [
  { name: "About", href: "#about", icon: Info },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Work", href: "#work", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Terminal },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Awards", href: "#certificates", icon: Award },
  { name: "Connect", href: "#contact", icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Redirecting to communication hub...", {
      description: "Let's build something incredible together!",
      icon: <Sparkles className="w-4 h-4 text-primary" />,
    });
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl border transition-all duration-500 ${
          scrolled 
            ? "glass-dark border-white/10 shadow-2xl py-3" 
            : "bg-transparent border-transparent py-4"
        }`}
      >
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-bold text-lg group-hover:rotate-12 transition-transform">
            R
          </div>
          <span className="hidden sm:block font-display text-lg font-bold text-white tracking-tight">
            Rashi<span className="text-primary">.dev</span>
          </span>
        </a>
        
        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleHireMe}
            className="px-6 py-2.5 bg-primary text-black text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(245,160,0,0.4)] hover:shadow-[0_0_30px_rgba(245,160,0,0.6)] transition-all flex items-center gap-2"
          >
            <Sparkles size={16} />
            Hire Me
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 glass-dark rounded-3xl border border-white/10 shadow-2xl lg:hidden"
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 rounded-2xl text-white/60 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      <item.icon size={18} />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  onClick={(e) => {
                    setIsOpen(false);
                    handleHireMe(e);
                  }}
                  className="flex items-center justify-center w-full py-4 bg-primary text-black font-bold rounded-2xl gap-2 shadow-[0_0_20px_rgba(245,160,0,0.2)]"
                >
                  <Sparkles size={18} />
                  Start a Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navigation;
