"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "History", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Historical Sites", href: "#" },
    { name: "Documentaries", href: "#" },
    { name: "Events", href: "#" },
  ]

  return (
    <nav className="w-full bg-[#A17E46]">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white text-2xl font-bold">
            TFP
          </a>

          <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:text-gray-200 text-sm">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <div className="relative hidden sm:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pr-10 rounded-full focus:outline-none bg-[#C4A775] text-white placeholder-white/70"
                placeholder="Search..."
              />
              <Search className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none ml-4">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-white hover:text-gray-200 py-2">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

