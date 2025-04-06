
"use client"

import { useState } from "react"
import Link from "next/link"
import { Recycle, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 shadow">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-green-700 dark:text-green-300">Eco-Drop</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Recycling Centers", "/recycling-centers"],
            ["Education", "/education"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium hover:text-green-600 transition-colors dark:text-white"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/request-pickup">Request Pickup</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[385px] bg-white dark:bg-gray-900">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Recycle className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-green-700 dark:text-green-300">Eco-Drop</span>
              </Link>

              <nav className="flex flex-col gap-4">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Services", "/services"],
                  ["Recycling Centers", "/recycling-centers"],
                  ["Education", "/education"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-base font-medium hover:text-green-600 transition-colors py-2 dark:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <ThemeToggle />

              <div className="flex flex-col gap-3 mt-4">
                <Button asChild variant="outline" className="w-full justify-center py-6">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="w-full justify-center bg-green-600 hover:bg-green-700 text-white py-6">
                  <Link href="/request-pickup" onClick={() => setIsOpen(false)}>
                    Request Pickup
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
