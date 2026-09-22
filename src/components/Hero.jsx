import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-slate-950 text-white"
    >
      <p className="text-blue-400 font-medium mb-3">Hi, I'm</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Swaroop</h1>
      <h2 className="text-xl md:text-2xl text-slate-300 mb-6">Data Analyst | BI Developer | AI/ML Engineer</h2>
      <p className="max-w-xl text-slate-400 mb-8">IT graduate with hands-on experience in Microsoft Fabric, Power BI, and Python — building data-driven solutions and exploring AI/ML.</p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">View My Work</a>
        <a href="#contact" className="border border-slate-500 hover:border-blue-400 hover:text-blue-400 text-white px-6 py-3 rounded-lg font-medium transition">Contact Me</a>
      </div>
    </motion.section>
  )
}

export default Hero