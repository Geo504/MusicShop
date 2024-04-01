'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { useAppContext } from '@/context/AppContext';
import LinkItem from './LinkItem/LinkItem';
import MenuIcon from './Menu/Menu'
import Cart from '../Cart/Cart';
import {product, instruments, others} from './route'
import {getSearchProducts} from '@/services/getProducts'

import style from './NavBar.module.css'
import { LuMusic2 } from 'react-icons/lu'
import { ImSearch } from 'react-icons/im';



export default function NavBar() {
  const {store} = useAppContext();
  const path = usePathname();
  
  const {loggedIn} = store
  

  const [searchValues, setSearchValues] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value.trim()
    if (value === ''){
      setSearchValues(null)
      return
    }

    const search = await getSearchProducts(value)
    if (search) {
      setSearchValues(search)
    }
  }


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
          class_btn={`${path=='/products' || path.includes('/concert')?style.active:''}`}
          routes={product} />

        <LinkItem 
          title={'Instruments'} 
          class_btn={`${path.includes('/instruments')?style.active:''}`}
          routes={instruments} />

        <LinkItem 
          title={'Others'} 
          class_btn={`${path.includes('/accessories')||path.includes('/clothes')||path.includes('/services')?style.active:''}`}
          routes={others} />
      </ul>


      <div className='flex gap-2'>
        <div className='flex items-center relative'>
          <input
            className={style.input_find}
            placeholder='Search Products'
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          ></input>
          <ImSearch className={style.icon_find} />
          
          {isFocused && searchValues && 
            <div className={style.search_container}>
            {searchValues.length>0 ? (
                searchValues.map((search, index) => (
                  <Link
                    key={index}
                    href={`/detail_view/${search.id}`} 
                    onClick={() => setIsFocused(false)}>
                    <div className={style.search_item}>
                      <Image
                        src={search.img} 
                        alt={search.name} 
                        quality={10} 
                        width={500} 
                        height={500}/>
                      <div className='flex flex-col'>
                        <p className='m-0 p-0 leading-[1rem]'>{search.name}</p>
                        <p className='text-xs'>
                          {search.user.username} <span className='text-[0.6rem] text-[#445058]'>({search.price} €)</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))

              ):<p className='text-center'>No results found</p>
            }
            </div>
          }
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
