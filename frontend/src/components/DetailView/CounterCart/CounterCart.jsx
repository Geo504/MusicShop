"use client"
import { useState } from "react";

import { useAppContext } from '@/context/AppContext';

import style from './CounterCart.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaCartArrowDown } from 'react-icons/fa6';

export default function CounterCart({product}) {
  const {store, actions } = useAppContext();
  const [count, setCount] = useState(1);

  const addProduct = actions.addProduct;
  const cart = store.cart;


  const increment = () => {
    setCount(prev=> prev + 1);
  }
  const decrement = () => {
    if (count === 1) return;
    else setCount(prev=> prev - 1);
  }

  if (cart.some(item => item.id === product.id)) {
    return (
      <div className="flex border-b-2 border-[#39576b] pb-6">
        <span className='rounded-2xl bg-[#25642c] text-[#cecece] mt-1 py-0.5 px-4'>
          <FaCartArrowDown className='text-xl my-0.5'/>
        </span>
      </div>
    )
  }
  return (
    <section className="flex gap-4 border-b-2 border-[#39576b] pb-6">
      <div className='flex text-[#fff] inline-block'>
        <button className={style.btn_decrement} onClick={decrement}>
          <FiMinus />
        </button>
        <input className={style.input} type='number' value={count} readOnly/>
        <button className={style.btn_increment} onClick={increment}>
          <FiPlus />
        </button>
      </div>

      <button
        className={style.btn_addToCart}
        onClick={() => addProduct({...product, quantity: count})}>
        Add to Cart
      </button>
    </section>
  )
}
