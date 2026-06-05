import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
 
  { to: '/editing', label: 'Editing' },
  { to: '/vfx', label: 'VFX' },
  { to: '/motion-gfx', label: 'Motion GFX' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-white font-semibold underline underline-offset-4 decoration-white/60'
        : 'text-red-100 hover:text-white'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgb(210,55,55)] bg-[rgb(235,78,78)] shadow-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-tight text-white">
          <NavLink to={'/'}>Home</NavLink> </span>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-[rgb(210,55,55)] bg-[rgb(235,78,78)] px-6 py-4 md:hidden">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
