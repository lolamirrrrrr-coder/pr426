import s from './Katalog.module.css'
import { Kard } from './Kard/Kard'
export function Katalog(){
    return(
<section className={s.catalog}>
  <div className="box">
    <div className={s.head}>
      <h2 className={s.title}>Каталог</h2>
    </div>
    <div className={s.grid}>
      <Kard/>
      <Kard/>
      <Kard/>
    </div>
  </div>
</section>
    )
}