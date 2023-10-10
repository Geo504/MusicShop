import Image from 'next/image';

// import bg from '../../../public/bg_add_product.png';
import AddForm from './AddForm/AddForm';

import style from './AddProduct.module.css';


export default function AddProduct() {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={'https://i.ibb.co/10zC2cg/bg-add-product.png'} 
        alt=''
        fill
        sizes='40vw'
        style={{objectFit: 'cover'}}
      />
    </div>

    <AddForm />
    </>
  )
}
