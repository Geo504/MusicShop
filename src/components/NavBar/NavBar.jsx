'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import LinkItem from './LinkItem/LinkItem';

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
        <LinkItem title={'Products'} class_btn={`${path=='/products'?style.active:''}`}>
          <Link href={'/products'} className={`${style.link}`}>
            All Products
            <span>Take a look of all the products</span>
          </Link>
          <Link href={'/products'} className={style.link}>
            Buy Tickets Concert
            <span>Go build some goods memories</span>
          </Link>
        </LinkItem>

        <LinkItem title={'Instruments'} class_btn={`${path=='/instruments'?style.active:''}`}>
          <Link href={'/instruments'} className={style.link}>
            All Instruments
            <span>Take a look of our instruments</span>
          </Link>
          <Link href={'/instruments'} className={style.link}>
            New One's
            <span>Buy something new for yourself</span>
          </Link>
        </LinkItem>

        <LinkItem title={'Vinyl'} class_btn={`${path=='/vinyl'?style.active:''}`}>
          <Link href={'/vinyl'} className={style.link}>
            Vinyl
            <span>Go back in time and get vintage</span>
          </Link>
          <Link href={'/vinyl'} className={style.link}>
            By genre
            <span>Lose yourself and friends with any type of music</span>
          </Link>
        </LinkItem>
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
