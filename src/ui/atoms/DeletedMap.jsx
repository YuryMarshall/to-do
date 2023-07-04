import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles/atomsStyles.module.css";

export default function CompletedMap(props) {
  const [tasks, setTasks] = useState(props.deleted || []);
  const allTasks = JSON.parse(localStorage.getItem("tasks"));

  const returnHandler = (e) => {
    const newReturnTask = {
      id: uuidv4(),
      text: e.target.id,
    };
    const newTasksArr = [...allTasks, newReturnTask];

    const newDeletedTasks = props.deleted.filter(
      (item) => item !== e.target.id
    );
    localStorage.setItem("tasks", JSON.stringify(newTasksArr));
    props.handler(newDeletedTasks);
    localStorage.setItem("deletedTasks", JSON.stringify(newDeletedTasks));
    setTasks(newDeletedTasks);
  };
  const TaskMap = () => {
    if (tasks[0]) {
      return (
        <ul>
          {tasks.reverse().map((item) => {
            return (
              <li className={styles.deleted__li} key={uuidv4()}>
                <p className="mr-5">{item}</p>
                <button
                  className="bg-back bg-no-repeat bg-contain w-8 h-8 hover:scale-110 active:scale-95"
                  id={item}
                  onClick={returnHandler}
                ></button>
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
