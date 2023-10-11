import style from "@/components/Profile/Profile.module.css"

export default function Loading() {
  return (
    <main className='animate-pulse flex min-h-screen flex-col items-center justify-center overflow-x-hidden'>

      <header className='self-start px-4 mt-14'>
        <div className='bg-[#7c8a93da] rounded-lg w-60 h-10 mb-3'></div>
        <div className='bg-[#7c8a93da] rounded-lg w-60 h-6 mb-3'></div>
      </header>

      <div className='me-auto px-4 pt-2 pb-4 w-[100%] max-w-[1100px]'>
        <section className={style.option_container}>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
          <div className="bg-[#7c8a93da] rounded-lg h-[4.5rem]"></div>
        </section>
      </div>

    </main>
  )
}
