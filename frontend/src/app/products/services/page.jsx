import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import HeaderProduct from '@/components/Products/HeaderProduct/HeaderProduct';
import { getFilteredProducts } from '@/services/getProducts'


export default async function ServicesView() {
  const products = await getFilteredProducts('Services');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <HeaderProduct
        title='Services'
        subtitle='Find lessons for learn music, hire a band for a special night or just rent an instrument for a day.'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products}/>
      </Suspense>

    </main>
  )
}