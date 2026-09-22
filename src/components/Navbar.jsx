import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-slate-900 text-white px-6 py-4 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Swaroop</h1>

        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="hover:text-blue-400 cursor-pointer">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 cursor-pointer">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400 cursor-pointer">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a></li>
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4">
          <li><a href="#about" className="hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400 cursor-pointer" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar