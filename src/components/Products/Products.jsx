import { useState, useEffect } from 'react';

import CardProducts from '../CardProducts/CardProducts';
import Pagination from '../Pagination/Pagination';
import { allProducts } from '@/context/product'

import style from './Products.module.css';
import { FiFilter } from 'react-icons/fi';
import { BiSortAlt2 } from 'react-icons/bi'

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productPerPage, setProductPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

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
    <header className='self-start px-4 mt-14'>
      <h1 className='text-4xl font-bold'>Products</h1>
      <p className='text-[#445058]'>See and buy all the products in the store</p>
      <div className='flex gap-4 mt-6'>
        <button className={style.btn}>
          <FiFilter />
          Filter
        </button>
        <button className={style.btn}>
          <BiSortAlt2 />
          Sort
        </button>
      </div>
    </header>
    
    <main className='px-4 pt-2 pb-4 min-w-full'>
      <section className={style.product_container}>
        { products.map(product => {
          return(
            <CardProducts key={product.id} id={product.id} product={product} />
          )
        }).slice(firstIndex, lastIndex)}
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
