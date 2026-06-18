import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-cyan)]"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Email</p>
                    <a href="mailto:smitzinzuvadiya37@gmail.com" className="text-white hover:text-neon-cyan transition-colors">smitzinzuvadiya37@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple border border-white/10 group-hover:border-neon-purple/50 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Phone</p>
                    <a href="tel:7203095508" className="text-white hover:text-neon-purple transition-colors">7203095508</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue border border-white/10 group-hover:border-neon-blue/50 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Location</p>
                    <p className="text-white">Utran, Surat</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="glass-card rounded-2xl h-64 border border-white/5 relative overflow-hidden group">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709444158!2d72.73989476007421!3d21.159340298642055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
               ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-card p-8 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <label className="text-sm text-zinc-400 font-medium">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                  />
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-sm text-zinc-400 font-medium">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell me about your project..." 
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none custom-scrollbar"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full py-4 bg-neon-cyan text-black font-bold rounded-lg hover:shadow-[0_0_20px_var(--color-neon-cyan)] transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
