import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { title: "Advanced React Patterns", issuer: "Frontend Masters", year: "2023" },
  { title: "Node.js Microservices", issuer: "Udemy", year: "2023" },
  { title: "Three.js Journey", issuer: "Bruno Simon", year: "2024" },
  { title: "AWS Certified Developer", issuer: "Amazon", year: "2024" }
];

const Certificates = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Certifications
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-blue)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/50 hover:-translate-y-2 transition-all group text-center flex flex-col items-center justify-center min-h-[200px]"
            >
              <Award size={40} className="text-neon-cyan mb-4 group-hover:scale-110 transition-transform shadow-neon" />
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-zinc-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-neon-purple font-mono text-xs">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
