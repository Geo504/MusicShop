'use client'
import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [cart, setCart] = useState([]);

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
    return { cart }
  }, [cart]);

  const actions = {
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
