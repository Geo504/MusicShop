import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { allProducts } from '@/context/product';
import CounterCart from './CounterCart/CounterCart';

import style from './DetailView.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';


export default function DetailView({id}) {
  const [product, setProduct] = useState({});


  useEffect(() => {
    allProducts.map( productData => {
      if (productData.id == id) {
        setProduct(productData);
        return;
      }
      else return;
    });
  }, []);



  if (Object.keys(product).length === 0) {
    return (
      <div>Loading...</div>
    )
  }
  else return (
    <div className='max-w-[1400px] w-full'>

      <header className='self-start mt-14 px-4 flex items-center text-[#445058] text-sm'>
        <Link href={'/products'} className={style.btn_link}>Products</Link>
        <MdKeyboardArrowRight className='text-base' />
        <span>Instruments</span>
        <MdKeyboardArrowRight className='text-base' />
        <span className='font-semibold text-[#000]'>{product.name}</span>
      </header>

      <section className={style.product_container}>
        <div className={style.img_container}>
          <AiOutlineHeart className='absolute top-2 right-2 text-4xl text-[#dfdfdfce] z-10'/>
          <Image 
            src={product.img} 
            alt=''
            fill
            sizes='50vw'
            priority={false}
            style={{objectFit: 'cover'}} />
        </div>

        <div className={style.text_container}>
          <div className='pb-2 border-b-2 border-[#39576b]'>
            <h4 className='text-2xl font-semibold'>{product.name}</h4>
            <p className='text-[#445058] text-sm'>
              Sold by: <b>{product.seller}</b>
            </p>
          </div>

          <p className='flex items-center font-semibold text-xl text-[#1f612a]'>
            <IoPricetagsOutline className='mr-2' />
            {product.price}
            <span className='text-base'>€</span>
          </p>

          <CounterCart product={product}/>
          
          <div>
            <h5 className='font-semibold text-lg'>About this product</h5>
            <p className='text-[#445058] bg-[#ecececb9] px-3 py-2 rounded-lg'>
              {product.description}
            </p>
          </div>

          <div>
            <h5 className='font-semibold text-lg'>Tags</h5>
            <div className='bg-[#ecececb9] px-3 py-2 rounded-lg text-sm flex gap-2 flex-wrap'>
              {product.tags.map( tag => {
                return (
                  <span key={tag} className={style.tag}>{tag}</span>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
