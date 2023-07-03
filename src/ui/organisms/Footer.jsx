import React from "react";

import SolarLogo from "../../img/solarlab.png";

import styles from "./styles/organismsStyles.module.css";

export default function Footer() {
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
      <img src={SolarLogo} alt="Solarlab logo" className={styles.img} />
      <p className="">Севастополь 2023</p>
    </footer>
  );
}
