import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';
import { getFilteredProducts } from '@/services/getProducts'


export default async function ClothesView() {
  const products = await getFilteredProducts('Clothes');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <HeaderProduct
        title='Clothes'
        subtitle='Looking for a new look? Check out our clothes'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>

    </main>
  )
}