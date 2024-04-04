"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAppContext } from '@/context/AppContext';
import { deleteUser } from '@/services/deleteUser';

import style from './UserOptions.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TbShieldLock } from 'react-icons/tb'
import { BiLogOutCircle } from 'react-icons/bi'
import { AiOutlineUserDelete } from 'react-icons/ai'
import { PiMaskSad } from 'react-icons/pi'
import { BsHeartbreak } from 'react-icons/bs'
import { GiHouseKeys } from 'react-icons/gi'


export default function UserOptions() {
  const { store, actions } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const {push} = useRouter();

  const { setToken } = actions

  const updateModal = (data) => {
    if (data ==='logout'){
      setModalInfo({
        title: 'Logout', 
        subtitle: 'Are you sure you want to logout? Come back soon!', 
        icon: <BiLogOutCircle className='text-6xl text-[#445058]'/>,
        secondIcon: <PiMaskSad className='text-4xl text-[#445058]'/>,
        functionType: 'logout'
      })
    }
    if (data ==='delete'){
      setModalInfo({
        title: 'Delete Account', 
        subtitle: 'Are you sure you want to delete your account?', 
        icon: <AiOutlineUserDelete className='text-6xl text-[#445058]'/>,
        secondIcon: <BsHeartbreak className='text-4xl text-[#445058]'/>,
        functionType: 'delete'
      })
    }
    if (data === 'changePassword'){
      setModalInfo({
        title: 'Change Password', 
        subtitle: 'Are you sure you want to change your password account?', 
        icon: <TbShieldLock className='text-6xl text-[#445058]'/>,
        secondIcon: <GiHouseKeys className='text-4xl text-[#445058]'/>,
      })
    }
    setShowModal(true);
  }

  
  const modalFunction = async (input) => {
    if (input === 'logout'){
      setToken('');
      push('/');
    }
    if (input === 'delete'){
      const resp = await deleteUser();
      if (resp){
        setToken('');
        alert('Account deleted successfully');
        push('/');
      }
    }
  }

  return (
    <>
    <button className={style.option_card} onClick={() => updateModal('changePassword')}>
      <TbShieldLock className='text-4xl text-[#445058]'/>
      <div className='text-left'>
        <h4 className='text-lg leading-5'>Change Password</h4>
        <p className='text-[#445058] text-sm'>Change your password account</p>
      </div>
    </button>

    <button className={style.option_card} onClick={() => updateModal('logout')}>
      <BiLogOutCircle className='text-4xl text-[#445058]'/>
      <div className='text-left'>
        <h4 className='text-lg leading-5'>Logout</h4>
        <p className='text-[#445058] text-sm'>Logout from your account</p>
      </div>
    </button>

    <button className={style.option_card} onClick={() => updateModal('delete')}>
      <AiOutlineUserDelete className='text-4xl text-[#445058]'/>
      <div className='text-left'>
        <h4 className='text-lg leading-5'>Delete Account</h4>
        <p className='text-[#445058] text-sm'>Delete your account</p>
      </div>
    </button>



    <section className={`${style.modal_container} ${showModal?'':style.hide}`}>
      <div className={style.modal}>

        <button
         className={style.close_btn} 
         onClick={()=> setShowModal(false)}>
          <AiOutlineCloseCircle />
        </button>

        <h2 className='text-2xl font-bold mt-8'>
          {modalInfo.title}
        </h2>

        {modalInfo.icon}

        <div className='flex flex-col items-center justify-center text-center grow'>
          <p className='mt-6'>
            {modalInfo.subtitle}
          </p>
          {modalInfo.secondIcon}
        </div>

        <div className='flex min-w-full justify-between font-semibold text-[#445058]'>
          <button className={style.btn_modal_cancel} onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button 
            className={style.btn_modal_ok} 
            onClick={() => modalFunction(modalInfo.functionType)}>
            Confirm
          </button>
        </div>

      </div>
    </section>
    </>
  )
}
