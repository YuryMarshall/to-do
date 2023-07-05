import React from "react";

import styles from "./styles/atomsStyles.module.css";

export default function TaskForm(props) {
  return (
    <form className={styles.form} onSubmit={props.submit}>
      <input
        type="text"
        className={props.state ? styles.input__error : styles.input}
        placeholder={
          props.state ? "Задача слишком короткая или длинная" : "Описание"
        }
        onChange={props.handler}
        value={props.value}
      />
      <button type="submit" className={styles.submit__button}>
        Добавить
      </button>
      <p className={props.value ? styles.symbols__number : "hidden"}>
        Осталось {30 - props.value.length > 0 ? 30 - props.value.length : "0"}{" "}
        символов
      </p>
    </form>
  );
}
