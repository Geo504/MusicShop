import { useState } from 'react';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addProductSchema } from '../../schemas/addProductSchema';
import default_img from '../../../public/default_img.png';

import style from './AddProduct.module.css'
import { BiImageAdd } from 'react-icons/bi';
import { LuPackage } from 'react-icons/lu';
import { IoPricetagsOutline } from 'react-icons/io5';
import { TbIcons } from 'react-icons/tb';
import { RxPencil2 } from 'react-icons/rx';

export default function AddProduct() {
  const [imageUrl, setImageUrl] = useState('');

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(addProductSchema),
  });

  const addingImage = () => {
    setImageUrl('https://i.ibb.co/jWtZr79/guitar1.webp');
    register('img', { value: 'https://i.ibb.co/jWtZr79/guitar1.webp' });
  }

  const onSubmit = handleSubmit( async(data) => {
    console.log(data);
    alert('Sended successfully');
    setImageUrl('');
    reset();
  });


  return (
    <>
    <header className='self-start px-4 mt-14'>
      <h1 className='text-4xl font-bold'>Add New Product</h1>
      <p className='text-[#445058]'>Add a new product for sell in the market place.</p>
    </header>

    <section className={style.form_container}>
      <form className={style.form} onSubmit={onSubmit}>

        <div className={style.data_container}>
          <div className={style.img_container}>

            <Image 
              src={imageUrl || default_img} 
              alt=''
              fill
              sizes='40vw'
              style={{objectFit: 'cover'}} />
            <button
              type='button'
              className='absolute top-2 left-2 '
              onClick={addingImage}>
              <BiImageAdd className=' text-4xl text-[#fff]'/>
            </button>
            {imageUrl==='' && <span>{errors.img?.message}</span>}
          </div>

          <div className='flex flex-col gap-4 grow'>
            <div className={style.input_container}>
              <LuPackage className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='name'>Product Name:</label>
                <input 
                  type="text"
                  id='name'
                  placeholder='' 
                  {...register('name')} />
                {<span>{errors.name?.message}</span>}
              </div>
            </div>

            <div className={style.input_container}>
              <IoPricetagsOutline className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='price'>Price:</label>
                <input 
                  type="text"
                  id='price'
                  placeholder='' 
                  {...register('price')} />
                {<span>{errors.price?.message}</span>}
              </div>
            </div>

            <div className={style.input_container}>
              <TbIcons className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='category'>Category:</label>
                <select 
                  type="text"
                  id='category'
                  placeholder='' 
                  {...register('category')}
                >
                  <option value="">Choose a category...</option>
                  <option value="Concert">Concert Ticket</option>
                  <option value="Instrument">Instrument</option>
                  <option value="Vinyl">Vinyl</option>
                  <option value="Clothes">Clothes</option>
                </select>
                {<span>{errors.category?.message}</span>}
              </div>
            </div>

            <div className={style.input_container}>
              <RxPencil2 className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='description'>Description:</label>
                <textarea 
                  type="text" 
                  id='description'
                  placeholder='' 
                  {...register('description')} />
                {<span>{errors.description?.message}</span>}
              </div>
            </div>

          </div>
        </div>

        <button className={style.btn_submit} type='submit'>Add to Market</button>

      </form>
    </section>
    </>
  )
}
