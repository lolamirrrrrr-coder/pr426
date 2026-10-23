import s from './Header.module.css'
export function Header(){
    return(
<header>
       <div className="box">
        <div className={s.head}>
        <a href="/" className={s.logo}>
                <span className={s.logoMark}>◆</span>
                <span className={s.logoText}>Уют</span>
            </a>

            <nav className={s.nav} aria-label="Основная навигация">
                <ul className={s.navList}>
                <li>
                    <a href="/" className={s.navLink}>Главная</a>
                </li>
                <li>
                    <a href="/catalog" className={s.navLink}>Каталог</a>
                </li>
                <li>
                    <a href="/cart" className={s.navLink}>Корзина</a>
                </li>
                </ul>
            </nav>

            <a href="#contact" className={s.cta}>Связаться</a>
        </div>
        
       </div>   
    </header> 
    )
}