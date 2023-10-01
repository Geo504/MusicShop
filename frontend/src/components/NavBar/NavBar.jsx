'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { useAppContext } from '@/context/AppContext';
import LinkItem from './LinkItem/LinkItem';
import MenuIcon from './Menu/Menu'
import Cart from '../Cart/Cart';
import {product, instruments, others} from './route'

import style from './NavBar.module.css'
import { LuMusic2 } from 'react-icons/lu'
import { ImSearch } from 'react-icons/im';



export default function NavBar() {
  const {store} = useAppContext();
  const path = usePathname();

  const {loggedIn} = store

  return (
    <>
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
          title={'Others'} 
          class_btn={`${path.includes('/others')?style.active:''}`}
          routes={others} />
      </ul>


      <div className='flex gap-2'>
        <div className='flex items-center relative'>
          <input className={style.input_find} placeholder='Search Products'></input>
          <ImSearch className={style.icon_find} />
        </div>
        
        <Cart />

        <Link href={`${loggedIn?'/profile':'/login'}`} className={style.button_login}>
          {`${loggedIn?'Profile':'Login'}`}
        </Link>
      </div>

    </header>
    <MenuIcon />
    </>
  )
}
