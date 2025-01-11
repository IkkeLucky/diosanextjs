import Link from 'next/link'
import { Instagram, Facebook, Twitter, Youtube, PinIcon as Pinterest } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#382a41] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo Column */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/logodiosapurple.jpg"
            alt="Passarella Diosa Logo"
            height={250}
            width={250}
          />
        </div>

        {/* Links Column */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/delivery" className="hover:text-white transition-colors">
                Delivery Information
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg mb-4">Contact</h3>
          <div className="space-y-2">
            <p>Address: Hohe Bleichen 8, 20354 Hamburg</p>
            <p>Phone: Only Whatsapp Messages</p>
            <p>Hours: 10:00 - 18:00, Mon - Sat</p>
            <div className="mt-4">
              <p className="mb-2">Follow us</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Pinterest className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-16">
        <p>© 2024 Passarella Diosa. All rights reserved.</p>
      </div>
    </footer>
  )
}

