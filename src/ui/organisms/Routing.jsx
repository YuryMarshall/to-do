import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import CompletedPage from "../molecules/CompletedPage.jsx";
import DeletedPage from "../molecules/DeletedPage.jsx";

function Routing() {
  const delTasks = localStorage.getItem("deletedTasks");
  const [deletedTasks, setDeleted] = useState(JSON.parse(delTasks) || []);
  const doneTasks = localStorage.getItem("completedTasks");
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(doneTasks) || []
  );

  return (
    <BrowserRouter basename="/">
      <div className="font-montser bg-bggsky bg-no-repeat bg-cover">
        <div className="h-screen">
          <Header />
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
            <Route path="/deleted" element={<DeletedPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default Routing;
