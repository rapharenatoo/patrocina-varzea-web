import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";

import styles from "./styles.module.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function Contact() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("Email está inválido"),
    subject: Yup.string().required("Assunto é obrigatório"),
    message: Yup.string().required("Mensagem é obrigatório"),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <Header />

      <main className={styles.container}>
        <Paper variant="outlined" elevation={3} className={styles.content}>
          <form
            action="https://formsubmit.co/raphaelrenatoo@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            {/* <input
              type="hidden"
              name="_cc"
              value="contato@patrocinavarzea.com.br"
            /> */}
            <input
              type="hidden"
              name="_next"
              value="https://patrocinavarzea.vercel.app/contato/sucesso"
            />
            <Box className={styles.form}>
              <Typography
                variant="h6"
                align="center"
                className={styles.title}
                margin="dense"
              >
                Contato
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="fullname"
                    label="Nome"
                    fullWidth
                    margin="dense"
                    {...register("fullname")}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.fullname ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.fullname?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    margin="dense"
                    {...register("email")}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.email ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    id="subject"
                    label="Assunto"
                    type="subject"
                    fullWidth
                    margin="dense"
                    {...register("subject")}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.subject ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.subject?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="phone"
                    label="Telefone"
                    type="tel"
                    fullWidth
                    margin="dense"
                    {...register("phone")}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.phone ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.phone?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="message"
                    label="Mensagem"
                    type="url"
                    fullWidth
                    multiline
                    rows={5}
                    maxRows={5}
                    margin="dense"
                    {...register("message")}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.message ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.message?.message}
                  </Typography>
                </Grid>
              </Grid>

              <button type="submit" className={styles.button}>
                ENVIAR
              </button>
            </Box>
          </form>
        </Paper>
      </main>
      <Footer />
    </>
  );
}
