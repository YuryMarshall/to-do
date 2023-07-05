import React from "react";
import CompletedMap from "../atoms/CompletedMap.jsx";

import styles from "./styles/moleculesStyles.module.css";

function CompletedPage(props) {
  return (
    <section className={styles.completed__page__container}>
      <h1 className={styles.completed__page__tiltle}>
        5 последних выполненных дел
      </h1>
      <CompletedMap number={props.number} storageKeys={props.storageKeys} />
    </section>
  );
}
export default CompletedPage;
