import React from "react";
import DeletedMap from "../atoms/DeletedMap.jsx";

import styles from "./styles/moleculesStyles.module.css";

function DeletedPage(props) {
  return (
    <div className={styles.completed__page__container}>
      <h1 className={styles.completed__page__tiltle}>
        5 последних дел, которые пришлось отменить
      </h1>
      <DeletedMap
        deleted={props.deleted}
        handler={props.handler}
        number={props.number}
        storageKeys={props.storageKeys}
      />
    </div>
  );
}
export default DeletedPage;
