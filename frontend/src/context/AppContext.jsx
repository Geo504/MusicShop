'use client'
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

import { verifyToken } from '../services/verifyToken.js';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState([]);


  useEffect(() => {
    const cookies = Cookies.get()
    if (cookies.token){
      async function fetchUserData(){
        const response = await verifyToken()
        if (response){
          setUserInfo(response);
          setLoggedIn(true);
        }
      }
      fetchUserData();
    }
  }, []);


  useEffect(() => {
    if (Object.keys(userInfo).length > 0){
      setLoggedIn(true);
    }
    return
  }, [userInfo])



  const handleLikes = (id) => {
    if (likes.includes(id)) {
      setLikes(likes.filter(item => item !== id));
    }
    else{
      setLikes([...likes, id]);
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
    return { loggedIn, userInfo, cart, likes }
  }, [ loggedIn, userInfo, cart, likes]);

  const actions = {
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
