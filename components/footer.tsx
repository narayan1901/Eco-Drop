import Link from "next/link"
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Recycle className="h-6 w-6" />
              <span className="text-xl font-bold">Eco-Drop Management</span>
            </Link>
            <p className="text-green-100 mb-4">
              Providing responsible eco-drop management solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-100 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/recycling-centers" className="text-green-100 hover:text-white">
                  Recycling Centers
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-green-100 hover:text-white">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/request-pickup" className="text-green-100 hover:text-white">
                 Eco-Drop Collection
                </Link>
              </li>
              <li>
                <Link href="/recycling-centers" className="text-green-100 hover:text-white">
                  Recycling Centers
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-green-100 hover:text-white">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-green-100 hover:text-white">
                 Eco-Drop Education
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-green-100 hover:text-white">
                  Recycling Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-100" />
                <span className="text-green-100">123 Green Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-100" />
                <Link href="tel:+11234567890" className="text-green-100 hover:text-white">
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-100" />
                <Link href="mailto:info@ewaste.com" className="text-green-100 hover:text-white">
                  info@ewaste.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} Eco-Drop Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

