import bannerBg from '../../assets/ban.png'
import s from './Banner.module.css'
export function Banner(){
    return(
    <section 
      className={s.hero} 
      style={{ '--bg-image': `url(${bannerBg})` }} 
    >
      <div className="box">
        <div className={s.content}>
          <h1 className={s.title}>Твой дом — наша забота</h1>
          <p className={s.subtitle}>
            Этот производитель достоин отдельного внимания, поскольку его философия — это истинное олицетворение современного подхода к обустройству дома, где каждая деталь имеет значение.
          </p>
          <a href="#contact" className={s.cta}>
            Перейти в каталог
          </a>
        </div>
      </div>
    </section>
    )
}