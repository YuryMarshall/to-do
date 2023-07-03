import React from "react";

import neko from "../../img/neko.png";

import styles from "./styles/moleculesStyles.module.css";

export default function HelpSection(props) {
  return (
    <section className={props.state ? styles.section__visible : "hidden"}>
      <div className={styles.help__container}>
        <div className={styles.text__logo__container}>
          <p className={styles.help__text}>
            Приветствую Вас, этот сайт представляет собой записную книжку, куда
            Вы можете добавлять свои планы или дела и по мере выполнения
            помечать или удалять их.
          </p>
          <img src={neko} className={styles.help__img} />
        </div>
        <div>
          <button onClick={props.handler} className={styles.help__button}>
            Начнем
          </button>
        </div>
      </div>
    </section>
  );
}
