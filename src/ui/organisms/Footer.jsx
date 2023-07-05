import React from "react";

import SolarLogo from "../../img/solarlab.png";

import styles from "./styles/organismsStyles.module.css";

export default function Footer() {
  const nowDate = new Date();
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>
        Создано{" "}
        <a
          href="https://yurymarshall.github.io/cv-card/"
          className={styles.link}
        >
          Калашником Юрием
        </a>{" "}
        специально для:
      </h2>
      <a href="https://solarlab.ru/">
        <img src={SolarLogo} alt="Solarlab logo" className={styles.img} />
      </a>
      <p>Севастополь {nowDate.getFullYear()} </p>
    </footer>
  );
}
