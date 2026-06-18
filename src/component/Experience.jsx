import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const experienceData = [
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    company: "Veer Narmad South Gujarat University",
    date: "2023 - 2026",
    desc: "CGPA: 7.0",
    icon: <GraduationCap size={20} className="text-black" />,
    color: "bg-neon-blue",
  },
  {
    type: "education",
    title: "11th – 12th (Science Stream)",
    company: "K&M.P Science High School",
    date: "2021 - 2022",
    desc: "Higher Secondary Education",
    icon: <School size={20} className="text-black" />,
    color: "bg-neon-purple",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Education Background
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-blue)]"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative flex items-center md:justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full border-4 border-dark-bg z-10 shadow-[0_0_15px_currentColor]"
                style={{ color: `var(--color-${item.color.split('-')[1]}-${item.color.split('-')[2]})`, backgroundColor: `var(--color-${item.color.split('-')[1]}-${item.color.split('-')[2]})` }}
              >
                {item.icon}
              </div>

              <div className={`w-full md:w-5/12 ml-10 md:ml-0 glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300`}>
                <span className="text-neon-cyan text-sm font-semibold mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-zinc-400 font-medium mb-3">{item.company}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
