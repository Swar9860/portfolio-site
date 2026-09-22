import { motion } from 'framer-motion'
import activities from '../data/activities'
import nssPhoto from '../assets/nss.jpg'

const photos = {
  "NSS VIIT": nssPhoto,
}

function Activities() {
  return (
    <motion.section
      id="activities"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Extracurricular Activities</h2>
        <p className="text-slate-400 mb-12 text-center">Beyond academics and work</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((item) => (
            <div key={item.title} className="bg-slate-800 rounded-xl p-5 text-center">
              {photos[item.title] ? (
                <img src={photos[item.title]} alt={item.title} className="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
              ) : (
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 font-bold text-xl">
                  {item.title.charAt(0)}
                </div>
              )}
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-blue-400 text-xs mb-2">{item.role}</p>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Activities