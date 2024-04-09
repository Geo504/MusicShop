import { useState } from 'react';

import { FiFilter } from 'react-icons/fi';
import { BiSortAlt2 } from 'react-icons/bi'
import { FaRegStar } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown  } from "react-icons/ti";

export default function HeaderProduct({ handleSort }) {
  const [showSort, setShowSort] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('relevance');

  const handleShowSort = (value) => {
    handleSort(value);
    setShowSort(false);
    setSelectedFilter(value);
  }

  return (
    <div className='self-start px-4 flex gap-4 mt-6'>

      <button className='px-3 py-1 flex items-center text-gray-300 bg-gray-700 border-2 border-transparent rounded-md transition duration-[400ms] hover:text-gray-700 hover:border-gray-700 hover:bg-gray-300 hover:shadow-md'>
        <FiFilter />
        Filter
      </button>

      <div className='relative'>
        <button className='px-3 py-1 flex items-center text-gray-300 bg-gray-700 border-2 border-transparent rounded-md transition duration-[400ms] hover:text-gray-700 hover:border-gray-700 hover:bg-gray-300 hover:shadow-md' onClick={()=> setShowSort(!showSort)}>
          <BiSortAlt2 />
          Sort
        </button>
        {showSort && (
          <div className='absolute z-10 top-10 bg-[#e9e9e9ec] border-2 border-gray-700 p-2 rounded-md w-36'>
            <button className={`flex gap-1 items-center hover:bg-[#ffffffe3] min-w-full rounded ${selectedFilter==='relevance'?'font-bold' : ''}`} onClick={()=> handleShowSort('relevance')}>
              <FaRegStar />Relevance
            </button>
            <button className={`flex gap-1 items-center hover:bg-[#ffffffe3] min-w-full rounded ${selectedFilter === 'lower'?'font-bold':''}`} onClick={()=> handleShowSort('lower')}>
              <TiArrowSortedUp />Lower Price
            </button>
            <button className={`flex gap-1 items-center hover:bg-[#ffffffe3] min-w-full rounded ${selectedFilter === 'higher' ? 'font-bold' : ''}`} onClick={()=> handleShowSort('higher')}>
              <TiArrowSortedDown />Higher Price
            </button>
          </div>
        )}
      </div>

    </div>
  )
}
