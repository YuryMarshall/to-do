import React from "react";
import SolarLogo from "../../img/solarlab.png";

export default function Footer() {
  return (
    <footer className="border-t-2 border-solid border-gray-300 flex flex-col items-center pt-4 text-lg font-bold text-gray-500 ">
      <h2 className=" mb-2 text-center">
        Создано{" "}
        <a
          href="https://yurymarshall.github.io/cv-card/"
          className="text-blue-600 underline"
        >
          Калашником Юрием
        </a>{" "}
        специально для:
      </h2>
      <img src={SolarLogo} alt="Solarlab logo" className="h-14 mb-4" />
      <p className="">Севастополь 2023</p>
    </footer>
  );
}
