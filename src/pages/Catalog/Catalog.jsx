import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import s from "./Catalog.module.css";
import Filter from "../../components/Filter/Filter";
import { cards, filters } from "../../data.js";
import Card from "../../components/Card/Card";
export default function Catalog() {
  return (
    <section>
      <div className="container">
        <div className={s.tit_serch}>
          <Title txt="Каталог" cl />
          <form className={s.search}>
            <input type="search" />
            <img src="/Frame.svg" alt="" className={s.lope} />
            <Button txt="Поиск" />
          </form>
        </div>
        <div className={s.sort_txt}>
          <p className={s.p}>Выберите категорию, если это необходимо</p>
          <select name="" id="">
            <option value="" disabled selected>
              Сортировка по цене
            </option>
            <option value="">&lt; 3000</option>
            <option value="">&lt; 5000</option>
            <option value="">&lt; 7000</option>
          </select>
        </div>
        <div className={s.filters}>
          <Filter txt="Все букеты" isFirst />
          {filters.map((filter)=>(<Filter key={filter.id} {...filter} />))}
        </div>
        <div className={s.catalog}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
