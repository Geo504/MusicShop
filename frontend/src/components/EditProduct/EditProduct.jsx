import Image from 'next/image';

import bg from '../../../public/bg_edit_product.png';
import EditForm from './EditForm/EditForm';

import style from './EditProduct.module.css';


export default function EditProduct({productId}) {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={bg} 
        alt=''
        height={'100%'}
        sizes='50vw'
        style={{objectFit: 'cover'}}
       className='scale-[1.2]'/>
    </div>

    <EditForm productid={productId}/>
    </>
  )
}
