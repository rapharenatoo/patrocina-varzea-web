import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="Patrocina Várzea" className={styles.logo} />
      <div className={styles.navLink}>
        <Link to="/">
          <p>Cadastra-se</p>
        </Link>
        <Link to="/sobre">
          <p>Sobre</p>
        </Link>
        <Link to="/contato">
          <p>Contato</p>
        </Link>
      </div>
    </header>
  );
};

