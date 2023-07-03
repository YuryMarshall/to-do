import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/atomsStyles.module.css";

export default function NavigationMenu(props) {
  return (
    <nav className={styles.nav__container}>
      <ul className={styles.nav__ul}>
        {props.data.map((item, index) => {
          return (
            <NavLink to={item.link} className={styles.nav__link} key={index}>
              <li>{item.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}
