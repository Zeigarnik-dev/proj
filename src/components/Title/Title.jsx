import s from './Title.module.css'
export default function Title({txt}){
    return(
        <h2 className={s.h2}>{txt}</h2>
    )
}