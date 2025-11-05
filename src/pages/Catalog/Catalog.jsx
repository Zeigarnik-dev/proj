import Title from "../../components/Title/Title";
import s from "./Catalog.module.css";
import Filter from "../../components/Filter/Filter";
// import { cards, filters } from "../../data.js";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
export default function Catalog() {
  let[filters, setFilters] = useState([])
  let[cards, setCards] = useState([])
  let[search, findItem] = useState("")
  let[selected, setSelect] = useState('default')
  let[category, setCategory] = useState(null)
  // let searchedProd = cards.filter(el=> el.title.toLowerCase().includes(search.toLowerCase()))
  // let selectedProd = cards.filter(el=>Number(el.price.split(' ')[0]) > Number(selected))
  let filteredCards = cards.filter(el=>{
    const matchesSearch = el.title.toLowerCase().includes(search.toLowerCase())
    let matchesCategory = true;
    if(category !== null){
      const actf = filters.find(el=>el.id === category)
      if(actf){
        matchesCategory = el.category.toLowerCase().includes(actf.txt.toLowerCase())
      }
    }
    return matchesSearch && matchesCategory
  })

async function getCards(){
  const res = await fetch('http://localhost:3000/cards')
  const data = await res.json()
  setCards(data)
}
async function getFilters(){
  const res = await fetch('http://localhost:3000/filters')
  const data = await res.json()
  setFilters(data)
}
useEffect(()=>{
  getCards()
  getFilters()
}, [])

const sortprod = (sorting, arr)=>{
  switch(sorting){
    case "ToHight": return [...arr].sort((a, b)=> Number(a.price.split(' ')[0])-Number(b.price.split(' ')[0]))
    case "ToLow": return [...arr].sort((a, b)=> Number(b.price.split(' ')[0])-Number(a.price.split(' ')[0]))
    default: return arr
  }
}

const finProds = sortprod(selected, filteredCards)
console.log(finProds)

  return (
    <section>
      <div className="container">
        <div className={s.tit_serch}>
          <Title txt="Каталог"/>
          <form className={s.search}>
            <input type="text" onChange={(e)=>findItem(e.target.value)} />
            <img src="/Frame.svg" alt="" className={s.lope} />
          </form>
        </div>
        <div className={s.sort_txt}>
          <p className={s.p}>Выберите категорию, если это необходимо</p>
          <select value={selected} onChange={(e)=>setSelect(e.target.value)}>
            <option value="default">
              без фильтра
            </option>
            <option value="ToHight">По возрастанию</option>
            <option value="ToLow">По убыванию</option>
          </select>
        </div>
        <div className={s.filters}>
          <Filter txt="Все букеты" isFirst={category === null} handleClick={()=> setCategory(null)}/>
          {filters.map((filter)=>(<Filter txt={filter.txt} isFirst={category === filter.id} handleClick={()=> setCategory(filter.id)}/>))}
        </div>
        <div className={s.catalog}>
          { 
          finProds.length ? finProds.map((card) => (<Card {...card} />)): <p>Товары по запросу "{search}" не найдены</p>
          }
        </div>
      </div>
    </section>
  );
}
