export default function Loading() {
  return (
    <main className='animate-pulse px-4 flex min-h-screen flex-col items-center justify-center overflow-x-hidden'>
      
      <section className='w-full max-w-[1350px]'>
        <header className='self-start mt-14'>
          <div className='bg-[#7c8a93da] rounded-lg w-64 h-5 mb-4'></div>
        </header>

        <section className='flex gap-10 w-full'>
          <div className='bg-[#7c8a93da] rounded-lg w-2/4 aspect-[1/1]'></div>

          <div className='w-2/4 aspect-[1/1]'>
            <div className='bg-[#7c8a93da] rounded-lg w-72 h-9 mb-2'></div>
            <div className='bg-[#7c8a93da] rounded-lg w-56 h-4 mb-7'></div>

            <div className='bg-[#7c8a93da] rounded-lg w-32 h-8 mb-2'></div>
            <div className='flex w-full gap-4 mb-7'>
              <div className='bg-[#7c8a93da] rounded-lg w-32 h-8'></div>
              <div className='bg-[#7c8a93da] rounded-lg w-32 h-8'></div>
            </div>

            <div className='bg-[#7c8a93da] rounded-lg w-32 h-4 mb-2'></div>
            <div className='bg-[#7c8a93da] rounded-lg w-full h-36 mb-7'></div>

            <div className='bg-[#7c8a93da] rounded-lg w-32 h-4 mb-2'></div>
            <div className='bg-[#7c8a93da] rounded-lg w-full h-20'></div>

          </div>
        </section>
      </section>

    </main>
  )
}