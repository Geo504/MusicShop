import Image from 'next/image';

import EditForm from './EditForm/EditForm';

import style from './EditProduct.module.css';


export default function EditProduct({productId}) {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={'https://i.ibb.co/ByTPMfY/bg-edit-product.png'} 
        alt=''
        fill
        sizes='50vw'
        style={{objectFit: 'cover'}}
        className='scale-[1.2] translate-x-40'/>
    </div>

    <EditForm productid={productId}/>
    </>
  )
}
