import { useState } from "react";

import style from './CounterCart.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function CounterCart() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prev=> prev + 1);
  }
  const decrement = () => {
    if (count === 1) return;
    else setCount(prev=> prev - 1);
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

    <button className={style.btn_addToCart}>
      Add to Cart
    </button>
    </section>
  )
}
