import React from "react";

import Task from "../atoms/Task.jsx";

import styles from "./styles/moleculesStyles.module.css";

export default function TasksSection(props) {
  const TasksWindow = () => {
    if (props.definedTasks.length === 0) {
      return <div className={styles.no__tasks}>Нет задач</div>;
    } else {
      return (
        <ul className={styles.tasks__ul}>
          {props.definedTasks.map((item) => {
            return (
              <Task
                name={item.text}
                key={item.id}
                id={item.id}
                delHandler={props.deleteHandler}
                completeHandler={props.completeHandler}
              />
            );
          })}
        </ul>
      );
    }
  };
  return (
    <section className={styles.tasks__section}>
      <div className={styles.tasks__section__container}>
        <TasksWindow />
      </div>
    </section>
  );
}
