import React from "react";
import Task from "../atoms/Task.jsx";

export default function TasksSection(props) {
  const TasksWindow = () => {
    if (props.definedTasks.length === 0) {
      return (
        <div className="text-white font-bold text-2xl h-full flex justify-center items-center mx-10 text-center">
          Нет задач
        </div>
      );
    } else {
      return (
        <div>
          {props.definedTasks.map((item) => {
            return (
              <Task
                name={item.text}
                key={item.id}
                id={item.id}
                delHandler={props.deleteHandler}
                completeHandler={props.completeHandler}
              />
            );
          })}
        </div>
      );
    }
  };
  return (
    <section className="w-full h-3/6">
      <div className="h-full flex-col  overflow-auto ">
        <TasksWindow />
      </div>
    </section>
  );
}
