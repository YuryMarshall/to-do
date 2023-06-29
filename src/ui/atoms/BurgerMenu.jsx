import React from "react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu(props) {
  return (
    <ul
      className={
        props.state
          ? "absolute right-0 top-20 text-blue-300 bg-white bg-opacity-75 text-2xl font-semibold border-4 border-solid border-white cursor-pointer z-10"
          : "hidden"
      }
    >
      <li
        className="hover:bg-white pt-5 pb-3 px-4 hover:text-blue-300"
        onClick={props.handler}
      >
        <NavLink to="/">На главную</NavLink>
      </li>
      <li
        className="hover:bg-white pt-5 pb-3 px-4 hover:text-blue-300"
        onClick={props.handler}
      >
        <NavLink to="/completed">Выполненные</NavLink>
      </li>

      <li
        className="hover:bg-white py-3 px-4 hover:text-blue-300"
        onClick={props.handler}
      >
        <NavLink to="/deleted">Удаленные</NavLink>
      </li>
    </ul>
  );
}
