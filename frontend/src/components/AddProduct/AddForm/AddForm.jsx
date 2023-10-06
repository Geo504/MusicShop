"use client"
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

import { addProductSchema } from '../../../schemas/addProductSchema';
import { uploadImage } from '../../../services/uploadImage';
import { addProduct } from '../../../services/addProduct';

import style from './AddForm.module.css';
import default_img from '../../../../public/default_img.png';
import { BiImageAdd, BiPlusMedical } from 'react-icons/bi';
import { BsTrash2 } from 'react-icons/bs';
import { LuPackage } from 'react-icons/lu';
import { IoPricetagsOutline } from 'react-icons/io5';
import { TbIcons } from 'react-icons/tb';
import { RxPencil2 } from 'react-icons/rx';
import { PiTagSimpleLight } from 'react-icons/pi';

export default function AddForm() {
  const [loadingImg, setLoadingImg] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState('');
  const imgInputRef = useRef(null);
  const {push, refresh} = useRouter();


  const {register, setValue, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(addProductSchema),
  });


  const addingImage = async(e) => {
    setLoadingImg(true);
    if (!e.target.files || e.target.files.length === 0) return;

    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    const data = await uploadImage(formData);
    
    if (!data) {
      imgInputRef.current.value = '';
      setLoadingImg(false);
      alert('Error uploading image');
      return;
    }
    else{
      setImageUrl(data.url);
      register('img', { value: data.url });
      imgInputRef.current.value = '';
      setLoadingImg(false);
    }
  }
  const deleteImage = () => {
    setImageUrl('');
    setValue('img', '');
  }


  const addTag = (newtag) => {
    if (newtag.trim() === '') return;
    else{
      setTags([...tags, newtag]);
      setInputTag('');
    }
  }


  const onSubmit = handleSubmit( async(data) => {
    setLoadingSubmit(true);
    if (tags.length > 0) data.tags = tags;

    const response = await addProduct(data);
    if (!response) {
      alert('Error adding product');
      setLoadingSubmit(false);
      return;
    }
    else{
      refresh();
      push('/profile/my_products');
      alert('Added successfully');
    }
  });


  return (
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

            <label htmlFor="file" className='absolute top-2 left-2'>
              <BiImageAdd className={style.add_icon}/>
            </label>
            <input
              type='file'
              id='file'
              className={style.file_input}
              onChange={(e)=>addingImage(e)}
              ref={imgInputRef}/>

            <button
              type='button'
              className='absolute top-2 right-2'
              onClick={deleteImage}>
              <BsTrash2 className={style.trash_icon}/>
            </button>

            {imageUrl==='' && <span>{errors.img?.message}</span>}
            {loadingImg &&
              <div className={style.loading_container}>
                <PuffLoader color={"#fff"} size={150}/> 
              </div>
            }
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
                  <option value="Instruments">Instruments</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Vinyl">Vinyl</option>
                  <option value="Services">Services</option>
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

            <div className={style.tag_input_container}>
              <PiTagSimpleLight className='text-[#fff] text-4xl mr-1'/>

              <div className='flex gap-2 flex-col w-full'>
                <div className='relative flex gap-1 w-full'>
                  <label htmlFor='tag'>Tag:</label>
                  <input 
                    type="text"
                    id='tag'
                    placeholder=''
                    value={inputTag}
                    onChange={(e) => setInputTag(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag(inputTag);
                      }
                    }}
                  />
                  <button
                    type='button'
                    className='absolute top-1 right-1 text-[#445058]'
                    onClick={() => addTag(inputTag)}
                  >
                    <BiPlusMedical />
                  </button>
                </div>

                <ul className={style.tag_list}>
                  {tags.length === 0 && 
                    <i className='text-[#445058]'>No tags added...</i>
                  }
                  {tags.map((item, index) => (
                    <li key={index} className={style.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        
        {loadingSubmit?(
          <ScaleLoader color={"#0008"} size={15} className='mx-auto'/> 
        ):(
          <button className={style.btn_submit} type='submit'>
            Add to Market
          </button>
        )}


      </form>
    </section>
  )
}
