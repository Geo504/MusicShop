import { Suspense } from 'react';

import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';
import Products from '@/components/Products/Products';
import { getAllProducts } from '@/services/getProducts'


export default async function AccesoriesView() {
  const products = await getAllProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">

      <HeaderProduct
        title='Accesories'
        subtitle='Find all your favorite accesories'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>
    </main>
  )
}