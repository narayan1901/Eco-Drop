// import type React from "react"
// import "@/app/globals.css"
// import { Inter } from "next/font/google"

// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Eco-Drop",
//   description: "Responsible eco-drop management solutions for a sustainable future",
//   viewport: "width=device-width, initial-scale=1, maximum-scale=1",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// import './globals.css'

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Waste Management',
  description: 'Sustainable disposal app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
