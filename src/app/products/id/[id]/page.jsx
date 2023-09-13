"use client"
import {motion} from 'framer-motion';

import DetailView from '@/components/DetailView/DetailView';

export default function Detail({params}) {
  return (
    <motion.main 
      className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden"      initial={{ y: '-50%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut'}}
    >
      <DetailView id={params.id} />
    </motion.main>
  )
}
