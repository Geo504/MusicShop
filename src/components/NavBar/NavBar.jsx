'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import LinkItem from './LinkItem/LinkItem';
import {product, instruments, vinyl} from './route'

import style from './NavBar.module.css'
import { LuMusic2 } from 'react-icons/lu'
import { ImSearch } from 'react-icons/im';
import { BiCartAlt } from 'react-icons/bi';

export default function NavBar() {
  const path = usePathname();

  return (
    <header className={style.navBar_container}>

      <Link href={'/'} className={style.brand_container}>
        <LuMusic2 />
        <h2 className='font-semibold'>MusicShop</h2>
      </Link>

      <ul className={style.li_container}>
        <LinkItem 
          title={'Products'} 
          class_btn={`${path=='/products'?style.active:''}`}
          routes={product} />

        <LinkItem 
          title={'Instruments'} 
          class_btn={`${path=='/instruments'?style.active:''}`}
          routes={instruments} />

        <LinkItem 
          title={'Vinyl'} 
          class_btn={`${path=='/vinyl'?style.active:''}`}
          routes={vinyl} />
      </ul>


      <div className='flex gap-2'>
        <div className='flex items-center relative'>
          <input className={style.input_find} placeholder='Search Products'></input>
          <ImSearch className={style.icon_find} />
        </div>
        <button className={style.button_cart}>
          <BiCartAlt />
        </button>
        <Link href={'/login'} className={style.button_login}>
          Login
        </Link>
      </div>

    </header>
  )
}