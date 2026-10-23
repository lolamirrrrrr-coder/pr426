import s from './Pasilka.module.css'
import pasImage from '../../assets/pas.png';
export function Pasilka (){
    return(
     <div className="box">
      <div className={s.passilka}>
        
        <div className={s.content}>
          <h2 className={s.title}>Подпишитесь на рассылку</h2>
          
          <div className={s.formGroup}>
            <label htmlFor="email" className={s.label}>Почта</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Введите почту" 
              className={s.input} 
            />
            <button className={s.button}>Отправить</button>
          </div>
        </div>

        <div className={s.imageWrapper}>
          <img src={pasImage} alt="Уютный вечер у камина" className={s.image} />
        </div>

      </div>    
    </div>
    )
}