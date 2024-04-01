"use client"
import { useState, useEffect } from 'react';

import HeaderProduct  from '../Products/HeaderProduct/HeaderProduct';
import CardUserProduct from '../CardUserProduct/CardUserProduct';
import Pagination from '../Pagination/Pagination';

import style from './UserProducts.module.css';
import DeleteModal from './DeleteModal/DeleteModal';


export default function UserProducts({products}) {
  const [productPerPage, setProductPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});


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

  const handleModal = (product) => {
    setShowModal(true);
    setModalInfo(product);
  }


  if ( !products || products.length === 0) {
    return (
      <h2 className='text-2xl font-bold text-[#445058] min-h-[30rem] flex items-center'>
        Not products to show... Sorry!
      </h2>
    )
  }
  return (
    <>
    <HeaderProduct />
    
    <main className='px-4 pt-2 pb-4 min-w-full'>

      <section className={style.product_container}>
        {products.map(product =>(
          <CardUserProduct key={product.id} product={product} handleModal={handleModal}/>
        )).slice(firstIndex, lastIndex)}
      </section>

      <Pagination 
        products={products}
        productPerPage={productPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>

      <DeleteModal 
        modalFunction={setShowModal}
        modalState={showModal}
        modalInfo={modalInfo}
      />

    </main>
    </>
  )
}