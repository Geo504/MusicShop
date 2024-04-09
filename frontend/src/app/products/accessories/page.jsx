import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import { getFilteredProducts } from '@/services/getProducts';
import ProductList from '@/components/Loading/ProductList';


export default async function AccesoriesView() {
  const products = await getFilteredProducts('Accessories');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <h1 className='text-4xl font-bold'>Accesories</h1>
        <p className='text-[#445058]'>Find all your favorite accesories. Headphones, microphones, speaker and more...</p>
      </header>

      <Suspense fallback={ <ProductList/> }>
        <Products productsServer={products}/>
      </Suspense>
    </main>
  )
}