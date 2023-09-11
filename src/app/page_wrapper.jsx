"use client"
import {AnimatePresence, motion} from 'framer-motion';
// import { usePathname } from 'next/navigation';


export default function PageWrapper({children}) {
  // const path = usePathname();
  // console.log(path);

  return (
    <AnimatePresence initial={false} >
      {/* <motion.div
        key={path}
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        exit={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut'}}
      > */}
        {children}
      {/* </motion.div> */}
    </AnimatePresence>
  )
}
