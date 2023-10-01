import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from '../components/NavBar/NavBar.jsx'
// import PageWrapper from './page_wrapper'
import { AppProvider } from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MusicShop',
  description: 'Web app for E-Commerce of Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <NavBar />
          {/* <PageWrapper> */}
            {children}
          {/* </PageWrapper> */}
        </AppProvider>
      </body>
    </html>
  )
}
