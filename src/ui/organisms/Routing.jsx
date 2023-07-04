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
  const delTasks = localStorage.getItem("deletedTasks");
  const doneTasks = localStorage.getItem("completedTasks");

  const [deletedTasks, setDeleted] = useState(JSON.parse(delTasks) || []);
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(doneTasks) || []
  );
  const [helpState, setHelpState] = useState(false);

  function helpHandler() {
    if (helpState) {
      setHelpState(false);
    } else {
      setHelpState(true);
    }
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.routing__container}>
        <HelpSection state={helpState} handler={helpHandler} />
        <div className="h-screen">
          <Header help={helpHandler} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  deletedState={deletedTasks}
                  deletedStateHandler={setDeleted}
                  completedState={completedTasks}
                  completedStateHandler={setCompletedTasks}
                />
              }
            />
            <Route path="/completed" element={<CompletedPage />} />
            <Route
              path="/deleted"
              element={
                <DeletedPage deleted={deletedTasks} handler={setDeleted} />
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
