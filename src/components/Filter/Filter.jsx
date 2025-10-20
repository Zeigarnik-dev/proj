import s from './Filter.module.css'

export default function Filter({ txt = 'Фильтр', isFirst = false }) {
    return (
        <a href='' className={`${s.filter} ${isFirst ? s.act : ''}`}>
            {txt}
        </a>
    )
}