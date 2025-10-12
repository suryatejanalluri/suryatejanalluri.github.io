import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Surya Teja Nalluri — Built with React + Vite
      </div>
    </footer>
  )
}

export default Footer
