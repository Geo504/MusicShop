"use client";
import { useState, useEffect } from 'react';

import { useAppContext } from '@/context/AppContext';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function LikeButton({id}) {
  const [like, setLike] = useState(false);
  const {store, actions} = useAppContext();
  const handleLikes = actions.handleLikes;
  const {likes, loggedIn} = store;
  
  console.log(loggedIn);
  useEffect(() => {
    if (likes.includes(id)) {
      setLike(true);
    }
    else{
      setLike(false);
    }
  },[likes]);


  if (!loggedIn) {
    return
  };
  return (
    <button 
      className='absolute top-2 right-2 p-1 text-3xl text-[#dfdfdfce] rounded-3xl bg-[#4450584e] z-10 hover:rotate-[360deg] transition duration-500 ease-in-out'
      onClick={() => handleLikes(id)}>
      {like?<AiFillHeart />:<AiOutlineHeart />}
    </button>
  )
}