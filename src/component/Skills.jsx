import { motion } from "framer-motion";

const skillsData = [
  { name: "React.js", level: 90, color: "bg-neon-cyan" },
  { name: "Node.js", level: 85, color: "bg-neon-purple" },
  { name: "JavaScript", level: 95, color: "bg-neon-blue" },
  { name: "MongoDB", level: 80, color: "bg-neon-cyan" },
  { name: "Express.js", level: 85, color: "bg-neon-purple" },
  { name: "HTML & CSS", level: 95, color: "bg-neon-blue" },
  { name: "Tailwind CSS", level: 90, color: "bg-neon-cyan" },
  { name: "Git & GitHub", level: 90, color: "bg-neon-purple" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              My Skills
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-purple)]"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Technologies I've been working with recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-zinc-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
