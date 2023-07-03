import React from "react";

import TaskForm from "../atoms/TaskForm.jsx";

import styles from "./styles/moleculesStyles.module.css";

export default function TodoSection(props) {
  return (
    <section className={styles.todo__section}>
      <h1 className={styles.todo__title}>Запланируем что-нибудь?</h1>
      <TaskForm
        value={props.value}
        submit={props.submit}
        handler={props.handler}
        state={props.formState}
      />
    </section>
  );
}
