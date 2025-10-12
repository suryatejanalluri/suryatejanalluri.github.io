import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mt-16">
      <div className="max-w-content-xl mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 space-y-8">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              className="mx-auto max-w-full lg:max-w-3xl"
              whileHover={{ y: -6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Large folder-style thumbnail (left / top) */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="relative block md:col-span-1 rounded-xl overflow-hidden shadow-lg group h-56 md:h-auto"
                >
                  <div className="h-full w-full bg-gradient-to-br from-amber-400 to-yellow-500 p-6 flex flex-col justify-between">
                    {/* subtle oversized folder svg */}
                    <svg className="absolute top-4 right-4 w-20 h-20 opacity-15 text-white pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="currentColor" />
                    </svg>

                    {/* Title over decorative lines */}
                    <div className="relative z-10">
                      <h3 className="text-white font-semibold text-lg leading-tight">{p.title}</h3>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 bg-white/20 rounded w-5/6" />
                        <div className="h-2 bg-white/14 rounded w-3/4" />
                        <div className="h-2 bg-white/10 rounded w-2/3" />
                      </div>
                    </div>

                    {/* translucent Click here pill */}
                    <div className="flex justify-end">
                      <span className="bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium ring-1 ring-white/10 transition-opacity opacity-95 group-hover:opacity-100">
                        Open Project
                      </span>
                    </div>
                  </div>
                </a>

                {/* Details */}
                <div className="md:col-span-2 p-6 rounded-xl bg-slate-800/60 border border-slate-700 h-full flex flex-col justify-between">
                  <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>

                  <div className="mt-4 flex flex-col gap-3">
                    <div className="text-indigo-400 font-mono text-sm truncate">{p.tech.join(' • ')}</div>

                    <div className="text-amber-400 text-sm font-medium">
                      <span className="block text-slate-300 text-xs mb-1">DOI:</span>
                      <a href={p.link} target="_blank" rel="noreferrer" className="break-words underline hover:text-amber-300" aria-label={`Open DOI for ${p.title}`}>
                        {p.link}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
