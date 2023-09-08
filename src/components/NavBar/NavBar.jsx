import Link from 'next/link'

import style from './NavBar.module.css'
import { LuMusic2 } from 'react-icons/lu'
import { IoIosArrowDown } from 'react-icons/io'
import { ImSearch } from 'react-icons/im'
import { BiCartAlt } from 'react-icons/bi'

export default function NavBar() {
  return (
    <header className={style.navBar_container}>
      <Link href={'/'} className='flex items-center text-xl'>
        <LuMusic2 />
        <h2 className='font-semibold'>MusicShop</h2>
      </Link>

      <ul className='flex'>
        <li>
          <Link href={'/products'} className={style.link}>
            Products
            <IoIosArrowDown className={style.icon_link} />
          </Link>
        </li>
        <li>
          <Link href={'/instruments'} className={style.link}>
            Instruments
            <IoIosArrowDown className={style.icon_link} />
          </Link>
        </li>
        <li>
          <Link href={'/vinyl'} className={style.link}>
            Vinyl
            <IoIosArrowDown className={style.icon_link} />
          </Link>
        </li>
      </ul>

      <div className='flex gap-2'>
        <div className='flex items-center relative'>
          <input className={style.input_find} placeholder='Search Products'></input>
          <ImSearch className={style.icon_find} />
        </div>
        <button className={style.button_cart}>
          <BiCartAlt />
        </button>
        <button className={style.button_login}>
          Login
        </button>
      </div>

    </header>
  )
}
