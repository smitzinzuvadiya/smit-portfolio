import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies Learned", value: 15, suffix: "+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
  { label: "Coding Hours", value: 1000, suffix: "+" },
];

const Counter = ({ from, to, duration, suffix }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="text-4xl md:text-5xl font-extrabold text-white">
      {count}
      <span className="text-neon-cyan">{suffix}</span>
    </span>
  );
};

const Statistics = () => {
  return (
    <section className="py-20 relative z-10 bg-black/40 border-y border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-2 p-6 glass-card rounded-2xl hover:border-neon-cyan/50 transition-colors"
            >
              <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
              <span className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
