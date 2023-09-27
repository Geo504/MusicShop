import Image from 'next/image'
import Link from 'next/link'

import LoginForm from './LoginForm/LoginForm'

import style from './Login.module.css'

export default function Login() {
  return (
    <section className='flex items-center relative w-screen'>

      <div className={style.img_container}>
        <div className='absolute top-0 left-0 w-full h-full z-[1] bg-gradient-to-t from-[#cecece60] to-transparent'></div>
          <Image 
            src='https://i.ibb.co/hYH2R6L/pngwing-com-2.png' 
            alt='' 
            fill
            sizes='100vw'
            style={{objectFit: 'cover'}} />
      </div>

      <div className={style.aside_container}>
        <LoginForm />
      </div>

    </section>
  )
}
