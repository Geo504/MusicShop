import { FiFilter } from 'react-icons/fi';
import { BiSortAlt2 } from 'react-icons/bi'

export default function HeaderProduct() {
  return (
      <div className='self-start px-4 flex gap-4 mt-6'>
        <button className='px-3 py-1 flex items-center text-gray-300 bg-gray-700 border-2 border-transparent rounded-md transition duration-[400ms] hover:text-gray-700 hover:border-gray-700 hover:bg-gray-300 hover:shadow-md'>
          <FiFilter />
          Filter
        </button>
        <button className='px-3 py-1 flex items-center text-gray-300 bg-gray-700 border-2 border-transparent rounded-md transition duration-[400ms] hover:text-gray-700 hover:border-gray-700 hover:bg-gray-300 hover:shadow-md'>
          <BiSortAlt2 />
          Sort
        </button>
      </div>
  )
}
