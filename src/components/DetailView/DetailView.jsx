import { useState, useEffect } from 'react';
import Image from 'next/image';

import { allProducts } from '@/context/product';

import style from './DetailView.module.css';
import { IoPricetagsOutline } from 'react-icons/io5';

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


  return (
    <>
    <header className='self-start mt-14 px-4 py-4'>
      <span className='text-sm font-semibold'>{product.name}</span>
    </header>

    <section className={style.product_container}>
      <div className={style.img_container}>
        {product.img?(
          <Image 
            src={product.img} 
            alt=''
            fill
            sizes='50vw'
            style={{objectFit: 'cover'}} />
        ):(
          <div className='flex items-center justify-center min-h-full'>
            Loading...
          </div>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <div className='pb-2 border-b-2 border-[#39576b]'>
          <h4 className='text-2xl font-semibold'>{product.name}</h4>
          <p className='text-[#445058] text-sm'>Sold by: {product.seller}</p>
        </div>

        <p className='flex items-center text-xl'>
          <IoPricetagsOutline className='mr-2' />
            {product.price}
            <span className='text-base'>€</span>
        </p>
        
        <div>
          <h5>Description</h5>
          <p className='text-[#445058]'>{product.description}</p>
        </div>
      </div>
    </section>
    </>
  )
}
