import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import smitImage from '../assets/smit.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-semibold tracking-wider w-max"
          >
            AVAILABLE FOR WORK
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Crafting Digital <br />
            <span className="text-gradient glow-text">Experiences</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-medium text-zinc-400">
            Full Stack Developer <span className="text-neon-purple">|</span> MERN Stack Developer
          </h2>

          <p className="text-zinc-500 max-w-lg leading-relaxed text-lg">
            I'm a passionate full-stack developer dedicated to building elegant, responsive, and user-centric web applications. Transforming ideas into robust digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-neon-blue text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white/5 border border-white/10 hover:border-neon-purple text-white font-medium rounded-full transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(188,19,254,0.3)] flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <a href="https://github.com/smitzinzuvadiya" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-neon-blue transition-colors hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/smit-zinzuvadiya-831b71309/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-neon-cyan transition-colors hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:smitzinzuvadiya37@gmail.com" className="text-zinc-400 hover:text-neon-purple transition-colors hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* 3D Model / Abstract visual container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative w-full h-[500px] flex items-center justify-center z-10"
        >
          {/* Glowing Orb Placeholder */}
          <div className="absolute w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute w-48 h-48 bg-neon-purple/20 rounded-full blur-[80px] -translate-x-20 translate-y-20"></div>
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-80 h-80 rounded-full glass-card border-4 border-neon-cyan/50 flex items-center justify-center shadow-[0_0_50px_rgba(0,243,255,0.4)] overflow-hidden relative"
          >
             <img src={smitImage} alt="Smit Zinzuvadiya" className="w-full h-full object-cover rounded-full" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
