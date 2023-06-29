import React from "react";
import CompletedMap from "../atoms/CompletedMap.jsx";

function CompletedPage() {
  return (
    <div className="px-10">
      <h1 className="text-blue-300 bg-white h-min px-2 py-2 rounded-2xl font-bold text-2xl mb-7 text-center">
        5 последних выполненных дел
      </h1>
      <CompletedMap />
    </div>
  );
}
export default CompletedPage;
