"use client"
import { useState, useEffect } from 'react';

import HeaderProduct  from './HeaderProduct/HeaderProduct';
import CardProducts from '../CardProducts/CardProducts';
import Pagination from '../Pagination/Pagination';

import style from './Products.module.css';


export default function Products({productsServer}) {
  const [productPerPage, setProductPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(productsServer);


  useEffect(() => {
    if (window.innerWidth<800 ) {
      setProductPerPage(8);
    }
    else if (window.innerWidth>800 && window.innerWidth<1055 ) {
      setProductPerPage(9);
    }
    else if (window.innerWidth>1055 && window.innerWidth<1310) {
      setProductPerPage(8);
    }
    else if (window.innerWidth>1310 && window.innerWidth<2000) {
      setProductPerPage(10);
    }
    else {
      setProductPerPage(12);
    }
  }, [currentPage]);

  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;



  const handleSort = (value) => {
    if (value === 'lower') {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    else if (value === 'higher') {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    else if (value === 'relevance') {
      setProducts(productsServer);
    }
  };



  if ( products === undefined || products.length === 0) {
    return (
      <h2 className='text-2xl font-bold text-[#445058] min-h-[30rem] flex items-center'>
        Not products to show... Sorry!
      </h2>
    )
  }
  return (
    <>
    <HeaderProduct handleSort={handleSort} />
    
    <main className='px-4 pt-2 pb-4 min-w-full'>

      <section className={style.product_container}>
        {products.map(product =>(
          <CardProducts key={product.id} id={product.id} product={product} />
        )).slice(firstIndex, lastIndex)}
      </section>

      <Pagination 
        products={products}
        productPerPage={productPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>

    </main>
    </>
  )
}
