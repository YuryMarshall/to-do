import React from "react";

function Task(props) {
  return (
    <div className="relative w-2/3 h-36 mx-auto bg-bgcloud bg-no-repeat bg-contain flex justify-center items-center mb-12">
      <p className="text-xl font-bold text-blue-500 w-3/4 ">{props.name}</p>
      <button
        className="w-8 h-8 bg-delete bg-no-repeat bg-contain absolute right-3 bottom-0 hover:scale-125 active:scale-95"
        onClick={props.delHandler}
        id={props.id}
        value={props.name}
      ></button>
      <button
        className="w-8 h-8 bg-done bg-no-repeat bg-contain absolute right-3 top-2 hover:scale-125 active:scale-95"
        onClick={props.completeHandler}
        id={props.id}
        value={props.name}
      ></button>
    </div>
  );
}

export default Task;
