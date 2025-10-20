import s from './Card.module.css'
import Button from '../Button/Button'
export default function Card({img, title, price}){
    return(
        <div className={s.card}>
            <img src={img} alt="" className={s.img} />
            <h3 className={s.title}>{title}</h3>
            <p className={s.price}>{price}</p>
            <Button txt='Подробнее' otherbtn/>
        </div>
    )
}