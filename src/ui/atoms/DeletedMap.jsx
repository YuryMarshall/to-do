import React from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles/atomsStyles.module.css";

export default function CompletedMap() {
  const tasks = JSON.parse(localStorage.getItem("deletedTasks"));
  const TaskMap = () => {
    if (tasks[0]) {
      return (
        <ul>
          {tasks.reverse().map((item) => {
            return (
              <li className={styles.deleted__li} key={uuidv4()}>
                {item}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <h2 className={styles.no__completed}>Вы не удалили ни одного дела</h2>
      );
    }
  };
  return <TaskMap />;
}
