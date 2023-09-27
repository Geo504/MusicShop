"use client"
import Login from '@/components/Login/Login'
import {motion} from 'framer-motion';

export default function LoginView() {
  return (
    <motion.main
     className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden"
     initial={{ y: '-50%', opacity: 0 }}
     animate={{ y: '0%', opacity: 1 }}
     exit={{ opacity: 1 }}
     transition={{ duration: 0.35, ease: 'easeInOut'}} 
     >
      <Login />
    </motion.main>
  )
}
