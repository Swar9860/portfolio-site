import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Resume />
    </div>
  )
}

export default App