import { NavLink } from 'react-router'
import s from './Header.module.css'
export default function Header({cart}){
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header_inner}>
                    <h1 className={s.logo}>ЦВЕТОЧНЫЙ</h1>
                    <nav className={s.nav}>
                        <NavLink to='/' className={s.nav_inner}>Главная</NavLink>
                        <NavLink to='/catalog' className={s.nav_inner}>Каталог</NavLink>
                        <NavLink to='/cart' className={s.nav_inner}>Корзина<p className={s.counter}>{cart.length ? "❗" : ''}</p></NavLink>
                    </nav>
                </div>
            </div>
            <hr className={s.hr} />
        </header>
    )
}