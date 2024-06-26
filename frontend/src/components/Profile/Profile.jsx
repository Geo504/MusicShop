import Image from 'next/image'

import HeaderProfile from './HeaderProfile/HeaderProfile';
import LinkItem from './LinkItem/LinkItem';
import UserOptions from './UserOptions/UserOptions';

import style from './Profile.module.css'
import { SiShopify } from 'react-icons/si'
import { RiUserSettingsLine } from 'react-icons/ri'
import { LuBaggageClaim, LuPackagePlus } from 'react-icons/lu'
import { BiSolidHeart } from 'react-icons/bi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'



export default function Profile() {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={'https://i.ibb.co/7vskdBJ/bg-profile.png'} 
        alt=''
        fill
        sizes='40vw'
        style={{objectFit: 'cover', objectPosition: 'top'}}	
      />
    </div>

    <HeaderProfile/>

    <main className='me-auto px-4 pt-2 pb-4 w-[100%] max-w-[1100px]'>
      <section className={style.option_container}>
        <LinkItem 
          title={'Add Product'} 
          subtitle={'Add a new product for sell'} 
          icon={<LuPackagePlus className='text-4xl text-[#445058]' />}
          link={'/profile/add_product'}
        />

        <LinkItem 
          title={'My Products'} 
          subtitle={'See your products in sell'} 
          icon={<LuBaggageClaim className='text-4xl text-[#445058]' />}
          link={'/profile/my_products'}
        />

        <LinkItem 
          title={'My Shops'} 
          subtitle={'View your last shops'} 
          icon={<SiShopify className='text-4xl text-[#445058]'/>}
          link={'/'}
        />

        <LinkItem 
          title={'Profile Account'} 
          subtitle={'Setting my account info'} 
          icon={<RiUserSettingsLine className='text-4xl text-[#445058]'/>}
          link={'/'}
        />

        <LinkItem 
          title={'My Favorites'} 
          subtitle={'See all your favorite products'} 
          icon={<BiSolidHeart className='text-4xl text-[#445058]'/>}
          link={'/profile/favorites'}
        />
        
        <LinkItem 
          title={'Contact Us'} 
          subtitle={'Tell us how we can help you'} 
          icon={<TfiHeadphoneAlt className='text-4xl text-[#445058]'/>}
          link={'/profile/contact_us'}
        />

        <UserOptions />

      </section>
    </main>
    </>
  )
}
