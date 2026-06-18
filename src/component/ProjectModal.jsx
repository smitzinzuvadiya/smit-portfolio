import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-y-auto custom-scrollbar z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors z-20 backdrop-blur-md"
          >
            <X size={24} />
          </button>

          <div className="w-full h-64 sm:h-80 bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 sm:p-10 -mt-10 relative z-20">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-neon-cyan">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {project.title}
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span> Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                      <CheckCircle2 size={18} className="text-neon-cyan mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                 <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-blue"></span> Challenges & Solutions
                </h3>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neon-blue text-black font-bold rounded-lg hover:shadow-[0_0_15px_var(--color-neon-blue)] transition-all">
                <ExternalLink size={18} /> Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 font-medium rounded-lg hover:bg-white/10 transition-all">
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
