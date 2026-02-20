import NavBar from './components/NavBar'; 
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import BentoSkills from './components/BentoSkills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SpotifyWidget from './components/SpotifyWidget'; // <-- LO IMPORTÁS ACÁ

function App() {
  return (
    <div className="min-h-screen selection:bg-violet-500/30 selection:text-violet-200">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Timeline />
        <BentoSkills />
        <Projects />
      </main>
      <Footer />
      
      {/* LO RENDERIZÁS AFUERA DEL MAIN PARA QUE QUEDE FLOTANDO */}
      <SpotifyWidget /> 
    </div>
  );
}

export default App;