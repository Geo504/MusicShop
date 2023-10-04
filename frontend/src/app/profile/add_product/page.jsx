import Link from 'next/link';

import AddProduct from '@/components/AddProduct/AddProduct';

import { MdKeyboardArrowRight } from 'react-icons/md';


export default function AddProductView() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[1900px] flex-col justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <div className='self-start mb-3 flex items-center text-[#445058] text-sm'>
            <Link href={'/profile'} className="border-b-2 border-transparent hover:border-[#445058c7] hover:text-black transition duration-[400ms]">
              Profile
            </Link>
            <MdKeyboardArrowRight className='text-base' />
            <span className='font-semibold text-[#000]'>
              Add Product
            </span>
        </div>
        <h1 className='text-4xl font-bold'>Add New Product</h1>
        <p className='text-[#445058]'>Add a new product for sell in the market place.</p>
      </header>

      <AddProduct/>
    </main>
  )
} 
