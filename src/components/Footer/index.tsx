import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.png";
import bllackdevImg from "../../assets/bllackdev.png";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.contentTop}>
        <Link to="/" style={{ backgroundColor: "transparent" }}>
          <img src={logoImg} alt="Patrocina Várzea" className={styles.logo} />
        </Link>
        <div className={styles.navLink}>
          <Link to="/sobre">
            <p>Sobre</p>
          </Link>
          <Link to="/contato">
            <p>Contato</p>
          </Link>
          <a href="https://play.google.com/store/apps" target="_blank">
            <p>Baixe o App</p>
          </a>
        </div>
      </div>
      <div className={styles.contentBottom}>
        <p>
          Copyright Notice © 2021 | PV - Patrocina Várzea LTDA | CNPJ:
          00.000.000/0001-00 | São Paulo/SP | Brazil | All rights reserved
          Patrocina Várzea
        </p>
        <p>Website developed by: Bllackdev</p>
        <img
          src={bllackdevImg}
          alt="Bllackdev"
          className={styles.bllackdevLogo}
        />
      </div>
    </footer>
  );
}
