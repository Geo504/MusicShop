import { useEffect, useState } from 'react';

import ItemCart from './ItemCart/ItemCart';
import { useAppContext } from '@/context/AppContext';

import style from './Cart.module.css'
import { BiCartAlt } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { FaOpencart } from 'react-icons/fa';

export default function Cart() {
  const {store} = useAppContext();
  const [showCart, setshowCart] = useState(false);
  const [Subtotal, setSubtotal] = useState(0);
  
  const cart = store.cart;
  

  const closeCart = () => {
    setshowCart(false);
  }

  useEffect(() => {
    if (cart.length === 0){
      setSubtotal(0);
      return;
    } else{
      const total = cart.map(
        product => parseFloat(product.price* product.quantity)
      ).reduce((a, b) => a + b);
      setSubtotal(total.toFixed(2));
    }
  },[cart]);

  
  return (
    <>
    <button className={style.button_cart} onClick={() => setshowCart(!showCart)}>
      <BiCartAlt />
      {cart.length>0 && <span className={style.cart_counter}>{cart.length}</span>}
    </button>

    <div className={`${style.cart_window} ${showCart?style.open:''}`}>
      <div className='relative flex flex-col gap-4 ms-auto px-4 h-screen w-[320px] bg-[#e0e0e0e8] shadow-[0_0_1.5rem_rgb(69,81,89)]'>
        
        <header className='flex justify-between items-center pt-2'>
          <span className='text-xl font-semibold flex items-center gap-0.5'>
            <FaOpencart />
            Cart ({cart.length})
          </span>
          <button className={style.btn_close} onClick={closeCart}>
            <IoCloseSharp />
          </button>
        </header>

        {cart.length === 0?(
          <p className='flex-grow flex items-center justify-center font-semibold'>
            Your cart is empty...
          </p>
        ):(
          <>
          <div className={style.cart_list_container}>
            {cart.map(product => (
              <ItemCart key={product.id} product={product} />
            ))}
          </div>
  
          <div className='flex flex-col pt-2 text-sm border-t-2 border-[#39576b]'>
            <div className='flex justify-between'>
              <span className='text-[#445058] text-base'>Subtotal:</span>
              <span>€{Subtotal}</span>
            </div>
  
            <div className='flex justify-between'>
              <span className='text-[#445058] text-base'>Shipping:</span>
              <span>FREE</span>
            </div>
  
            <div className='flex justify-between pb-1 border-b border-[#39576b]'>
              <span className='text-[#445058] text-base'>Taxes:</span>
              <span>Calculated at checkout</span>
            </div>
  
            <div className='flex justify-between'>
              <span className='text-[#445058] text-base'>Total:</span>
              <span className='font-semibold'>€{Subtotal}</span>
            </div>
          </div>
  
          <button className={style.btn_buy}>Go to Checkout</button>
          </>
        )}
      </div>
    </div>
    </>
  )
}
