import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const Terminal = () => {
  const codeLines = [
    { text: "const developer = {", delay: 0 },
    { text: "  name: 'Rashi Garg',", delay: 0.1 },
    { text: "  role: 'AI & Full-Stack Engineer',", delay: 0.2 },
    { text: "  focus: ['Cybersecurity', 'AI Agents', 'MERN'],", delay: 0.3 },
    { text: "  skills: ['React', 'Node.js', 'TensorFlow', 'Python'],", delay: 0.4 },
    { text: "  loves: ['Secure Architecture', 'Automation', 'LLMs'],", delay: 0.5 },
    { text: "  status: 'Building the future of secure AI'", delay: 0.6 },
    { text: "};", delay: 0.7 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto glass-dark rounded-2xl overflow-hidden shadow-2xl border border-white/5"
    >
      {/* Terminal Header */}
      <div className="bg-white/5 px-5 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex items-center gap-2 ml-6 text-[10px] text-white/30 font-mono tracking-widest uppercase">
          <TerminalIcon className="w-3 h-3" />
          <span>zsh — session — 1024x768</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
        <div className="flex flex-col gap-1.5">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay + 0.5, duration: 0.3 }}
              className="flex gap-6"
            >
              <span className="text-white/10 select-none w-4 text-xs">{index + 1}</span>
              <span className={index === 0 || index === 7 ? "text-primary" : index === 6 ? "text-blue-400" : "text-white/70"}>
                {line.text}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
            className="w-2.5 h-5 bg-primary ml-10 mt-1 shadow-[0_0_10px_rgba(245,160,0,0.5)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
