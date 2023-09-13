import Link from 'next/link'

import style from './LinkItem.module.css'
import { IoIosArrowDown } from 'react-icons/io'

export default function LinkItem({ title, class_btn, routes }) {
  return (
    <li>
      <button className={`${style.link_btn} ${class_btn}`}>
        {title}
        <IoIosArrowDown className={style.icon_link} />

        <div className={style.products_links}>
          {routes.map(route => {
            return(
              <Link href={`${route.link}`} className={`${style.link}`}>
                {route.nameLink}
                <span>{route.description}</span>
              </Link>
            )
          })}
        </div>
      </button>
    </li>
  )
}
