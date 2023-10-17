import Link from 'next/link';

import ContactUs from '@/components/ContactUs/ContactUs';

import { MdKeyboardArrowRight } from 'react-icons/md';


export default function ContactUsView() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[1900px] flex-col justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <div className='self-start mb-3 flex items-center text-[#445058] text-sm'>
            <Link href={'/profile'} className="border-b-2 border-transparent hover:border-[#445058c7] hover:text-black transition duration-[400ms]">
              Profile
            </Link>
            <MdKeyboardArrowRight className='text-base' />
            <span className='font-semibold text-[#000]'>
              Contact Us
            </span>
        </div>
        <h1 className='text-4xl font-bold'>Contact Us</h1>
        <p className='text-[#445058]'>There is a problem? We are here to help you.</p>
      </header>

      <ContactUs/>
    </main>
  )
} 
