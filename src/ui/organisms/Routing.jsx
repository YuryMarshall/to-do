import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import CompletedPage from "../molecules/CompletedPage.jsx";
import DeletedPage from "../molecules/DeletedPage.jsx";
import HelpSection from "../molecules/HelpSection.jsx";

import styles from "./styles/organismsStyles.module.css";

function Routing() {
  const StorageKeys = {
    AllTasks: "tasks",
    CompletedTasks: "completedTasks",
    DeletedTasks: "deletedTasks",
  };
  const numberOfTasks = -5;
  const deletedTasksArr = localStorage.getItem(StorageKeys.DeletedTasks);
  const doneTasks = localStorage.getItem(StorageKeys.CompletedTasks);

  const [deletedTasks, setDeleted] = useState(
    JSON.parse(deletedTasksArr) || []
  );
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(doneTasks) || []
  );
  const [helpState, setHelpState] = useState(false);
  const [menuState, setMenu] = useState(false);

  const BurgerHandler = () => {
    if (!menuState) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  const sectionBurgerHandler = () => {
    if (menuState) {
      setMenu(false);
    }
  };

  function helpHandler() {
    if (helpState) {
      setHelpState(false);
    } else {
      setHelpState(true);
    }
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.routing__container} onClick={sectionBurgerHandler}>
        <HelpSection state={helpState} handler={helpHandler} />
        <div className="h-screen">
          <Header
            help={helpHandler}
            burgerState={menuState}
            burgerHandler={BurgerHandler}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  deletedState={deletedTasks}
                  deletedStateHandler={setDeleted}
                  completedState={completedTasks}
                  completedStateHandler={setCompletedTasks}
                  number={numberOfTasks}
                  storageKeys={StorageKeys}
                />
              }
            />
            <Route
              path="/completed"
              element={
                <CompletedPage
                  number={numberOfTasks}
                  storageKeys={StorageKeys}
                />
              }
            />
            <Route
              path="/deleted"
              element={
                <DeletedPage
                  deleted={deletedTasks}
                  handler={setDeleted}
                  number={numberOfTasks}
                  storageKeys={StorageKeys}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default Routing;
