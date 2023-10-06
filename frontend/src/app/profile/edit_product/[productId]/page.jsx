import Link from 'next/link';

import EditProduct from '@/components/EditProduct/EditProduct';

import { MdKeyboardArrowRight } from 'react-icons/md';


export default function EditProductView({params}) {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[1900px] flex-col justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <div className='self-start mb-3 flex items-center text-[#445058] text-sm'>
            <Link href={'/profile'} className="border-b-2 border-transparent hover:border-[#445058c7] hover:text-black transition duration-[400ms]">
              Profile
            </Link>
            <MdKeyboardArrowRight className='text-base' />
            <Link href={'/profile/my_products'} className="border-b-2 border-transparent hover:border-[#445058c7] hover:text-black transition duration-[400ms]">
              My Product
            </Link>
            <MdKeyboardArrowRight className='text-base' />
            <span className='font-semibold text-[#000]'>
              Edit Product
            </span>
        </div>
        <h1 className='text-4xl font-bold'>Edit Your Product</h1>
        <p className='text-[#445058]'>Edit your product in the market place.</p>
      </header>

      <EditProduct productId={params.productId}/>
    </main>
  )
} 
