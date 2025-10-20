import s from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <h1 className={s.logo}>ЦВЕТОЧНЫЙ</h1>
                    <nav className={s.nav}>
                        <a href="#" className={s.nav_inner}>Главная</a>
                        <a href="#" className={s.nav_inner}>Каталог</a>
                        <a href="#" className={s.nav_inner}>Корзина</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}