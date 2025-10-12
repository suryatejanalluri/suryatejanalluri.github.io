import React, { useEffect, useState } from 'react'

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Nav: React.FC = () => {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between backdrop-blur-sm bg-slate-900/40 shadow-sm rounded-md">
        <a className="text-xl font-semibold tracking-wide text-slate-100" href="#home" onClick={(e) => onClick(e, 'home')}>
          Surya Nalluri
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {TABS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={(e) => onClick(e, t.id)}
              aria-current={active === t.id ? 'page' : undefined}
              className={`px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                active === t.id ? 'text-white bg-slate-800/60 border-b-2 border-indigo-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.label}
            </a>
          ))}

          {/* Resume opens a Google Doc (shared link provided by user) */}
          <a href="https://docs.google.com/document/d/1hL_XAXkYbQlTp0G_o8Un0Aj1XqUMJ-Oj/edit?usp=sharing&ouid=104375962661176662389&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white">Resume</a>
        </div>

        {/* small screens simple links */}
        <div className="md:hidden flex items-center space-x-4 overflow-x-auto pb-2">
          {TABS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={(e) => onClick(e, t.id)}
              className={`px-2 py-1 rounded text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                active === t.id ? 'text-white bg-slate-800/60' : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.label}
            </a>
          ))}
          <a href="https://docs.google.com/document/d/1hL_XAXkYbQlTp0G_o8Un0Aj1XqUMJ-Oj/edit?usp=sharing&ouid=104375962661176662389&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="px-2 py-1 rounded text-sm text-slate-300 hover:text-white">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
