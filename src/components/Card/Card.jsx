import s from './Card.module.css'
import Button from '../Button/Button'
import { NavLink } from 'react-router'
export default function Card({id, img, title, price}){
    return(
        <div className={s.card}>
            <img src={img} alt="" className={s.img} />
            <h3 className={s.title}>{title}</h3>
            <p className={s.price}>{price}</p>
            <NavLink to={`${id}`}><Button txt='Подробнее' otherbtn/></NavLink>
        </div>
    )
}