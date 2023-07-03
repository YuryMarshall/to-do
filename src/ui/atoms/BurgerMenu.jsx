import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/atomsStyles.module.css";

export default function BurgerMenu(props) {
  return (
    <ul
      className={
        props.state
          ? styles.burger__menu__container
          : styles.burger__menu__hidden
      }
    >
      {props.data.map((item, index) => {
        return (
          <li className={styles.menu__li} onClick={props.handler} key={index}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
