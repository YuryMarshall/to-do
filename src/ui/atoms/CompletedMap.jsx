import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CompletedMap() {
  const tasks = JSON.parse(localStorage.getItem("completedTasks"));
  const TaskMap = () => {
    if (tasks) {
      return (
        <ul>
          {tasks.reverse().map((item) => {
            return (
              <li
                className="text-2xl font-bold text-white shadow-lg border-white border-2 border-solid py-2 rounded-xl px-3 flex justify-center mb-5 bg-green-400 bg-opacity-50"
                key={uuidv4()}
              >
                {item}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <h2 className=" flex justify-center text-xl font-bold text-center mt-36 text-blue-500 ">
          Вы не выполнили ни одного дела
        </h2>
      );
    }
  };
  return <TaskMap />;
}
