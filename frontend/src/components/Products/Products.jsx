"use client"
import { useState, useEffect } from 'react';

import CardProducts from '../CardProducts/CardProducts';
import Pagination from '../Pagination/Pagination';

import style from './Products.module.css';


export default function Products({products}) {
  const [productPerPage, setProductPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


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


  return (
    <>
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
