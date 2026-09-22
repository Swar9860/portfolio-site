import { motion } from 'framer-motion'
import projects from '../data/projects'

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-slate-400 mb-12 text-center">Things I've built</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-400 hover:-translate-y-1 transition transform">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo →</a>
                ) : null}
                {project.codeLink ? (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm font-medium">Code →</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects