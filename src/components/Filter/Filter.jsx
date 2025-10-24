import s from './Filter.module.css'

export default function Filter({ txt = 'Фильтр', isFirst = false, handleClick }) {
    return (
        <button className={`${s.filter} ${isFirst ? s.act : ''}`} onClick={handleClick}>
            {txt}
        </button>
    )
}