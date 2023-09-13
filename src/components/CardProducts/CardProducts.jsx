import Image from 'next/image';
import Link from 'next/link';

import style from './CardProducts.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPricetagsOutline } from 'react-icons/io5';

export default function CardProducts({product, id}) {
  return (
    <section className={style.card_container}>
      <Link href={`/products/id/${id}`}>
        <div className={style.img_container}>
          <Image 
            src={product.img} 
            alt=''
            fill
            sizes='30vw'
            style={{objectFit: 'cover'}} />
        </div>
      </Link>

      <div className='px-2 pb-2'>
        <Link href={`/products/id/${id}`}>
          <h5 className='font-semibold'>{product.name}</h5>
          <p className='text-[#445058] leading-4 flex gap-1 items-center'>
            <IoPricetagsOutline />
            {product.price}
            <span className='text-sm'>€</span>
          </p>
        </Link>

        <div className='flex justify-center mt-1'>
          <button className={style.btn_buy}>
            Add to Cart
          </button>
        </div>

        <AiOutlineHeart className='absolute top-2 right-2 text-2xl text-[#dfdfdfce]'/>
      </div>
    </section>
  )
}
