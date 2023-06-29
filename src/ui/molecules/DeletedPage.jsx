import React from "react";
import DeletedMap from "../atoms/DeletedMap.jsx";

function DeletedPage(props) {
  return (
    <div className="px-10">
      <h1 className="text-blue-300 bg-white h-min px-2 py-2 rounded-2xl font-bold text-2xl mb-7 text-center">
        5 последних дел, которые пришлось отменить
      </h1>
      <DeletedMap />
    </div>
  );
}
export default DeletedPage;
