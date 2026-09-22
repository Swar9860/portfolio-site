import { motion } from 'framer-motion'
import experience from '../data/experience'

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience & Education</h2>
        <p className="text-slate-400 mb-12 text-center">My journey so far</p>

        <div className="relative border-l border-slate-700 pl-8 space-y-10">
          {experience.map((item) => (
            <div key={item.title} className="relative">
              <span className="absolute -left-[38px] top-1 w-3 h-3 bg-blue-400 rounded-full"></span>
              <p className="text-xs uppercase tracking-wide text-blue-400 mb-1">{item.type}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{item.organization} — {item.duration}</p>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience