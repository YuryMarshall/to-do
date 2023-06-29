import React from "react";

export default function TaskForm(props) {
  return (
    <form className="w-4/5 flex flex-col items-center" onSubmit={props.submit}>
      <input
        type="text"
        className={
          props.state
            ? "bg-transparent border-red-500 border-4 border-solid w-full  text-red-500 text-sm font-semibold rounded-2xl p-3 mb-5"
            : "bg-transparent border-white border-4 border-solid w-full  text-white text-2xl font-semibold rounded-2xl p-3 mb-5"
        }
        placeholder={
          props.state ? "Задача слишком короткая или длинная" : "Описание"
        }
        onChange={props.handler}
        value={props.value}
      />
      <button
        type="submit"
        className="bg-white px-4 py-2 text-xl font-bold text-blue-300 rounded-2xl hover:scale-110 active:scale-95"
      >
        Добавить
      </button>
    </form>
  );
}
