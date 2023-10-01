import { Suspense } from 'react';

import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';
import Products from '@/components/Products/Products';
import { getAllProducts } from '@/services/getProducts'


export default async function ProductsView() {
  const products = await getAllProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <HeaderProduct
        title='All Products'
        subtitle='See and buy all the products in the store'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>
    </main>
  )
}
