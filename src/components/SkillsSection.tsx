import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  ShieldCheck, 
  Layers,
  Monitor,
  BrainCircuit
} from "lucide-react";
import Counter from "./Counter";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-500/20 to-emerald-500/20",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Firebase"]
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    color: "from-red-500/20 to-orange-500/20",
    skills: ["Ethical Hacking", "OWASP Top 10", "JWT Auth", "SSL/TLS", "Security Auditing", "Cyber Investigation"]
  },
  {
    title: "Tools & Technologies",
    icon: BrainCircuit,
    color: "from-purple-500/20 to-pink-500/20",
    skills: ["Git & GitHub", "OpenAI API", "AI Tools", "Canva", "VS Code", "Responsive Design"]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-[0.3em]"
          >
            <Layers size={14} />
            My Tech Stack
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Technological <span className="text-primary italic">Arsenal</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl text-lg font-light"
          >
            Integrating Advanced Intelligence and Security protocols into 
            high-performance digital products from scratch.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10`} />
              
              <div className="h-full glass-dark p-8 rounded-3xl border border-white/5 group-hover:border-primary/30 transition-all duration-500 backdrop-blur-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 text-[11px] font-mono rounded-lg bg-white/5 text-white/60 border border-white/5 group-hover:border-primary/10 group-hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats with Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 glass-dark rounded-3xl border border-white/5 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white mb-1">
                <Counter value="99%" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Build Success</p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white mb-1">
                <Counter value="24/7" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Learning Cycle</p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white mb-1 uppercase">
                <Counter value="Fast" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">API Responses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
