import { useAppContext } from '@/context/AppContext';

import { FaCartArrowDown } from 'react-icons/fa6';

export default function AddCartBtn({classBtn, text, product}) {
  const {store, actions} = useAppContext();
  const addProduct = actions.addProduct;
  const cart = store.cart;

  if (cart.some(item => item.id === product.id)) {
    return (
      <span className='rounded-2xl bg-[#25642c] text-[#cecece] mt-1 py-0.5 px-4'>
        <FaCartArrowDown className='text-xl my-0.5'/>
      </span>
    )
  };
  return (
    <button className={classBtn} onClick={() => addProduct(product)}>
      {text}
    </button>
  )
}
