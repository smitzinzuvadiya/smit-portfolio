import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    content: "An absolute pleasure to work with. Delivered our project ahead of schedule with an incredible, futuristic UI that blew us away.",
    image: "JD"
  },
  {
    name: "Sarah Smith",
    role: "Product Manager",
    content: "The attention to detail and smooth animations on our dashboard are top-notch. Highly recommend for any complex frontend work.",
    image: "SS"
  },
  {
    name: "Mike Johnson",
    role: "Founder at StartupX",
    content: "Brought our vision to life. The 3D elements and dark mode styling exactly matched the premium tech brand we were going for.",
    image: "MJ"
  },
  {
    name: "Emily Chen",
    role: "Design Lead",
    content: "Rare to find a developer who truly understands design aesthetics and can implement complex framer motion animations flawlessly.",
    image: "EC"
  }
];

// Duplicate for infinite scroll effect
const repeatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
            Client Feedback
          </span>
        </h2>
        <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-purple)]"></div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Gradients for smooth fading */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-6 w-max px-4"
        >
          {repeatedTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] glass-card p-8 rounded-2xl border border-white/5 shrink-0"
            >
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-xl font-bold text-black">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-neon-cyan text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-zinc-400 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
