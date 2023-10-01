import Image from 'next/image'

import addproduct from '../../../public/addproduct.png';
import AddForm from './AddForm/AddForm';

import style from './AddProduct.module.css'

export default function AddProduct() {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={addproduct} 
        alt=''
        height={'100%'}
        sizes='50vw'
        style={{objectFit: 'contain'}}
        className='' />
    </div>

    <header className='self-start px-4 mt-14'>
      <h1 className='text-4xl font-bold'>Add New Product</h1>
      <p className='text-[#445058]'>Add a new product for sell in the market place.</p>
    </header>

    <AddForm />
    </>
  )
}
