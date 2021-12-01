import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./styles.module.scss";
import RadioButton from "../../components/RadioButton";

const ClubForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Nome do Clube é obrigatório"),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("Email está inválido"),
    taxId: Yup.string().required("CPF/CNPJ é obrigatório"),
    password: Yup.string()
      .required("Senha é obrigatório")
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(40, "A senha não deve ter mais de 40 caracteres"),
    confirmPassword: Yup.string()
      .required("Confirmação de senha é obrigatório")
      .oneOf([Yup.ref("password"), null], "Senhas não são iguais"),
    zipCode: Yup.string().required("CEP é obrigatório"),
    address: Yup.string().required("Endereço é obrigatório"),
    number: Yup.string().required("Número é obrigatório"),
    neighborhood: Yup.string().required("Bairro é obrigatório"),
    state: Yup.string().required("Estado é obrigatório"),
    city: Yup.string().required("Cidade é obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <Header />{" "}
      <main className={styles.container}>
        <Paper variant="outlined" elevation={3} className={styles.content}>
          <Box className={styles.form}>
            <Typography
              variant="h6"
              align="center"
              className={styles.title}
              margin="dense"
            >
              Cadastrar Clube
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="fullname"
                  label="Nome do Clube"
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
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="taxId"
                  label="CPF / CNPJ"
                  fullWidth
                  margin="dense"
                  {...register("taxId")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.taxId ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.taxId?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="password"
                  label="Senha"
                  type="password"
                  fullWidth
                  margin="dense"
                  color="primary"
                  {...register("password")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.password ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="confirmPassword"
                  label="Confirmação Senha"
                  type="password"
                  fullWidth
                  margin="dense"
                  {...register("confirmPassword")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.confirmPassword?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="zipCode"
                  label="CEP"
                  fullWidth
                  margin="dense"
                  {...register("zipCode")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.zipCode ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.zipCode?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  id="address"
                  label="Endereço"
                  fullWidth
                  margin="dense"
                  {...register("address")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.address ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.address?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="number"
                  label="Nº"
                  fullWidth
                  margin="dense"
                  {...register("number")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.number ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.number?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="neighborhood"
                  label="Bairro"
                  fullWidth
                  margin="dense"
                  {...register("neighborhood")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.neighborhood ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.neighborhood?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="state"
                  label="Estado"
                  fullWidth
                  margin="dense"
                  {...register("state")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.state ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.state?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  label="Cidade"
                  fullWidth
                  margin="dense"
                  {...register("city")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.city ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.city?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  id="dateFoundation"
                  label="Data de Fundação"
                  fullWidth
                  margin="dense"
                  {...register("dateFoundation")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.dateFoundation ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.dateFoundation?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  id="zone"
                  label="Região / Zona"
                  fullWidth
                  margin="dense"
                  {...register("zone")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.zone ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.zone?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  id="colors"
                  label="Cores do Clube"
                  fullWidth
                  margin="dense"
                  {...register("colors")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.colors ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.colors?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="instagram"
                  label="instagram"
                  fullWidth
                  margin="dense"
                  {...register("instagram")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.instagram ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.instagram?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="facebook"
                  label="Facebook"
                  fullWidth
                  margin="dense"
                  {...register("facebook")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.facebook ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.facebook?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="contactName"
                  label="Nome do Contato"
                  fullWidth
                  margin="dense"
                  {...register("contactName")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.contactName ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.contactName?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="contactPhone"
                  label="Telefone"
                  fullWidth
                  margin="dense"
                  {...register("contactPhone")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.contactPhone ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.contactPhone?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioButton
                  label="Campo Próprio?"
                  valueOne="yes"
                  valueTwo="no"
                  labelRadioOne="Sim"
                  labelRadioTwo="Não"
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.options?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioButton
                  label="Deseja receber Patrocinio?"
                  valueOne="yes"
                  valueTwo="no"
                  labelRadioOne="Sim"
                  labelRadioTwo="Não"
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.options?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioButton
                  label="Tem Patrocinio?"
                  valueOne="yes"
                  valueTwo="no"
                  labelRadioOne="Sim"
                  labelRadioTwo="Não"
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  className={styles.errorMessage}
                >
                  {errors.options?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="endDate"
                  // type="date"
                  label="Término do Patrocinio"
                  fullWidth
                  margin="dense"
                  {...register("endDate")}
                  InputProps={{
                    className: styles.input,
                  }}
                  error={errors.endDate ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.endDate?.message}
                </Typography>
              </Grid>
            </Grid>

            <Box mt={3}>
              <Button
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                className={styles.button}
              >
                <Typography>Cadastrar</Typography>
              </Button>
            </Box>
          </Box>
        </Paper>
      </main>
      <Footer />
    </>
  );
};

export default ClubForm;
