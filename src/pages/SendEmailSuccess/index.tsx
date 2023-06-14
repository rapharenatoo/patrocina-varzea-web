import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./styles.module.scss";

import checkImg from "../../assets/check.png";

export function SendEmailSuccess() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Paper variant='outlined' elevation={3} className={styles.content}>
          <Box className={styles.form}>
            <img
              src={checkImg}
              alt='Patrocina Várzea'
              className={styles.logo}
            />
            <Typography align='center' className={styles.title} margin='dense'>
              E-mail enviado!
            </Typography>

            <Typography
              variant='body2'
              align='center'
              className={styles.subTitle}
              margin='dense'
            >
              Seu e-mail foi enviado com sucesso. Obrigado pelo seu contato!
            </Typography>

            <Box mt={3}>
              <Link to='/'>Confirmar</Link>
            </Box>
          </Box>
        </Paper>
      </main>
      <Footer />
    </>
  );
}

export default SendEmailSuccess;
