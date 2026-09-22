import { motion } from 'framer-motion'
import resumeFile from '../assets/Swaroop_Resume.pdf'

function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 bg-slate-950 text-white text-center"
    >
      <h2 className="text-2xl font-bold mb-3">Resume</h2>
      <p className="text-slate-400 mb-6">Want the full picture? Download my resume below.</p>
      <a href={resumeFile} download="Swaroop_Resume.pdf" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">Download Resume</a>
    </motion.section>
  )
}

export default Resume