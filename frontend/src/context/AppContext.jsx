'use client'
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

import { getUser } from '../services/getUser.js';
import { getLikes ,updateLikes } from '../services/userLikes.js';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [likes, setLikes] = useState([]);

  const [cart, setCart] = useState([]);
  const {refresh} = useRouter();

  
  async function getUserInfo(token){
    const response = await getUser(token)
    if (response){
      setUserInfo(response);
      setLoggedIn(true);

      const res = await getLikes(token)
      if (res) {
        return setLikes(res);
      }
    }
  }

  // async function getUserLikes() {
  //   const res = await getLikes()
  //   if (res) {
  //     return setLikes(res);
  //   }
  // }



  useEffect(() => {
    const cookies = Cookies.get()
    if (cookies.token){
      getUserInfo(cookies.token);
      setToken(cookies.token);
    }
  }, []);


  useEffect(() => {
    if (token!==''){
      setLoggedIn(true);
      Cookies.set('token', token);
    }
    else {
      setLoggedIn(false);
      setUserInfo({});
      setLikes([]);
      Cookies.remove('token');
    }
  }, [token])



  const handleLikes = async(id) => {
    const response = await updateLikes(id, token)
    if (response) {
      return setLikes(response);
    }
  }


  const addProduct = (product) => {
    if (cart.some(item => item.id === product.id)) {
      setCart(cart.map(item => {
        if (item.id === product.id) return product;
        return item;
      }))
    }
    else setCart([...cart, product]);
  }
  const deleteProduct = (id) => {
    setCart(cart.filter(product => product.id !== id));
  }

  


  const store = useMemo(() => {
    return { token, loggedIn, userInfo, cart, likes }
  }, [ loggedIn, userInfo, cart, likes]);

  const actions = {
    setToken,
    setLoggedIn,
    setUserInfo,
    addProduct,
    deleteProduct,
    handleLikes
  }

  return(
    <AppContext.Provider value={{store, actions}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
