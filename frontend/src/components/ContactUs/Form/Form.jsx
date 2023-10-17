"use client"
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

import { contactUsSchema } from '../../../schemas/contactUsSchema';
import { uploadImage } from '../../../services/uploadImage';

import style from './Form.module.css';
import default_img from '../../../../public/default_img.png';
import { BiImageAdd } from 'react-icons/bi';
import { BsTrash2 } from 'react-icons/bs';
import { MdOutlineSubject } from 'react-icons/md';
import { TbIcons } from 'react-icons/tb';
import { RxPencil2 } from 'react-icons/rx';

export default function Form() {
  const [loadingImg, setLoadingImg] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const imgInputRef = useRef(null);
  const {push} = useRouter();


  const {register, setValue, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(contactUsSchema),
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
      setValue('img', data.url);
      imgInputRef.current.value = '';
      setLoadingImg(false);
    }
  }
  const deleteImage = () => {
    setImageUrl('');
    setValue('img', '');
  }


  const onSubmit = handleSubmit( async(data) => {
      setLoadingSubmit(true);
      console.log(data);
      push('/profile/contact_us/message_sent');
  });



  return (
     <section className={style.form_container}>
      <form className={style.form} onSubmit={onSubmit}>

        <div className={style.data_container}>



          <div className='flex flex-col gap-4 grow'>
            <div className={style.input_container}>
              <MdOutlineSubject className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='subject_message'>Subject Message:</label>
                <input 
                  type="text"
                  id='subject_message'
                  placeholder='' 
                  {...register('subject_message')} />
                {<span>{errors.subject_message?.message}</span>}
              </div>
            </div>

            <div className={style.input_container}>
              <TbIcons className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='message_categorie'>Message Category:</label>
                <select 
                  type="text"
                  id='message_categorie'
                  placeholder='' 
                  {...register('message_categorie')}
                >
                  <option value="">Choose a category...</option>
                  <option value="Payment Problem">Payment Problem</option>
                  <option value="Order Problem">Order Problem</option>
                  <option value="Comment">Comment</option>
                  <option value="Unexpected">This is not what I expected</option>
                  <option value="Others">Others</option>
                </select>
                {<span>{errors.message_categorie?.message}</span>}
              </div>
            </div>

            <div className={style.input_container}>
              <RxPencil2 className='text-[#fff] text-4xl mr-1'/>

              <div className='flex flex-col w-full'>
                <label htmlFor='message'>Your Message:</label>
                <textarea 
                  type="text" 
                  id='message'
                  placeholder='' 
                  {...register('message')} />
                {<span>{errors.message?.message}</span>}
              </div>
            </div>

          </div>


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

            {imageUrl==='' && <span>You can attach an image</span>}
            {loadingImg &&
              <div className={style.loading_container}>
                <PuffLoader color={"#fff"} size={150}/> 
              </div>
            }
          </div>

        </div>
        
        {loadingSubmit?(
          <ScaleLoader color={"#0008"} size={15} className='mx-auto'/> 
        ):(
          <button className={style.btn_submit} type='submit'>
            Send Message
          </button>
        )}


      </form>
    </section>
  )
}
