import React from 'react'

type Props = { name: string; className?: string }

const SkillIcon: React.FC<Props> = ({ name, className }) => {
  const size = 18
  switch (name.toLowerCase()) {
    case 'java':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#007396" d="M12.001 21.5c-2.485 0-4.5-1.015-4.5-2.27 0-1.254 2.015-2.27 4.5-2.27s4.5 1.016 4.5 2.27c0 1.255-2.015 2.27-4.5 2.27z" />
          <path fill="#f89820" d="M9.5 6.5s.6-.6 2.5-.6 4 1 4 1-2.4-.2-4.6.6c-1.2.5-2.4.6-2.4.6s.1-.8.0-1.6z" />
        </svg>
      )
    case 'react':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <g fill="#61DAFB">
            <circle cx="64" cy="64" r="16" />
            <g stroke="#61DAFB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <ellipse cx="64" cy="64" rx="42" ry="18" transform="rotate(0 64 64)" />
              <ellipse cx="64" cy="64" rx="42" ry="18" transform="rotate(60 64 64)" />
              <ellipse cx="64" cy="64" rx="42" ry="18" transform="rotate(120 64 64)" />
            </g>
          </g>
        </svg>
      )
    case 'angular':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#DD0031" d="M125 10L235 52v85c0 39-28 75-70 92-42-17-70-53-70-92V52z" />
          <path fill="#C3002F" d="M125 10L35 52v85c0 39 28 75 70 92V10z" opacity="0.9" />
          <path fill="#FFF" d="M85 170l20-56h10l20 56h-12l-6-18h-22l-6 18H85z" />
        </svg>
      )
    case 'javascript':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="128" height="128" rx="24" fill="#F7DF1E" />
          <path d="M82.7 93.2c2.9 4.8 6.6 8.4 14.1 8.4 6.9 0 11.3-3.4 11.3-8.2 0-5.7-4.5-7.7-12-10.9l-4.1-1.8c-3.8-1.7-6.3-3-6.3-6.6 0-3.3 2.5-5.8 6.4-5.8 3.5 0 6 1.2 7.8 4.2l-4.3 2.8c-.9-1.6-1.9-2.2-3.5-2.2-1.6 0-2.6 1-2.6 2.2 0 1.5 1 2.1 3.3 3 4.6 1.7 7.7 3.5 7.7 7.6 0 4.4-3.5 7.4-8.6 7.4-5.7 0-9.4-2.7-11.2-6z" fill="#000" />
          <path d="M45.3 92.7c1.9 3.3 3.6 6.1 7.8 6.1 3.9 0 6.3-1.5 6.3-7.3V53h11.4v39.2c0 11.7-6.9 16.9-16.9 16.9-9 0-14.7-4.6-17.3-10.1z" fill="#000" />
        </svg>
      )
    case 'typescript':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="128" height="128" rx="24" fill="#3178C6" />
          <path d="M40 90V38h48v12H52v8h32v12H52v20H40z" fill="#fff" />
        </svg>
      )
    case 'python':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#3776AB" d="M12 2c-3 0-4 1.5-4 1.5v2.5h6V6s-1-1-2-1z" />
          <path fill="#FFD43B" d="M12 22c3 0 4-1.5 4-1.5v-2.5H10v1s1 1 2 1z" />
        </svg>
      )
    case 'docker':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#2496ED" d="M2 14h20v6H2z" />
          <rect x="4" y="10" width="3" height="3" fill="#fff" />
        </svg>
      )
    case 'aws':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2 14c2-2 5-4 10-4s8 2 10 4c-2 2-5 4-10 4S4 16 2 14z" fill="#FF9900" />
        </svg>
      )
    case 'sql':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <ellipse cx="12" cy="5" rx="7" ry="2" fill="#0ea5a4" />
          <path d="M5 5v6c0 1.1 3.1 2 7 2s7-.9 7-2V5" fill="#0891b2" />
        </svg>
      )
    case 'spring':
    case 'spring boot':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#6DB33F" d="M12 2c-1 0-4 1-6 3-2 2-3 5-3 7 0 4 4 6 9 6s9-2 9-6c0-3-2-8-9-10z" />
        </svg>
      )
    case 'jenkins':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="6" r="3" fill="#E01E5A" />
        </svg>
      )
      
    case 'kafka':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#231F20" />
        </svg>
      )
    case 'sjsu':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="2" y="4" width="20" height="16" rx="2" fill="#0b1220" />
          <text x="12" y="15" fontSize="7" fill="#fff" textAnchor="middle" fontFamily="Arial">SJSU</text>
        </svg>
      )
    case 'school':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L5 8.2v6.3l7 3.5 7-3.5V8.2L12 9.5z" fill="#94a3b8" />
        </svg>
      )
    default:
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#94a3b8" />
        </svg>
      )
  }
}

export default SkillIcon
