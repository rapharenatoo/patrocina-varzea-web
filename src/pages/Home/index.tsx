import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TabsCategories } from "../../components/TabsCategories";

import PhoneImg from "../../assets/app.gif";

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
        <TabsCategories />
      </section>
      <Footer />
    </>
  );
}
