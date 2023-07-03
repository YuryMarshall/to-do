import React from "react";

import styles from "./styles/atomsStyles.module.css";

function Task(props) {
  return (
    <li className={styles.task__li}>
      <p className={styles.task__text}>{props.name}</p>
      <button
        className={styles.tick__button}
        onClick={props.completeHandler}
        id={props.id}
        value={props.name}
      ></button>
      <button
        className={styles.del__button}
        onClick={props.delHandler}
        id={props.id}
        value={props.name}
      ></button>
    </li>
  );
}

export default Task;
