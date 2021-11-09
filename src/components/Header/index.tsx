
import logoImg from '../../assets/logo.png'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="Patrocina Várzea" className={styles.logo} />
      <div className={styles.navLink}>
        <a href="/">
          <p>Cadastra-se</p>
        </a>
        <a href="/sobre">
          <p>Sobre</p>
        </a>
        <a href="/contato">
          <p>Contato</p>
        </a>
      </div>
    </header>
  );
};

