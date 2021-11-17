import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import PhoneImg from "../../assets/phone.png";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <>
      <Header />
      <section id="banner" className={styles.banner}>
        <img src={PhoneImg} alt="App" className={styles.phone} />
        <div className={styles.bannerText}>
          <p>
            A plataforma funciona como uma vitrine de clubes, na qual, por meio
            de um aplicativo, potenciais patrocinadores, de qualquer porte,
            podem patrocinar os clubes e participar de suas conquistas.
          </p>
          <a href="https://play.google.com/store/apps" target="_blank">
            Baixe o App
          </a>
        </div>
      </section>
      <section id="categories" className={styles.categories}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="#clube" defaultChecked>
              Clube
            </a>
          </li>
          <li className={styles.item}>
            <a href="#patrocinador">Patrocinador</a>
          </li>
          <li className={styles.item}>
            <a href="#confeccao">Confecção Uniformes</a>
          </li>
        </ul>
        <div className={styles.contentItem}></div>
      </section>
      <Footer />
    </>
  );
}
