import { motion } from "framer-motion";
import { Layout, Server, Database, Smartphone, Search } from "lucide-react";

const services = [
  {
    icon: <Layout size={32} className="text-neon-cyan" />,
    title: "Frontend Development",
    desc: "Building pixel-perfect, responsive, and highly interactive user interfaces using React, Next.js, and Three.js."
  },
  {
    icon: <Server size={32} className="text-neon-purple" />,
    title: "Backend Development",
    desc: "Designing scalable server-side architectures, RESTful APIs, and GraphQL endpoints using Node.js and Express."
  },
  {
    icon: <Database size={32} className="text-neon-blue" />,
    title: "Full Stack Solutions",
    desc: "End-to-end web application development from database design to frontend deployment."
  },
  {
    icon: <Search size={32} className="text-neon-cyan" />,
    title: "Website Optimization",
    desc: "Improving core web vitals, accessibility, SEO, and overall performance for lightning-fast loading speeds."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
              My Services
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-blue)]"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Comprehensive solutions to help your business grow and stand out in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-neon-blue/50 transition-all group flex gap-6"
            >
              <div className="flex-shrink-0 p-4 bg-white/5 rounded-xl h-max group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
