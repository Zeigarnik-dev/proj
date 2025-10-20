import s from './Banner.module.css'
import Button from '../Button/Button'
import { NavLink } from 'react-router'
export default function Banner(){
    return(
        <section className={s.banner}>
            <div className="container">
                <div className={s.inner}>
                    <h1 className={s.title}>Заказать букет</h1>
                    <p className={s.text}>Бесплатная доставка свежих цветов на дом! Наш цветочный!</p>
                    <NavLink to='/catalog'><Button txt='Каталог'/></NavLink>
                </div>
            </div>
        </section>
    )
}