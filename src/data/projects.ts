type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 'pdac',
    title: 'An Evidence-Based Approach to Predicting Pancreatic Ductal Adenocarcinoma',
    description:
      'Academic work applying evidential reasoning (Dempster–Shafer Theory) to integrate uncertain clinical evidence and improve PDAC prediction. Publication and DOI linked.',
    tech: ['Python', 'Evidential Reasoning', 'Dempster–Shafer Theory'],
    link: 'https://doi.org/10.31979/etd.a8hr-ks8a'
  }
]

export default projects
