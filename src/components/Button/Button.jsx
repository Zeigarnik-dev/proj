import s from "./Button.module.css"
export default function Button({txt = 'Кнопка', otherbtn = false}){
    return(
        <button className={`${s.btn} ${otherbtn ? s.otherbtn : ''}`}>{txt}</button>
    )
}