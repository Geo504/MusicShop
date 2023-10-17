import Link from 'next/link';

import { PiMaskHappyFill } from 'react-icons/pi';
import { MdKeyboardArrowLeft } from 'react-icons/md';


export default function ContactUsView() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[1900px] flex-col items-center justify-center overflow-x-hidden">
      
      <PiMaskHappyFill className='text-[#445058] text-6xl' />
      <h1 className='text-4xl font-bold mb-4'>Message Successfully Sent</h1>
      <p className='text-[#445058] mb-4'>
        As soon as we receive your message, one of our staff we will contact you! Thanks for your patience.
      </p>

      <Link href={'/profile'} className='text-[#445058] flex items-center border-b-2 border-transparent hover:border-[#445058c7] hover:text-black transition duration-[400ms]'>
        <MdKeyboardArrowLeft />
        <i>Go Back</i>
        
      </Link>
    </main>
  )
} 
