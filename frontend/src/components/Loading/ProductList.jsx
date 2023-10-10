import style from '@/components/Products/Products.module.css';

export default function ProductList() {
  return (
    <>
    <div className='animate-pulse flex gap-4 px-4 self-start my-2'>
      <div className='bg-[#7c8a93da] rounded-lg w-20 h-10'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-20 h-10'></div>
    </div>

    <div className={`${style.product_container} animate-pulse px-4 w-full`}>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
      <div className='bg-[#7c8a93da] rounded-lg w-full h-96'></div>
    </div>

    <div className='animate-pulse bg-[#7c8a93da] rounded-lg w-60 h-10 my-4'></div>
    </>
  )
}