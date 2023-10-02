import Image from 'next/image';
import Link from 'next/link';

import bg from '../../../public/bg_add_product.png';
import AddForm from './AddForm/AddForm';

import style from './AddProduct.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function AddProduct() {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={bg} 
        alt=''
        height={'100%'}
        sizes='50vw'
        style={{objectFit: 'contain'}}
        className='' />
    </div>


    <header className='self-start px-4 mt-14'>
      <div className='self-start mb-3 flex items-center text-[#445058] text-sm'>
          <Link href={'/profile'} className={style.btn_link}>
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

    <AddForm />
    </>
  )
}
