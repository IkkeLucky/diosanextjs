'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-200 text-xl">
              Diosa
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/advisory" className="text-gray-300 hover:text-white px-3 py-2 text-sm">
                Advisory
              </Link>
              <Link href="/shop" className="text-gray-300 hover:text-white px-3 py-2 text-sm">
                Shop
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-white px-3 py-2 text-sm">
                News
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <Link href="/advisory" className="text-gray-300 hover:text-white block px-3 py-2 text-base">
              Advisory
            </Link>
            <Link href="/shop" className="text-gray-300 hover:text-white block px-3 py-2 text-base">
              Shop
            </Link>
            <Link href="/news" className="text-gray-300 hover:text-white block px-3 py-2 text-base">
              News
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

