import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Code2, Rocket, Layout, Filter, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "AI Cyber Attack Detection",
    category: "Security",
    description: "Enterprise-grade neural network designed to identify and mitigate anomalous network traffic patterns and potential zero-day exploits in real-time.",
    image: "/assets/aicyber.png",
    tech: ["Python", "Django", "FastAPI", "ReactJS", "TailwindCSS"],
    github: "https://github.com/rashigarg04",
    link: "#",
    featured: true,
  },
  {
    title: "AI Spend Audit Tool",
    category: "AI",
    description: "Automated financial auditing platform leveraging Large Language Models to categorize complex corporate expenses and detect budget leaks.",
    image: "/assets/aispendaudittool.png",
    tech: ["OpenAI API", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/rashigarg04",
    link: "#",
    featured: true,
  },
  {
    title: "Amazon Clone",
    category: "Web",
    description: "An enterprise-grade e-commerce architecture featuring product indexing, dynamic cart management, and secure checkout flows.",
    image: "/assets/amazon-clone.png",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/rashigarg04/Amazon-Clone",
    link: "#",
    featured: false,
  },
  {
    title: "TaskNova Engine",
    category: "Optimization",
    description: "High-performance task orchestration system with real-time state persistence and intuitive workflow management.",
    image: "/assets/tasknova.png",
    tech: ["JavaScript", "Local Storage", "CSS Grid"],
    github: "https://github.com/rashigarg04/To-do-list",
    link: "#",
    featured: false,
  },
  {
    title: "Guardian Login UI",
    category: "Security",
    description: "Advanced authentication interface with adaptive validation and secure session handling visualizations.",
    image: "/assets/login.png",
    tech: ["HTML5", "CSS3", "JS ES6"],
    github: "https://github.com/rashigarg04/login-page",
    link: "#",
    featured: false,
  },
];

const ProjectCard = ({ project, index, featured }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative glass-dark rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`grid ${featured ? "lg:grid-cols-2" : "grid-cols-1"} h-full`}>
        <div className="relative overflow-hidden aspect-video lg:aspect-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass-dark border border-white/10 text-[10px] uppercase tracking-widest text-primary font-bold">
            {project.category}
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-white/40 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-auto">
            <motion.a
              whileHover={{ x: 5 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors font-medium"
            >
              <Github className="w-4 h-4" /> 
              <span>Source</span>
            </motion.a>
            
            {project.link !== "#" && (
              <motion.a
                whileHover={{ x: 5 }}
                href={project.link}
                className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" /> 
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-20 bg-[#0B0B0B] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-[0.3em]"
            >
              <Rocket size={14} />
              Portfolio Showcase
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Selected <span className="text-primary italic">Deployments</span>
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 p-1.5 glass-dark rounded-2xl border border-white/5"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  filter === cat 
                    ? "bg-primary text-black font-bold shadow-[0_0_15px_rgba(245,160,0,0.3)]" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid lg:grid-cols-2 gap-10"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={i} 
              featured={project.featured} 
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/rashigarg04"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-dark rounded-2xl border border-white/5 hover:border-primary/40 hover:text-primary transition-all duration-300 group"
          >
            <Code2 className="w-5 h-5" />
            <span className="font-bold">Explore Entire Repository</span>
            <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
