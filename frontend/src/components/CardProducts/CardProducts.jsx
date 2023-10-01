import Image from 'next/image';
import Link from 'next/link';

import style from './CardProducts.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPricetagsOutline } from 'react-icons/io5';
import AddCartBtn from './AddButton/AddCartBtn';

export default function CardProducts({product, id}) {
  return (
    <section className={style.card_container}>
      <Link className='absolute top-0 left-0 h-full w-full' href={`/products/id/${id}`}>
        <div className={style.img_container}>
          <Image 
            src={product.img} 
            alt=''
            fill
            sizes='30vw'
            style={{objectFit: 'cover'}} />
        </div>
      </Link>

      <AiOutlineHeart className='absolute top-2 right-2 text-2xl text-[#dfdfdfce]'/>
      
      <div className='px-2 py-1 bg-[#ffffff9f] backdrop-blur'>
        <Link href={`/products/id/${id}`}>
          <h5 className='font-semibold'>{product.name}</h5>
          <p className='text-[#000] leading-4 flex gap-1 items-center'>
            <IoPricetagsOutline />
            {product.price}
            <span className='text-sm'>€</span>
          </p>
        </Link>

        <div className='flex justify-center mb-0.5'>
          <AddCartBtn
           classBtn={style.btn_add_cart}
           text='Add to Cart'
           product={product} />
        </div>
      </div>
    </section>
  )
}
