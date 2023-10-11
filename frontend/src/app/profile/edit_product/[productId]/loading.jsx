export default function Loading() {
  return (
    <main className='animate-pulse px-4 flex min-h-screen flex-col items-center justify-center overflow-x-hidden'>

      <header className='self-start mt-14 w-full'>
        <div className='bg-[#7c8a93da] rounded-lg w-52 h-4 mb-4'></div>
        <div className='bg-[#7c8a93da] rounded-lg w-72 h-10 mb-2'></div>
        <div className='bg-[#7c8a93da] rounded-lg w-full max-w-[24rem] h-4 mb-4'></div>
      </header>

      <section className='self-start w-full max-w-[1160px]'>
        <div className='bg-[#7c8a93da] rounded-lg w-full h-[37rem] mb-4'></div>
      </section>

    </main>
  )
}