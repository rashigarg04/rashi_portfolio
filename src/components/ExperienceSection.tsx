import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2, Terminal } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Coursevita",
    period: "Oct 2025 - Present",
    description: "Architecting and maintaining robust full-stack ecosystems. Specialized in performance optimization and modular component design to ensure seamless user experiences and scalable backend architectures.",
    achievements: [
      "Optimized frontend performance by 40%",
      "Engineered secure API integration layers",
      "Mentored junior developers in MERN best practices",
    ],
  },
  {
    role: "Cybersecurity Specialist",
    company: "AICTE - Eduskills (Palo Alto)",
    period: "Oct 2025 - Dec 2025",
    description: "Focused on implementing enterprise-grade security protocols. Managed threat detection systems and performed deep-dive vulnerability assessments to fortify network integrity.",
    achievements: [
      "Optimized Next-Gen Firewall policies",
      "Performed full-spectrum risk analysis",
      "Enhanced security tool orchestration",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Defendair Technologies Pvt. Ltd.",
    period: "Feb 2025 - April 2025",
    description: "Led the development of mission-critical web applications. Driven by a focus on UX/UI excellence and technical resilience in high-pressure delivery environments.",
    achievements: [
      "Reduced application load times by 30%",
      "Deployed scalable React architectures",
      "Integrated complex third-party API services",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-[0.3em]"
          >
            <Terminal size={14} />
            Professional Log
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Career <span className="text-primary italic">Trajectory</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-[#0B0B0B] z-10 shadow-[0_0_10px_rgba(245,160,0,0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`glass-dark p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 group ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-white/70">
                          <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
