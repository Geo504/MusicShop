import Link from 'next/link'

import style from './NavBar.module.css'
import { LuMusic2 } from 'react-icons/lu'
import { IoIosArrowDown } from 'react-icons/io'
import { ImSearch } from 'react-icons/im';
import { BiCartAlt } from 'react-icons/bi';

export default function NavBar() {
  return (
    <header className={style.navBar_container}>

      <Link href={'/'} className={style.brand_container}>
        <LuMusic2 />
        <h2 className='font-semibold'>MusicShop</h2>
      </Link>

      <ul className={style.li_container}>
        <li>
          <button href={'/products'} className={style.link_btn}>
            Products
            <IoIosArrowDown className={style.icon_link} />

            <div className={style.products_links}>
              <Link href={'/products'} className={style.link}>
                All Products
                <span>Take a look of all the products</span>
              </Link>
              <Link href={'/'} className={style.link}>
                Buy Tickets Concert
                <span>Go build some goods memories</span>
              </Link>
            </div>
          </button>
        </li>

        <li>
          <button className={style.link_btn}>
            Instruments
            <IoIosArrowDown className={style.icon_link} />

            <div className={style.products_links}>
              <Link href={'/instruments'} className={style.link}>
                All Instruments
                <span>Take a look of our instruments</span>
              </Link>
              <Link href={'/'} className={style.link}>
                New One's
                <span>Buy something new for yourself</span>
              </Link>
            </div>
          </button>
        </li>

        <li>
          <button className={style.link_btn}>
            Vinyl
            <IoIosArrowDown className={style.icon_link} />

            <div className={style.products_links}>
              <Link href={'/vinyl'} className={style.link}>
                Vinyl
                <span>Go back in time and get vintage</span>
              </Link>
              <Link href={'/'} className={style.link}>
                By genre
                <span>Lose yourself and friends with any type of music</span>
              </Link>
            </div>
          </button>
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
        <Link href={'/login'} className={style.button_login}>
          Login
        </Link>
      </div>

    </header>
  )
}
