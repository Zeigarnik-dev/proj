import s from './OneP.module.css'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
// import { cards } from '../../data'
import Button from '../../components/Button/Button'
export default function OneP({cart, setCart}) {
    let prodId = useParams()
    let[prod, setProd] = useState({})
    useEffect(() => {
        getProd()
    })
    async function getProd() {
        const res = await fetch(`http://localhost:3000/cards/${prodId.id}`)
        const data = await res.json()
        setProd(data)
    }

    function handleClick() {
        localStorage.setItem('cart', JSON.stringify([...cart, prod.id]))
        setCart([...cart, prod.id])
    }
    return (
        <div className="container">
            <section className={s.infos}>
                <div className={s.left_img}>
                    <img src={prod.img} alt="" />
                </div>
                <div className={s.right_info}>
                    <div className={s.top_inf}>
                        <h3>{prod.title}</h3>
                        <p className={s.price}>{prod.price}</p>
                        <div className={s.charac}>
                            <p><span className={s.grey}>Ширина:</span> {prod.width} см</p>
                            <p><span className={s.grey}>Высота:</span> {prod.height} см</p>
                        </div>
                        <Button txt='В корзину' handleClick={handleClick}/>
                    </div>
                    <div className={s.bott_inf}>
                        <h4>Описание</h4>
                        <p>{prod.descr}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}