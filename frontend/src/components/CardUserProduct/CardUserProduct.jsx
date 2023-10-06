import Image from 'next/image';
import Link from 'next/link';

import style from './CardUserProduct.module.css'
import { IoTrashBin, IoPricetagsOutline } from 'react-icons/io5';
import { BsFillGearFill } from 'react-icons/bs';

export default function CardUserProduct({product}) {
  return (
    <section className={style.card_container}>
      <Link className='absolute top-0 left-0 h-full w-full' href={`/products/id/${product.id}`}>
        <div className={style.img_container}>
          <Image 
            src={product.img} 
            alt=''
            fill
            sizes='30vw'
            style={{objectFit: 'cover'}} />
        </div>
      </Link>

      <button className={style.btn_delete}>
        <IoTrashBin />
      </button>
      
      <div className='px-2 py-1 bg-[#ffffff9f] backdrop-blur'>
        <Link href={`/products/id/${product.id}`}>
          <h5 className='font-semibold'>{product.name}</h5>
          <p className='text-[#000] leading-4 flex gap-1 items-center'>
            <IoPricetagsOutline />
            {product.price}
            <span className='text-sm'>€</span>
          </p>
        </Link>

        <div className='flex justify-center mb-0.5'>
          <Link href={`/profile/edit_product/${product.id}`} className={style.btn_edit}>
            <BsFillGearFill className='text-lg' />
            Edit
          </Link>
        </div>
      </div>
    </section>
  )
}
