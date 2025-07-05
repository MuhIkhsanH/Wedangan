// src/components/Navbar.jsx
"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-red-800 text-white shadow-lg font-sans z-50 relative" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl sm:text-2xl font-bold">
            <Link href="/" className="hover:text-red-200 transition-colors duration-200">
              ☕ Wedangan Mas Ipung
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/" className="hover:text-red-200 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/menu" className="hover:text-red-200 transition-colors duration-200 font-medium">
              Menu
            </Link>
            <Link href="/tentang" className="hover:text-red-200 transition-colors duration-200 font-medium">
              Tentang
            </Link>
            <Link href="/lokasi" className="hover:text-red-200 transition-colors duration-200 font-medium">
              Lokasi
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)}
              className="text-white hover:text-red-200 focus:outline-none focus:text-red-200 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${open ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden bg-red-700 transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-3">
          <Link 
            href="/" 
            className="block py-3 px-4 text-white hover:bg-red-600 rounded-lg transition-colors duration-200 font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            🏠 Home
          </Link>
          <Link 
            href="/menu" 
            className="block py-3 px-4 text-white hover:bg-red-600 rounded-lg transition-colors duration-200 font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            🍽️ Menu
          </Link>
          <Link 
            href="/tentang" 
            className="block py-3 px-4 text-white hover:bg-red-600 rounded-lg transition-colors duration-200 font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            ℹ️ Tentang
          </Link>
          <Link 
            href="/lokasi" 
            className="block py-3 px-4 text-white hover:bg-red-600 rounded-lg transition-colors duration-200 font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            📍 Lokasi
          </Link>
        </div>
      </div>
    </nav>
  )
}
