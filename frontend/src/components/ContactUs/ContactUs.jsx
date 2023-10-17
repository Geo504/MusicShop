import Image from 'next/image';

import Form from './Form/Form';

import style from './ContactUs.module.css';


export default function ContactUs() {
  return (
    <>
    <div className={style.background}>
      <Image 
        src={'https://i.ibb.co/hBKmgjG/pngwing-com-2.png'} 
        alt=''
        fill
        sizes='40vw'
        style={{objectFit: 'cover'}}
      />
    </div>

    <Form />
    </>
  )
}
