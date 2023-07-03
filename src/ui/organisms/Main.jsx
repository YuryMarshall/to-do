import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoSection from "../molecules/TodoSection.jsx";
import TasksSection from "../molecules/TasksSection.jsx";

export default function Main(props) {
  const tasks = localStorage.getItem("tasks");

  const [userTask, setTask] = useState("");
  const [userTasks, changeTasks] = useState(JSON.parse(tasks) || []);
  const [formState, setFormState] = useState(false);

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    if (userTask.trim() !== "" && userTask.length < 30) {
      const newTask = {
        id: uuidv4(),
        text: userTask,
      };
      e.preventDefault();
      setFormState(false);
      changeTasks((userTasks) => [...userTasks, newTask]);
      setTask("");
    } else {
      e.preventDefault();
      setFormState(true);
      setTask("");
    }
  };
  const deleteTask = (e) => {
    changeTasks(userTasks.filter((userTask) => userTask.id !== e.target.id));
    props.deletedStateHandler([...props.deletedState, e.target.value]);
  };

  const completeTask = (e) => {
    changeTasks(userTasks.filter((userTask) => userTask.id !== e.target.id));
    props.completedStateHandler([...props.completedState, e.target.value]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(userTasks));
  }, [userTasks]);

  useEffect(() => {
    localStorage.setItem(
      "deletedTasks",
      JSON.stringify(props.deletedState.slice(-5))
    );
  }, [props.deletedState]);

  useEffect(() => {
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(props.completedState.slice(-5))
    );
  }, [props.completedState]);

  return (
    <div className="h-4/6  ">
      <TodoSection
        submit={submitHandler}
        value={userTask}
        handler={taskHandler}
        formState={formState}
      />
      <TasksSection
        definedTasks={userTasks}
        deleteHandler={deleteTask}
        completeHandler={completeTask}
      />
    </div>
  );
}
