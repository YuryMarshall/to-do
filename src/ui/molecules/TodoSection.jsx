import React from "react";
import TaskForm from "../atoms/TaskForm.jsx";

export default function TodoSection(props) {
  return (
    <section className="w-full  flex flex-col items-center mb-5">
      <h1 className="text-blue-300 bg-white h-min px-3 py-2 rounded-2xl font-bold text-2xl mb-7 animate-pulse">
        Запланируем что-нибудь?
      </h1>
      <TaskForm
        value={props.value}
        submit={props.submit}
        handler={props.handler}
        state={props.formState}
      />
    </section>
  );
}
