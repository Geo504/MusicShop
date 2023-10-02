import { Suspense } from 'react';

import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';
import Products from '@/components/Products/Products';
import { getFilteredProducts } from '@/services/getProducts'


export default async function ConcertView() {
  const products = await getFilteredProducts('Concert');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <HeaderProduct
        title='Concert Tickets'
        subtitle='Build a memory with your friends and favorite artist'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>

    </main>
  )
}