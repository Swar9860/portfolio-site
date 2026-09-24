import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-10">Have an opportunity or just want to connect? Reach out.</p>

        <form action="https://formspree.io/f/xkjgrkjg" method="POST" className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400" />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" name="email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400" />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea name="message" rows="5" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">Send Message</button>
        </form>

        <div className="flex justify-center gap-6 mt-10 text-slate-400">
          <a href="mailto:swaroopkhadke512@gmail.com" className="hover:text-blue-400">Email</a>
          <a href="https://www.linkedin.com/in/swaroop-khadke-10b961215/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/Swar9860" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://leetcode.com/u/Swaroop1010/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LeetCode</a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact