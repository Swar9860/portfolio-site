import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    "Power BI",
    "Microsoft Fabric",
    "Azure",
    "SQL",
    "Python",
    "Pandas & NumPy",
    "Scikit-learn",
    "Machine Learning",
    "NLP",
    "React.js",
    "Node.js",
    "MongoDB",
    "Flask",
  ]

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills & Tech Stack</h2>
        <p className="text-slate-400 mb-12">Tools and technologies I work with</p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-slate-800 border border-slate-700 text-slate-200 px-5 py-2 rounded-full text-sm hover:border-blue-400 hover:text-blue-400 transition">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills