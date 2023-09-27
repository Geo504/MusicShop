import { useAppContext } from '@/context/AppContext';
import LinkItem from './LinkItem/LinkItem';
import UserOptions from './UserOptions/UserOptions';

import style from './Profile.module.css'
import { SiShopify } from 'react-icons/si'
import { RiUserSettingsLine } from 'react-icons/ri'
import { LuBaggageClaim } from 'react-icons/lu'
import { TfiHeadphoneAlt } from 'react-icons/tfi'



export default function Profile() {
  const { store } = useAppContext();
  const { userInfo } = store


  return (
    <>
    <header className='self-start px-4 mt-14'>
      <h1 className='text-4xl font-bold'>My Profile</h1>
      <p className='text-[#445058]'>Welcome, <b>{userInfo.username}</b>!!</p>
    </header>

    <main className='px-4 pt-2 pb-4 min-w-full'>
      <section className={style.option_container}>
        <LinkItem 
          title={'Products'} 
          subtitle={'My products in sell'} 
          icon={<LuBaggageClaim className='text-4xl text-[#445058]' />}
        />

        <LinkItem 
          title={'Profile Account'} 
          subtitle={'Setting my account info'} 
          icon={<RiUserSettingsLine className='text-4xl text-[#445058]'/>}
        />

        <LinkItem 
          title={'My Shops'} 
          subtitle={'View your last shops'} 
          icon={<SiShopify className='text-4xl text-[#445058]'/>}
        />

        <LinkItem 
          title={'Contact Us'} 
          subtitle={'Tell us how we can help you'} 
          icon={<TfiHeadphoneAlt className='text-4xl text-[#445058]'/>}
        />

        <UserOptions userData={userInfo}/>

      </section>
    </main>
    </>
  )
}
