import Button from "../Button/Button";
import s from "./Subscr.module.css";

export default function Subscr() {
  return (
    <section className={s.subscr}>
      <div className="container mt_80 mb_80">
        <div className={s.inner}>
          <div className={s.in_left}>
            <h2 className={s.title}>Подписка на рассылку</h2>
            <form action="" className={s.form}>
              <label for="email">Почта *</label>
              <input
                type="email"
                id="email"
                placeholder="Введите почту"
                className={s.input}
              />
              <Button txt="Подписаться"/>
            </form>
          </div>
          <div className={s.in_right}>
            <img src="/subscr.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
