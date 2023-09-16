import { useEffect, useState } from "react";
import Image from 'next/image';

import { useAppContext } from '@/context/AppContext';

import style from './ItemCart.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { BsTrash2 } from 'react-icons/bs';

export default function ItemCart({product}) {
  const { actions } = useAppContext();
  const [count, setCount] = useState(product.quantity);

  const addProduct = actions.addProduct;
  const deleteProduct = actions.deleteProduct;
  const priceToNum = parseFloat(product.price);


  const increment = () => {
    setCount(prev=> prev + 1);
  }
  const decrement = () => {
    if (count === 1) return;
    else setCount(prev=> prev - 1);
  }

  useEffect(() => {
    addProduct({...product, quantity: count});
  },[count])


  return (
    <>
    <section className='flex rounded-lg overflow-hidden min-h-[4.6rem]'>

      <div className={style.img_container}>
        <Image 
          src={product.img} 
          alt=''
          fill
          sizes='20vw'
          style={{objectFit: 'cover'}} />
      </div>

      <div className='px-2 pb-2 bg-[#ffffff] flex-grow flex flex-col justify-between'>
        <div>
          <p className='text-sm'>{product.name}</p>
          <p className='text-xs text-[#445058]'>
            €{priceToNum} x {count} = <b>€{(priceToNum*count).toFixed(2)}</b>
          </p>
        </div>

        <div className="justify-self-end flex justify-between text-sm">
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
            className={style.btn_buy}
            onClick={()=>deleteProduct(product.id)}>
            <BsTrash2 />
          </button>
        </div>
      </div>

    </section>
    </>
  )
}