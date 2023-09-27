'use client';

import style from './Pagination.module.css';
import { 
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight, 
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight 
  } from 'react-icons/md';

export default function Pagination({products, productPerPage, currentPage, setCurrentPage}) {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
    pageNumber.push(i);
  }


  const changePage = (value) => {
    if (value === 'prev') {
      if (currentPage === 1) return;
      else setCurrentPage(currentPage - 1);
    } 
    else if (value === 'next') {
      if (currentPage === pageNumber.length) return;
      else setCurrentPage(currentPage + 1);
    }
    else if (value === 'first') {
      setCurrentPage(1);
    }
    else if (value === 'last') {
      setCurrentPage(pageNumber.length);
    }
    else {
      setCurrentPage(value);
    }
  }
  
  

  return (
    <div className='pt-4 flex justify-center gap-2'>
      <button 
        className={`${style.btn} ${currentPage === 1 ? style.disabled : ''}`} 
        onClick={() => changePage('first')}>
        <MdKeyboardDoubleArrowLeft className='text-2xl'/>
      </button>
      <button 
        className={`${style.btn} ${currentPage === 1 ? style.disabled : ''}`} 
        onClick={() => changePage('prev')} >
        <MdKeyboardArrowLeft className='text-2xl'/>
      </button>

      { pageNumber.map(num => (
          <button
            key={num} 
            className={`${style.btn} ${currentPage === num ? style.active : ''}`}
            onClick={() => changePage(num)}>
            {num}
          </button>
      ))}


      <button 
        className={`${style.btn} ${currentPage === pageNumber.length ? style.disabled : ''}`} 
        onClick={() => changePage('next')}>
        <MdKeyboardArrowRight className='text-2xl'/>
      </button>
      <button 
        className={`${style.btn} ${currentPage === pageNumber.length ? style.disabled : ''}`} 
        onClick={() => changePage('last')}>
        <MdKeyboardDoubleArrowRight className='text-2xl'/>
      </button>
    </div>
  )
}
