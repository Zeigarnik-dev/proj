import s from "./Button.module.css"
export default function Button({txt = 'Кнопка', otherbtn = false, handleClick, HandleRemove}){
    return(
        <button onClick={handleClick ? handleClick : HandleRemove} className={`${s.btn} ${otherbtn ? s.otherbtn : ''}`}>{txt}</button>
    )
}