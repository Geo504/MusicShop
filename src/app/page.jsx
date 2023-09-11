"use client"
import {motion} from 'framer-motion';

import Home from '../components/Home/Home.jsx'

export default function HomeView() {
  return (
      <motion.main 
        className="flex min-h-screen px-10 flex-col items-center justify-center overflow-x-hidden" 
        initial={{ y: '-50%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeInOut'}} 
        >
        <Home />
      </motion.main>
  )
}
