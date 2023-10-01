import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import { getAllProducts } from '@/services/getProducts'
import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';


export default async function ClothesView() {
  const products = await getAllProducts();

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