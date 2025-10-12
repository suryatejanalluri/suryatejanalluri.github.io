import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-slate-800">
      <Nav />
      <main className="container mx-auto px-6 py-12">
  <Hero />
  <About />
  <Skills />
  <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
