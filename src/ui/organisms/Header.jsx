import { React } from "react";

import BurgerMenu from "../atoms/BurgerMenu.jsx";
import NavigationMenu from "../atoms/NavigationMenu.jsx";
import burger from "../../img/burger.svg";

import styles from "./styles/organismsStyles.module.css";

export default function Header(props) {
  const menuData = [
    { name: "На главную", link: "/" },
    { name: "Выполненные", link: "/completed" },
    { name: "Удаленные", link: "/deleted" },
  ];

  return (
    <header className={styles.header}>
      <button className={styles.logo__button} onClick={props.help}>
        Облако
      </button>
      <NavigationMenu data={menuData} />
      <button className="lg:hidden" onClick={props.burgerHandler}>
        <img src={burger} className="h-10 md:h-12" />
      </button>
      <BurgerMenu
        handler={props.burgerHandler}
        state={props.burgerState}
        data={menuData}
      />
    </header>
  );
}
