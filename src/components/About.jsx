import { motion } from 'framer-motion'
import profilePic from '../assets/profile.jpg'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img src={profilePic} alt="Swaroop" className="w-40 h-40 rounded-full object-cover shrink-0" />

          <div className="text-slate-300 leading-relaxed">
            <p className="mb-4">I'm a 2025 B.Tech Information Technology graduate from Vishwakarma Institute of Information Technology (VIIT), Pune, with a CGPA of 8.75.</p>
            <p className="mb-4">I completed a 6-month Data Science internship at iLink Digital, a Microsoft-certified partner, where I worked hands-on with Microsoft Fabric, Power BI, ADLS Gen2, and SQL/Python to build data-driven solutions.</p>
            <p>I'm currently looking for opportunities as a Data Analyst, BI Developer, AI/ML Engineer, or Software Engineer — and I'm an immediate joiner.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-400">8.75</p>
            <p className="text-slate-400 text-sm">CGPA</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">6 mo</p>
            <p className="text-slate-400 text-sm">Internship</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">2</p>
            <p className="text-slate-400 text-sm">Certifications</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">2025</p>
            <p className="text-slate-400 text-sm">Graduate</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About