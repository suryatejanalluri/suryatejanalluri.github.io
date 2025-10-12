import React from 'react'
import SkillIcon from './SkillIcon'

const skills = [
  { name: 'Java', key: 'java' },
  { name: 'Python', key: 'python' },
  { name: 'JavaScript', key: 'javascript' },
  { name: 'TypeScript', key: 'typescript' },
  { name: 'Angular', key: 'angular' },
  { name: 'React', key: 'react' },
  { name: 'Spring Boot', key: 'spring' },
  { name: 'REST APIs', key: 'default' },
  { name: 'SQL (PostgreSQL, SQL Server)', key: 'sql' },
  { name: 'AWS', key: 'aws' },
  { name: 'Docker', key: 'docker' }
]

const Skills: React.FC = () => {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold">Core Skills</h3>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        {skills.map((s) => (
          <div key={s.name} className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-800/60">
            <SkillIcon name={s.key} />
            <div className="text-sm text-slate-200">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
