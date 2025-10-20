import s from "./Button.module.css"
export default function Button({txt = 'Кнопка'}){
    return(
        <button className={s.btn}>{txt}</button>
    )
}