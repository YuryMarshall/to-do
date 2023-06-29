import React from "react";
import burger from "../../img/burger.svg";
import { useState } from "react";
import BurgerMenu from "../atoms/BurgerMenu.jsx";

export default function Header() {
  const [menuState, setMenu] = useState(false);
  const BurgerHandler = () => {
    if (menuState === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <div className="w-full  h-20  flex justify-between items-center px-5 mb-36 ">
      <p className="relative text-3xl font-bold bg-white px-3 pr-6 py-3 rounded-2xl text-blue-300 after:content-['Дел'] after:absolute after:top-0 after:pl-6 after:-right-20 after:text-white  after:border-white after:border-solid after:border-4 after:p-2 after:rounded-2xl">
        Облако
      </p>
      <button className="" onClick={BurgerHandler}>
        <img src={burger} className="h-10" />
      </button>
      <BurgerMenu handler={BurgerHandler} state={menuState} />
    </div>
  );
}
