import { React, useState } from "react";

import BurgerMenu from "../atoms/BurgerMenu.jsx";
import NavigationMenu from "../atoms/NavigationMenu.jsx";
import burger from "../../img/burger.svg";

import styles from "./styles/organismsStyles.module.css";

export default function Header(props) {
  const [menuState, setMenu] = useState(false);
  const BurgerHandler = () => {
    if (menuState === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const menuData = [
    { name: "На главную", link: "/to-do/" },
    { name: "Выполненные", link: "/completed" },
    { name: "Удаленные", link: "/deleted" },
  ];

  return (
    <header className={styles.header}>
      <button className={styles.logo__button} onClick={props.help}>
        Облако
      </button>
      <NavigationMenu data={menuData} />
      <button className="lg:hidden" onClick={BurgerHandler}>
        <img src={burger} className="h-10 md:h-12" />
      </button>
      <BurgerMenu handler={BurgerHandler} state={menuState} data={menuData} />
    </header>
  );
}
