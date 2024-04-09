import { Suspense } from 'react';

import Products from '@/components/Products/Products';
import { getFilteredProducts } from '@/services/getProducts';
import ProductList from '@/components/Loading/ProductList';


export default async function ClothesView() {
  const products = await getFilteredProducts('Clothes');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">

      <header className='self-start px-4 mt-14'>
        <h1 className='text-4xl font-bold'>Clothes</h1>
        <p className='text-[#445058]'>Looking for a new look? Check out our clothes.</p>
      </header>

      <Suspense fallback={ <ProductList/> }>
        <Products productsServer={products}/>
      </Suspense>

    </main>
  )
}