import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import styles from './styles.module.scss'

export function About() {
  return (
    <>
    <Header />
      <main className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
                <h1>Sobre</h1>
                <p>
                        A plataforma funciona como uma vitrine para os clubes/times da várzea,
                        na qual, por meio deste aplicativo, estarão concorrendo gratuitamente a
                        fardamentos completos, bolas, chuteiras, luvas, troféus, medalhas, todos
                        os possíveis produtos, não se limitando aos materiais esportivos, através
                        de potenciais patrocinadores de qualquer porte, que poderão divulgar
                        seus produtos, expor suas marcas nos uniformes.
                        <br/><br/>
                        Empresas de confecções de uniformes farão seus cadastros no aplicativo
                        gratuitamente com intuito de vender seus produtos e serviços, poderão
                        também patrocinar os clubes/times, expondo suas marcas, em
                        contrapartidas, poderão disponibilizar fardamentos completos para
                        quantos times quiser, de livre escolha.
                        <br/><br/>
                        Os patrocinadores além de valorizarem o esporte armador, indiretamente
                        estarão ajudando os clubes/times das periferias a darem oportunidades
                        aos jovens, não só a praticarem esporte como também a conviver com
                        pessoas mais experientes, de família, do bem, tirando-os do caminho das
                        drogas, ajudando-os em sua formação educacional, conselhos,
                        direcionamentos e até mesmo oportunidades profissionais.
                </p>
            </div>
          </div>
      </main>
      
      <Footer />
    </>
  );
};

