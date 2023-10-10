import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import { getFilteredProducts } from '@/services/getProducts'
import ProductList from '@/components/Loading/ProductList';


export default async function InstrumentView() {
  const products = await getFilteredProducts('Instruments');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <h1 className='text-4xl font-bold'>All Instrument</h1>
        <p className='text-[#445058]'>
          Find and buy a tool for express yourself.
        </p>
      </header>

      <Suspense fallback={ <ProductList/> }>
        <Products products={products}/>
      </Suspense>
    </main>
  )
}