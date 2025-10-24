import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import s from "./Catalog.module.css";
import Filter from "../../components/Filter/Filter";
import { cards, filters } from "../../data.js";
import Card from "../../components/Card/Card";
import { useState } from "react";
export default function Catalog() {
  let[search, findItem] = useState("")
  let[selected, setSelect] = useState('0')
  let[category, setCategory] = useState(null)
  // let searchedProd = cards.filter(el=> el.title.toLowerCase().includes(search.toLowerCase()))
  // let selectedProd = cards.filter(el=>Number(el.price.split(' ')[0]) > Number(selected))
  let filteredCards = cards.filter(el=>{
    //поиск
    const matchesSearch = el.title.toLowerCase().includes(search.toLowerCase())
    //фильтрация
    const price = el.price.split(' ')[0]
    const matchPrice = Number(price) > Number(selected) || selected === '0'
    //категории
    let matchesCategory = true;
    if(category !== null){
      const actf = filters.find(el=>el.id === category)
      if(actf){
        matchesCategory = el.category.toLowerCase().includes(actf.txt.toLowerCase())
      }
    }
    return matchesSearch && matchPrice && matchesCategory
  })

  return (
    <section>
      <div className="container">
        <div className={s.tit_serch}>
          <Title txt="Каталог" cl />
          <form className={s.search}>
            <input type="text" onChange={(e)=>findItem(e.target.value)} />
            <img src="/Frame.svg" alt="" className={s.lope} />
          </form>
        </div>
        <div className={s.sort_txt}>
          <p className={s.p}>Выберите категорию, если это необходимо</p>
          <select name="" id="" value={selected} onChange={(e)=>setSelect(e.target.value)}>
            <option value="0">
              без фильтра
            </option>
            <option value="3000">&gt; 3000</option>
            <option value="3500">&gt; 3500</option>
            <option value="4000">&gt; 4000</option>
          </select>
        </div>
        <div className={s.filters}>
          <Filter txt="Все букеты" isFirst={category === null} handleClick={()=> setCategory(null)}/>
          {filters.map((filter)=>(<Filter key={filter.id} txt={filter.txt} isFirst={category === filter.id} handleClick={()=> setCategory(filter.id)}/>))}
        </div>
        <div className={s.catalog}>
          { 
          filteredCards.length ? filteredCards.map((card) => (<Card {...card} />)): <p>Товары по запросу "{search}" не найдены</p>
          }
        </div>
      </div>
    </section>
  );
}
