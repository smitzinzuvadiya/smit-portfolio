import { motion } from "framer-motion";
import { User, Briefcase, Code, Award } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <User className="text-neon-blue" size={32} />,
      title: "Who I Am",
      desc: "I am Smit Zinzuvadiya, a passionate Full-Stack Developer who recently completed a Bachelor of Computer Applications (BCA).",
      delay: 0.1,
    },
    {
      icon: <Briefcase className="text-neon-purple" size={32} />,
      title: "My Focus",
      desc: "Driven by problem-solving and effectively bridging the gap between seamless front-end user experiences and robust, scalable back-end architectures.",
      delay: 0.2,
    },
    {
      icon: <Code className="text-neon-cyan" size={32} />,
      title: "Expertise",
      desc: "Designing complex MongoDB schemas, securing RESTful APIs with JWT, and orchestrating responsive state-driven UIs in React.",
      delay: 0.3,
    },
    {
      icon: <Award className="text-neon-blue" size={32} />,
      title: "Philosophy",
      desc: "Firmly committed to a philosophy of continuous learning and deliberate, clean engineering in every project I build.",
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-cyan)]"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            My journey in web development is driven by a deep focus on problem-solving and deliberate, clean engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: card.delay, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/50 group transition-colors relative overflow-hidden"
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
