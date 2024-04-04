import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useAppContext } from '@/context/AppContext';
import {deleteUserProduct} from '@/services/deleteProduct.js';

import style from './DeleteModal.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoSadOutline } from 'react-icons/io5'


export default function DeleteModal({modalState ,modalFunction, modalInfo}) {
  const {store} = useAppContext();
  const {refresh} = useRouter();

  const token = store.token;


  const deleteProduct = async () => {
    const response = await deleteUserProduct(modalInfo.id, token);
    if (!response){
      alert('Something went wrong, please refresh the page');
      modalFunction(false);
      return
    }
    alert('Product deleted successfully');
    modalFunction(false);
    refresh();
  }



  return (
    <>
    { modalInfo && Object.keys(modalInfo).length > 0 && (
      <section className={`${style.modal_bg} ${modalState?'':style.hide}`}>
        <div className={style.modal}>

          <button
            className={style.close_btn} 
            onClick={()=> modalFunction(false)}>
            <AiOutlineCloseCircle />
          </button>

          <h2 className='text-2xl font-bold mt-2'>
            Delete Product
          </h2>

          <IoSadOutline className='text-6xl text-[#445058]'/>

          <div className='flex flex-col items-center justify-center text-center grow'>
            <p className=''>
              Are you sure you want to delete this product?
            </p>

            <div className={style.img_container}>
              <Image 
                src={modalInfo.img} 
                alt=''
                fill
                sizes='30vw'
                style={{objectFit: 'cover'}} />
            </div>

            <h4 className='font-semibold'>{modalInfo.name}</h4>
          </div>

          <div className='flex min-w-full justify-between font-semibold text-[#445058]'>
            <button className={style.btn_modal_cancel} onClick={() => modalFunction(false)}>
              Cancel
            </button>
            <button 
              className={style.btn_modal_ok} 
              onClick={() => deleteProduct()}>
              Confirm
            </button>
          </div>

        </div>
      </section>
    )}
    </>
  )
}
