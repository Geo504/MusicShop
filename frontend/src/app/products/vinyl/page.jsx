import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';
import { getFilteredProducts } from '@/services/getProducts'


export default async function VinylView() {
  const products = await getFilteredProducts('Vinyl');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <HeaderProduct
        title="Vynyl's"
        subtitle='You like listening to classic vinyl? We got you covered.'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>

    </main>
  )
}