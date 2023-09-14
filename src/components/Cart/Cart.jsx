import { useState } from 'react';
import Image from 'next/image';

import CounterCart from './CounterCart/CounterCart';

import style from './Cart.module.css'
import { BiCartAlt } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { FaOpencart } from 'react-icons/fa';

export default function Cart() {
  const [showCart, setshowCart] = useState(false);

  const closeCart = () => {
    setshowCart(false);
  }


  return (
    <>
    <button className={style.button_cart} onClick={() => setshowCart(!showCart)}>
      <BiCartAlt />
    </button>

    <div className={`${style.cart_window} ${showCart?style.open:''}`}>
      <div className='relative flex flex-col gap-4 ms-auto px-4 min-h-screen w-[320px] bg-[#e0e0e0e8] shadow-[0_0_1.5rem_rgb(69,81,89)]'>
        
        <header className='flex justify-between items-center pt-2'>
          <span className='text-xl font-semibold flex items-center gap-0.5'>
            <FaOpencart />
            Cart
          </span>
          <button className={style.btn_close} onClick={closeCart}>
            <IoCloseSharp />
          </button>
        </header>

        <section className='flex rounded-lg overflow-hidden'>
          <div className={style.img_container}>
            <Image 
              src={'https://i.ibb.co/jWtZr79/guitar1.webp'} 
              alt=''
              fill
              sizes='30vw'
              style={{objectFit: 'cover'}} />
          </div>
          <div className='px-2 pb-2 bg-[#ffffff] flex-grow flex flex-col justify-between'>
            <div>
              <p className='text-sm'>Electro-Acoustic Guitar</p>
              <p className='text-xs text-[#445058]'>€225.00 x 1 = 225.00€</p>
            </div>
            <CounterCart />
          </div>
        </section>

      </div>
    </div>
    </>
  )
}
