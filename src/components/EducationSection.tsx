import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "IILM University",
    location: "Greater Noida, Uttar Pradesh",
    period: "2023 - Present",
    description: "Specializing in Mathematics and Computer Science. Actively engaged in advanced algorithms and secure system design. Leading community initiatives as a core member of GDG.",
    achievements: ["Core Member GDG", "Hackathon Winner", "8.57 GPA"],
  },
  {
    degree: "Higher Secondary Education",
    institution: "Mewat Model School",
    location: "Haryana, India",
    period: "2021 - 2022",
    description: "In-depth focus on Software Engineering fundamentals and Web Development. Recognized for exceptional academic performance and leadership in technical clubs.",
    achievements: ["District Topper", "9.04 GPA", "Tech Club Leader"],
  },
  {
    degree: "Secondary School Education",
    institution: "Jain Public School",
    location: "Haryana, India",
    period: "2019 - 2020",
    description: "Established a strong foundation in Computer Science and Mathematics. Graduated with high honors and a focus on computational thinking.",
    achievements: ["8.8 GPA", "Academic Excellence Award"],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-[0.3em]"
          >
            <BookOpen size={14} />
            Academic Foundation
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Education <span className="text-blue-400 italic">History</span>
          </motion.h2>
        </div>

        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-dark p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-white/40 font-mono text-sm uppercase tracking-wider">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-white/60 text-xs font-mono">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-base font-light leading-relaxed mb-8 max-w-3xl">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {edu.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-white/80 font-medium group-hover:border-blue-500/20 transition-all"
                    >
                      <Award size={14} className="text-blue-400" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
