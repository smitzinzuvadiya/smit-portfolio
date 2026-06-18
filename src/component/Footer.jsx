import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter mb-2 inline-block">
            <span className="text-white">Portfolio</span>
            <span className="text-neon-purple">.</span>
          </a>
          <p className="text-zinc-500 text-sm">
            Building futuristic experiences.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/smitzinzuvadiya" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-neon-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/smit-zinzuvadiya-831b71309/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-neon-cyan transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:smitzinzuvadiya37@gmail.com" className="text-zinc-400 hover:text-neon-purple transition-colors">
            <Mail size={20} />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Smit Zinzuvadiya. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart size={14} className="text-neon-purple animate-pulse" /> and futuristic code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
