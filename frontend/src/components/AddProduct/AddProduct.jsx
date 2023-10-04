import Image from 'next/image';

import bg from '../../../public/bg_add_product.png';
import AddForm from './AddForm/AddForm';

import style from './AddProduct.module.css';


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

    <AddForm />
    </>
  )
}
