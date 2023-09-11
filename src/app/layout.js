import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from '../components/NavBar/NavBar.jsx'
import MenuIcon from '@/components/NavBar/Menu/Menu'
import PageWrapper from './page_wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce',
  description: 'Web app for E-Commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <MenuIcon />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
