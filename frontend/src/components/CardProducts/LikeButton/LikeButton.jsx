import { useEffect, useState } from 'react';

import { useAppContext } from '@/context/AppContext';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function LikeButton({id}) {
  const [like, setLike] = useState(false);
  const {store, actions} = useAppContext();

  const handleLikes = actions.handleLikes;
  const {likes, loggedIn} = store;


  useEffect(() => {
    setLike(likes.includes(id));
  },[likes]);


  if (!loggedIn) {
    return
  };
  return (
    <button 
      className='absolute top-2 right-2 p-1 text-2xl text-[#dfdfdfce] rounded-3xl bg-[#44505838] origin-center hover:scale-[1.25] transition duration-500 ease-in-out'
      onClick={() => handleLikes(id)}>
      {like?<AiFillHeart />:<AiOutlineHeart />}
    </button>
  )
}