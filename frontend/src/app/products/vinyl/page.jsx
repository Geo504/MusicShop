import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import { getFilteredProducts } from '@/services/getProducts'


export default async function VinylView() {
  const products = await getFilteredProducts('Vinyl');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      
      <header className='self-start px-4 mt-14'>
        <h1 className='text-4xl font-bold'>Vynyl's</h1>
        <p className='text-[#445058]'>
          You like listening to classic vinyl? We got you covered.
        </p>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>

    </main>
  )
}