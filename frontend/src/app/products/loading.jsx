// import ProductLoading from "@/components/Loading/ProductLoading";
import ProductList from "@/components/Loading/ProductList";

export default function Loading() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center overflow-x-hidden'>

      <header className='self-start px-4 mt-14'>
        <h1 className='text-4xl font-bold'>All Products</h1>
        <p className='text-[#445058]'>See and buy all the products in the store.</p>
      </header>

      <ProductList />

    </main>
  )
}