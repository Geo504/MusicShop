import Link from 'next/link';

import ProductList from "@/components/Loading/ProductList";

import { MdKeyboardArrowRight } from 'react-icons/md';


export default function Loading() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center overflow-x-hidden'>

      <header className='self-start px-4 mt-14'>
        <div className='self-start mb-3 flex items-center text-[#445058] text-sm'>
            <Link href={'/profile'} className="border-b-2 border-transparent hover:border-[#445058c7] hover:text-black transition duration-[400ms]">
              Profile
            </Link>
            <MdKeyboardArrowRight className='text-base' />
            <span className='font-semibold text-[#000]'>
              My Products
            </span>
        </div>
        <h1 className='text-4xl font-bold'>My Products</h1>
        <p className='text-[#445058]'>A list of your products for sell in the shop.</p>
      </header>

      <ProductList />

    </main>
  )
}