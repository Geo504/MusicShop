import Link from 'next/link';
import style from './LinkItem.module.css';

export default function LinkItem({title, subtitle, icon, link}) {
  return (
    <Link href={link} className={style.option_card}>
      {icon}
      <div>
        <h4 className='text-lg leading-5'>{title}</h4>
        <p className='text-[#445058] text-sm'>{subtitle}</p>
      </div>
    </Link>
  )
}
