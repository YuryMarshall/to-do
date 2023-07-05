import React from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles/atomsStyles.module.css";

export default function CompletedMap(props) {
  const tasks = JSON.parse(
    localStorage.getItem(props.storageKeys.CompletedTasks)
  ).reverse();
  const TaskMap = () => {
    if (tasks[0]) {
      return (
        <ul>
          {tasks.map((item) => {
            return (
              <li className={styles.completed__list__item} key={uuidv4()}>
                {item}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <h2 className={styles.no__completed}>Вы не выполнили ни одного дела</h2>
      );
    }
  };
  return <TaskMap />;
}
