'use client'
import { useState } from 'react';
import Link from 'next/link';

import BurgerButton from '../BurgerButton/BurgerButton';

import style from './Menu.module.css';
import { LuMusic2 } from 'react-icons/lu';

export default function MenuIcon() {
  const [showMenu, setshowMenu] = useState(false);

  const closeMenu = () => {
    setshowMenu(false);
  }

  return (
    <>
      <div className={style.menu_icon} onClick={() => setshowMenu(!showMenu)}>
        <BurgerButton open={showMenu} />
      </div>


      <div className={`${style.menu_window} ${showMenu?style.open:''}`}>
        <div className='relative flex flex-col gap-6 px-4 items-start justify-center min-h-screen w-[260px] bg-[#e0e0e0e8] shadow-[0_0_1.5rem_rgb(69,81,89)]'>

          <Link href={'/'} onClick={closeMenu} className={style.brand_container}>
            <LuMusic2 />
            <h2 className='font-semibold'>MusicShop</h2>
          </Link>

          <div className='flex flex-col gap-1 min-w-full'>
            <h3 className='text-xl font-semibold'>Products</h3>
            <Link href={'/products'} onClick={closeMenu} className={style.link}>
              All Products
            </Link>
            <Link href={'/'} onClick={closeMenu} className={style.link}>
              Buy Tickets Concert
            </Link>
          </div>

          <div className='flex flex-col gap-1  min-w-full'>
            <h3 className='text-xl font-semibold'>Instruments</h3>
            <Link href={'/instruments'} onClick={closeMenu} className={style.link}>
              All Instruments
            </Link>
            <Link href={'/'} onClick={closeMenu} className={style.link}>
              New One's
            </Link>
          </div>

          <div className='flex flex-col gap-1  min-w-full'>
            <h3 className='text-xl font-semibold'>Vinyl</h3>
            <Link href={'/vinyl'} onClick={closeMenu} className={style.link}>
              All Vinyl
            </Link>
            <Link href={'/'} onClick={closeMenu} className={style.link}>
              By genre
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
