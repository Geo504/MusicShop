import Link from 'next/link'
import Image from 'next/image'

import style from './Home.module.css'

export default function Home() {
  return (
    <section className={style.section_container} >
      <div className={style.text_container}>
        <h1 className='text-6xl font-bold'>
          Welcome to <span className='text-[#445058]'>MusicShop</span>, the best place to conect with music.
        </h1>

        <p className='text-lg'>
          Buy and sell music products from any band and stores around the world!!!
        </p>

        <div className='flex gap-5 items-center justify-center'>
          <Link href={'/products'} className={style.btn_buy}>Buy Now</Link>
          <Link href={'/profile/add_product'} className={style.btn_sell}>Sell Now</Link>
        </div>
      </div>

      <div className={style.img_container}>
        <Image 
          src='https://i.ibb.co/D8hKSmk/pngwing-com-2.png' 
          alt=''
          fill
          sizes='40vw'
          style={{objectFit: 'contain'}} />
      </div>
    </section>
  )
}
