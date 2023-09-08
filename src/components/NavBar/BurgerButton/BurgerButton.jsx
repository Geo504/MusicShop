'use client'
import style from './BurgerButton.module.css';

export default function BurgerButton({open}) {
  return (
    <div className={`${style.nav_icon} ${open ? style.open : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}