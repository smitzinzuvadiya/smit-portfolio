import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

import calender from '../assets/calender.png';
import instagram from '../assets/instagram.png';
import thread from '../assets/thread.png';
import food from '../assets/food.png';

const projectsData = [
  {
    id: 1,
    title: 'MERN Social Media Platform',
    category: 'Full Stack',
    description: 'Built a full-stack social media platform with REST APIs and JWT/Bcrypt authentication. Developed a responsive React 19 + Tailwind UI with Axios for dynamic data rendering. Designed MongoDB schemas for follow/unfollow logic and optimized for mobile performance.',
    image: instagram,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    features: [
      "REST APIs and JWT/Bcrypt authentication",
      "Dynamic data rendering with Axios",
      "MongoDB schemas for follow/unfollow logic",
      "Responsive mobile-first UI"
    ],
    challenges: "Optimizing MongoDB schemas for complex relationship mapping (follow/unfollow). Solved by structuring referenced documents properly for fast aggregations.",
    githubUrl: 'https://github.com/smitzinzuvadiya/social-media-website',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Netflix-Clone',
    category: 'Frontend',
    description: 'A responsive Netflix-style clone with features like watch trailers, login & signup, and mobile friendly UI. Firebase is used for managing user login data.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
    features: [
      "Trailer viewing functionality",
      "User authentication (Login & Signup)",
      "Firebase backend integration",
      "Mobile-friendly interface"
    ],
    challenges: "Fetching and managing multiple video streams seamlessly. Solved by integrating efficient API calls to movie databases.",
    githubUrl: 'https://github.com/smitzinzuvadiya/Netflix',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Calendar Event Management System',
    category: 'Full Stack',
    description: 'Built a full-stack MERN calendar app for event and schedule management. Implemented JWT authentication with persistent login using LocalStorage. Developed REST APIs and a responsive UI for smooth CRUD operations and navigation.',
    image: calender,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      "Event and schedule management",
      "JWT authentication with persistent login",
      "REST APIs for CRUD operations",
      "Smooth navigation UI"
    ],
    challenges: "Managing state across multiple calendar views efficiently. Solved by lifting state or using context for seamless date/event updates.",
    githubUrl: 'https://github.com/smitzinzuvadiya/Calendar',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Online Food Order or Recipes Website',
    category: 'Frontend',
    description: 'A responsive online food ordering and recipe website. Users can browse delicious recipes, view food menus, and place orders with a clean, interactive interface.',
    image: food,
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      "Browse delicious recipes",
      "View food menus",
      "Clean interactive ordering interface",
      "Fully responsive design"
    ],
    challenges: "Creating interactive pure JavaScript DOM manipulation without frameworks. Solved by writing modular ES6 classes.",
    githubUrl: 'https://github.com/smitzinzuvadiya/food',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Threads Clone',
    category: 'Full Stack',
    description: 'Developed a responsive social media application using the MERN stack to enable seamless real-time user interactions. Integrated dynamic thread management, an interactive liking system, and a nested commenting architecture, all styled with a modern, glassmorphic UI.',
    image: thread,
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    features: [
      "Real-time user interactions",
      "Dynamic thread management",
      "Interactive liking and nested comments",
      "Modern glassmorphic UI"
    ],
    challenges: "Implementing nested commenting architecture. Solved by using recursive component rendering and specialized DB schemas.",
    githubUrl: 'https://github.com/smitzinzuvadiya/thread',
    liveUrl: 'https://example.com',
  },
];

const categories = ["All", "Frontend", "Full Stack"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-24 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_var(--color-neon-cyan)]"></div>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-neon-blue text-black shadow-[0_0_15px_var(--color-neon-blue)]"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-neon-purple/50 transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                   <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/10">View Details</span>
                </div>
              </div>

              <div className="p-6 relative z-30 bg-zinc-950/80">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs font-semibold text-neon-cyan">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
