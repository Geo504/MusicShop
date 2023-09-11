

import style from './LinkItem.module.css'
import { IoIosArrowDown } from 'react-icons/io'

export default function LinkItem({ title, class_btn, children }) {
  return (
    <li>
      <button className={`${style.link_btn} ${class_btn}`}>
        {title}
        <IoIosArrowDown className={style.icon_link} />

        <div className={style.products_links}>
          {children}
        </div>
      </button>
    </li>
  )
}
