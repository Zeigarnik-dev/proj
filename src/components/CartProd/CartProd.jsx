import s from './CartProd.module.css'
import Button from '../Button/Button'
export default function CartProd({id, img, title, price,HandleRemove}) {
    return (
        <div className={s.cartProd}>
            <img src={img} alt="" />
            <div className={s.prod_info}>
                <div className={s.info_top}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <div className={s.info_bottom}>
                    {/* <p className={s.pointer}>-</p>
                    <p>2</p>
                    <p className={s.pointer}>+</p> */}
                    <Button txt='Удалить' HandleRemove={HandleRemove} otherbtn/>
                </div>
            </div>
        </div>
    )
}