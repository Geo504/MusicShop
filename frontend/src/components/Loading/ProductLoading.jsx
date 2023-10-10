import ProductList from "./ProductList";

export default function ProductLoading() {
  return (
    <main className='animate-pulse flex min-h-screen flex-col items-center justify-center overflow-x-hidden'>

      <header className='self-start px-4 mt-14'>
        <div className='bg-[#7c8a93da] rounded-lg w-64 h-10 mb-3'></div>
        <div className='bg-[#7c8a93da] rounded-lg w-96 h-6 mb-3'></div>
      </header>

      <ProductList />

    </main>
  )
}