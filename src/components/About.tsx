import React from 'react'
import SkillIcon from './SkillIcon'

type WorkItem = {
  company: string
  title: string
  period: string
  skills: string[]
  bullets?: string[]
  logo?: string
}

const WORK: WorkItem[] = [
  {
    company: 'Civilience',
    title: 'Full Stack — Public Health Platform',
    period: '2024 — 2025',
    skills: ['react', 'typescript', 'aws'],
    bullets: [
      'Built serverless APIs and workflows (AWS Lambda) and a React frontend used by public-health teams.',
      'Implemented monitoring dashboards and analytics to increase observability for field teams.',
    ],
    logo: '/company/civilience.svg',
  },
  {
    company: 'DBS Bank',
    title: 'Full Stack Software Engineer — Institutional Banking (Account Opening)',
    period: '2019 — 2022',
    skills: ['angular', 'java', 'spring', 'docker', 'jenkins'],
    bullets: [
      'Developed and maintained the account opening frontend using Angular with complex multi-step forms and identity integrations.',
      'Built Java/Spring backend services for onboarding workflows and downstream integrations.',
      'Owned CI/CD pipelines and deployments using Jenkins and Docker; implemented blue/green rollouts.',
    ],
    logo: '/company/dbs.svg',
  },
]

const EDUCATION = [
  {
    school: 'San Jose State University',
    university: undefined,
    degree: 'Master of Science, Computer Science',
    period: '2022 — 2025',
  },
  {
    school: 'Velagapudi Ramakrishna Siddhartha Engineering College',
    university: 'Jawaharlal Nehru Technological University, Kakinada',
    degree: 'Bachelor of Technology, Computer Science',
    period: '2015 — 2019',
  },
]

const About: React.FC = () => {
  return (
    <section className="mt-12">
      <div className="max-w-content-xl mx-auto">
        <h2 id="work" className="text-2xl font-bold">Work</h2>
        <div className="mt-6 space-y-6">
          {WORK.map((w) => (
            <article key={w.company} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 mx-auto max-w-full lg:max-w-3xl transform transition-transform hover:-translate-y-1 focus-within:scale-[1.01]">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-sm font-medium overflow-hidden p-1">
                    {w.logo ? <img src={w.logo} alt={`${w.company} logo`} className="w-full h-full object-contain" /> : <span className="text-sm">{w.company.split(' ')[0]}</span>}
                  </div>
                  <div>
                    <div className="font-semibold">{w.company}</div>
                    <div className="text-slate-400 text-sm">{w.title}</div>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      {w.skills.map((s) => (
                        <div key={s} className="inline-flex items-center gap-2 px-2 py-1 bg-slate-800/60 rounded-full text-xs text-slate-200">
                          <SkillIcon name={s} />
                          <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-slate-400 text-sm">{w.period}</div>
              </div>

              {w.bullets && (
                <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
                  {w.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

  <h2 id="education" className="text-2xl font-bold mt-12">Education</h2>
        <div className="mt-6 space-y-4">
          {EDUCATION.map((e) => (
            <article key={e.school} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 mx-auto max-w-full lg:max-w-3xl">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-sm font-medium">🎓</div>
                  <div>
                    <div className="font-semibold">{e.school}</div>
                    <div className="text-slate-400 text-sm">{e.university && <>{e.university} · </>} {e.degree}</div>
                  </div>
                </div>
                <div className="text-slate-400 text-sm">{e.period}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
