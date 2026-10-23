import s from './Footer.module.css'
export function Footer (){
    return(
      <footer className={s.footer}>
      <div className="box">
        <div className={s.fot}>
          <a href="/" className={s.logo}>
          <span className={s.logoMark}>◆</span>
          <span className={s.logoText}>Уют</span>
        </a>

        <p className={s.copyright}>© Мирахмедова Лола 2026</p> 

        <div className={s.links}>
          <a href="/terms" className={s.link}>Пользовательское соглашение</a>
          <a href="/privacy" className={s.link}>Политика конфиденциальности</a>
        </div>

        </div>
       
      </div>
    </footer>
        
    )
}