import { useState } from 'react';

import style from './HeaderProduct.module.css';
import { FiFilter } from 'react-icons/fi';
import { BiSortAlt2 } from 'react-icons/bi'
import { FaRegStar } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown  } from "react-icons/ti";


export default function HeaderProduct({ handleSort, handleFilter }) {
  const [showSort, setShowSort] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('relevance');

  const [showFilter, setShowFilter] = useState(false);
  const MAX_VALUE_LIMIT = 2000;
  const [valueMinPrice, setValueMinPrice] = useState(0);
  const [valueMaxPrice, setValueMaxPrice] = useState(MAX_VALUE_LIMIT);
  const [percent, setPercent] = useState([0,0]);
  const [inputMinValue, setInputMinValue] = useState(valueMinPrice);
  const [inputMaxValue, setInputMaxValue] = useState(valueMaxPrice);


  
  const handleSortClick = () => {
    setShowSort(!showSort);
    if (showFilter) setShowFilter(false);
  };
  
  const handleShowSort = (value) => {
    handleSort(value);
    setShowSort(false);
    setSelectedFilter(value);
  }
  


  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    if (showSort) setShowSort(false);
  };

  const priceGap = 25;

  const handleMinChange = (e) => {
    let minValue = Math.max(0, parseInt(e.target.value) || 0);
    let maxValue = valueMaxPrice;

    minValue = Math.min(minValue, maxValue - priceGap);

    setInputMinValue(minValue);
    setValueMinPrice(minValue);
    setPercent([(minValue / MAX_VALUE_LIMIT) * 100, percent[1]]);

    return minValue;
  };
  const handleMaxChange = (e) => {
    let maxValue = e.target.value === ''
      ? MAX_VALUE_LIMIT
      : Math.min(MAX_VALUE_LIMIT, parseInt(e.target.value));
    let minValue = valueMinPrice;

    maxValue = Math.max(maxValue, minValue + priceGap);

    setInputMaxValue(maxValue);
    setValueMaxPrice(maxValue);
    setPercent([percent[0], 100 - ((maxValue / MAX_VALUE_LIMIT) * 100)]);

    return maxValue;
  };

  const handleMinBlur = (e) => {
    const newMinValue = handleMinChange(e);
    handleFilter(newMinValue, valueMaxPrice);
  };
  const handleMaxBlur = (e) => {
    const newMaxValue = handleMaxChange(e);
    handleFilter(valueMinPrice, newMaxValue);
  };



  return (
    <div className='self-start px-4 flex gap-4 mt-6'>

      <div className='relative'>
        <button className='px-3 py-1 flex items-center text-gray-300 bg-gray-700 border-2 border-transparent rounded-md transition duration-[400ms] hover:text-gray-700 hover:border-gray-700 hover:bg-gray-300 hover:shadow-md' onClick={handleFilterClick}>
          <FiFilter />
          Filter
        </button>

        <div className={`absolute z-10 top-10 p-2 bg-[#e9e9e9ec] border-2 border-gray-700 rounded-md w-44 transition-all duration-150 overflow-hidden origin-top ${showFilter?'scale-y-100':'scale-y-0'}`}>
          <label>Price range:</label>

            <div className='relative w-full mt-1 h-[10px] rounded-[5px] border border-[#51626d98] bg-[#d3d3d3]'>
              <div 
                className={`absolute h-[9px] rounded-[5px] bg-[#51626d98]`}
                style={{ left: `${percent[0]}%`, right: `${percent[1]}%`}}
              ></div>
            </div>

            <div className='relative'>
              <input
                id='minRange'
                className={`${style.rangeInput}`}
                type="range"
                min="0"
                max={MAX_VALUE_LIMIT}
                value={valueMinPrice}
                onChange={handleMinChange}
                onMouseUp={()=> handleFilter(valueMinPrice, valueMaxPrice)}
              />
              <input
                id='maxRange'
                className={`${style.rangeInput}`}
                type="range"
                min="0"
                max={MAX_VALUE_LIMIT}
                value={valueMaxPrice}
                onChange={handleMaxChange}
                onMouseUp={()=> handleFilter(valueMinPrice, valueMaxPrice)}
              />
            </div>

          <div className='flex justify-between text-sm mt-3'>
            <div className='relative'>
              <input
                type="number"
                id='minPrice'
                className={style.inputValue}
                value={inputMinValue}
                onChange={(e)=> setInputMinValue(e.target.value)}
                onBlur={handleMinBlur}
              />
              <span className='absolute text-gray-400 right-1'>€</span>
            </div>
            <span className='text-gray-400'>-</span>
            <div className='relative'>
              <input
                type="number"
                id='maxPrice'
                className={style.inputValue}
                value={inputMaxValue}
                onChange={(e)=> setInputMaxValue(e.target.value)}
                onBlur={handleMaxBlur}
              />
              <span className='absolute text-gray-400 right-1 top-[1px]'>€</span>
            </div>
          </div>

        </div>
      </div>


      <div className='relative'>
        <button className='px-3 py-1 flex items-center text-gray-300 bg-gray-700 border-2 border-transparent rounded-md transition duration-[400ms] hover:text-gray-700 hover:border-gray-700 hover:bg-gray-300 hover:shadow-md' onClick={handleSortClick}>
          <BiSortAlt2 />
          Sort
        </button>

        <div className={`absolute z-10 top-10 p-2 bg-[#e9e9e9ec] border-2 border-gray-700 rounded-md w-36 transition-all duration-150 overflow-hidden origin-top ${showSort?'scale-y-100':'scale-y-0'}`}>
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
      </div>

    </div>
  )
}
