import s from './Cart.module.css'
import Title from '../../components/Title/Title'
import CartProd from "../../components/CartProd/CartProd";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
export default function Cart({ cart, setCart }) {
    const [cartProds, setCartProds] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadProds(params) {
            try {
                let resp = await fetch('http://localhost:3000/cards')
                let data = await resp.json()
                let prodsInCart = data.filter(el => cart.includes(el.id))
                setCartProds(prodsInCart)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        loadProds()
    }, [cart])
    const total_price = cartProds.reduce((acc, el) => acc + Number(el.price.split(' ')[0]), 0)
    function RemoveFromCard(id) {
        setCart(cart => {
            const newCart = cart.filter(el => el !== id)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    return (
        <section className={s.cart}>
            <div className="container">
                <Title txt='Корзина' />
                <div className={s.cart_inner}>
                    {isLoading ? (<p>Загрузка...</p>) :
                    (
                    <div className={s.cartProds}>
                        {cartProds.length ?
                            cartProds.map(el => (
                                <CartProd key={el.id} HandleRemove={()=>RemoveFromCard(el.id)} {...el} />
                            ))
                            :
                            <p>Корзина пуста</p>
                        }
                    </div>
                    )
                    }
                    {cartProds.length ? (
                        <div className={s.total_price}>
                            <h3>Общая стоимость</h3>
                            <p>Итоговая цена {isLoading ? '...' : <span>{total_price} ₽</span>}</p>
                            <Button txt="Купить всё" />
                        </div>
                    ) : <span>....</span>}
                </div>
            </div>
        </section>
    )
}