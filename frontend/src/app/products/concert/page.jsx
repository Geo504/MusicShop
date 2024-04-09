import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import { getFilteredProducts } from '@/services/getProducts';
import ProductList from '@/components/Loading/ProductList';


export default async function ConcertView() {
  const products = await getFilteredProducts('Concert');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <h1 className='text-4xl font-bold'>Concert Tickets</h1>
        <p className='text-[#445058]'>
          Build a memory with your friends and favorite artist.
        </p>
      </header>

      <Suspense fallback={ <ProductList/> }>
        <Products productsServer={products}/>
      </Suspense>

    </main>
  )
}