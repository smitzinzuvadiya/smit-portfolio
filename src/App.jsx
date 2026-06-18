import CustomCursor from "./component/CustomCursor";
import Background3D from "./component/Background3D";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Statistics from "./component/Statistics";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <CustomCursor />
      <Background3D />
      
      <div className="relative z-10 font-sans selection:bg-neon-cyan selection:text-black text-zinc-300 antialiased overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Statistics />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
