import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.png";

import styles from "./styles.module.scss";

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.container}>
      <Link to='/' style={{ backgroundColor: "transparent" }}>
        <img src={logoImg} alt='Patrocina Várzea' className={styles.logo} />
      </Link>

      <div className={styles.navLink}>
        <Link to='/sobre'>
          <p>Sobre</p>
        </Link>
        <Link to='/contato'>
          <p>Contato</p>
        </Link>
      </div>
    </header>
  );
}
