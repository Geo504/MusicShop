"use client"
import { useAppContext } from '@/context/AppContext';

export default function HeaderProfile() {
  const { store } = useAppContext();
  const { userInfo } = store

  return (
    <header className='self-start px-4 mt-14'>
      <h1 className='text-4xl font-bold'>My Profile</h1>
      <p className='text-[#445058]'>Welcome, <b>{userInfo.username}</b>!!</p>
    </header>
  )
}
