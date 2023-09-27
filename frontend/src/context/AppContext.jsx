'use client'
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

import { verifyToken } from '../services/verifyToken.js';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [cart, setCart] = useState([]);


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
    return { loggedIn, userInfo, cart }
  }, [ loggedIn, userInfo, cart]);

  const actions = {
    setLoggedIn,
    setUserInfo,
    addProduct,
    deleteProduct
  }

  return(
    <AppContext.Provider value={{store, actions}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
