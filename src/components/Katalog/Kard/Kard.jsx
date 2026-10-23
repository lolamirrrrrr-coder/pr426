import s from './Kard.module.css'
export function Kard(){
    return(
  <article className={s.card}>
      <div className={s.imageWrap}>
        <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2023/01/25-63c718dddd1b1__700.jpg"
          alt="Название товара"
          className={s.image}
        />
      </div>
      <div className={s.body}>
        <h3 className={s.name}>Картина Панды</h3>
        <div className={s.footer}>
          <span className={s.price}>1 799 ₽</span>
          <button className={s.buy} type="button">
            В корзину
          </button>
        </div>
      </div>
    </article>

    )
}