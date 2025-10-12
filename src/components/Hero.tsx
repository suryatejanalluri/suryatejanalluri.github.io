import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
const Hero3DInner = React.lazy(() => import('./Hero3DInner'))

const Hero: React.FC = () => {
  return (
  <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Surya Teja Nalluri
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-300 max-w-xl"
        >
          Full-stack engineer focused on building production-ready applications across frontend and backend, with experience shipping features from design through deployment, monitoring, and maintenance. Java, Python, React, and cloud-native architectures.
        </motion.p>

        <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <a href="#contact" className="px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 shadow-lg">Get in touch</a>
        </motion.div>

        <motion.div className="mt-8 text-sm text-slate-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <div>Location: Los Angeles, CA</div>
          <div>Email: <a href="mailto:surya.teja98.nllr@gmail.com" className="text-slate-200">surya.teja98.nllr@gmail.com</a></div>
        </motion.div>
      </div>

      <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-600/20 to-sky-600/10">
        <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
          <Hero3DInner />
        </Suspense>
      </div>
    </section>
  )
}

export default Hero
