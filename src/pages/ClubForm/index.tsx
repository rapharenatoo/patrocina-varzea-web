import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import RadioButton from "../../components/RadioButton";

import database from "../../services/firebase";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ClubForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome do Clube é obrigatório"),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("Email está inválido"),
    taxId: Yup.string().required("CPF/CNPJ é obrigatório"),
    password: Yup.string()
      .required("Senha é obrigatório")
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(40, "A senha não deve ter mais de 40 caracteres"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Senhas não são iguais"
    ),
    zipCode: Yup.string().required("CEP é obrigatório"),
    street: Yup.string().required("Endereço é obrigatório"),
    number: Yup.string().required("Número é obrigatório"),
    neighborhood: Yup.string().required("Bairro é obrigatório"),
    state: Yup.string().required("Estado é obrigatório"),
    city: Yup.string().required("Cidade é obrigatório"),
  });

  const {
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [taxId, setTaxId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [foundationDate, setFoundationDate] = useState("");
  const [zone, setZone] = useState("");
  const [clubColors, setClubColors] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [nameContact, setNameContact] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ownField, setOwnField] = useState("no");
  const [wantSponsorship, setWantSponsorship] = useState("yes");
  const [isSponsorship, setIsSponsorship] = useState("no");

  const newClub = (data: any) => {
    data.preventDefault();
    database
      .collection("club")
      .add({
        name,
        email,
        taxId,
        password,
        zipCode,
        street,
        number,
        neighborhood,
        state,
        city,
        foundationDate,
        zone,
        clubColors,
        instagram,
        facebook,
        nameContact,
        phoneContact,
        endDate,
        ownField,
        wantSponsorship,
        isSponsorship,
      })
      .then(() => {
        console.log("Cadastrado com Sucesso!!!");
        window.alert("Cadastrado com Sucesso!");
      })
      .catch(() => {
        console.log("Alguma coisa deu errado!!!");
        window.alert("Alguma coisa deu errado. Tente novamente!");
      });

    setName("");
    setEmail("");
    setTaxId("");
    setPassword("");
    setConfirmPassword("");
    setZipCode("");
    setStreet("");
    setNumber("");
    setNeighborhood("");
    setState("");
    setCity("");
    setFoundationDate("");
    setZone("");
    setClubColors("");
    setInstagram("");
    setFacebook("");
    setNameContact("");
    setPhoneContact("");
    setEndDate("");
    setOwnField("no");
    setWantSponsorship("yes");
    setIsSponsorship("no");
  };

  const onBlurZipCode = (ev: any) => {
    const { value } = ev.target;

    const zipCode = value?.replace(/[^0-9]/g, "");

    if (zipCode?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setCity(data.localidade);
        setNeighborhood(data.bairro);
        setStreet(data.logradouro);
        setState(data.uf);
      });
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Paper variant="outlined" elevation={0} className={styles.content}>
          <Box className={styles.form}>
            <Typography
              variant="h6"
              align="center"
              className={styles.title}
              margin="dense"
            >
              Cadastrar Clube
            </Typography>
            <form onSubmit={newClub}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="name"
                    label="Nome do Clube"
                    fullWidth
                    margin="dense"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.name ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.name?.message}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    onBlur={(ev) => onBlurZipCode(ev)}
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
                    id="street"
                    label="Endereço"
                    fullWidth
                    margin="dense"
                    value={street}
                    name="street"
                    onChange={(e) => setStreet(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.street ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.street?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                  <TextField
                    required
                    id="number"
                    label="Nº"
                    fullWidth
                    margin="dense"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
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
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                    id="foundationDate"
                    label="Data de Fundação"
                    fullWidth
                    margin="dense"
                    value={foundationDate}
                    onChange={(e) => setFoundationDate(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.foundationDate ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.foundationDate?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    id="zone"
                    label="Região / Zona"
                    fullWidth
                    margin="dense"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
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
                    id="clubColors"
                    label="Cores do Clube"
                    fullWidth
                    margin="dense"
                    value={clubColors}
                    onChange={(e) => setClubColors(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.clubColors ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.clubColors?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="instagram"
                    label="Instagram"
                    fullWidth
                    margin="dense"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
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
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
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
                    id="nameContact"
                    label="Nome do Contato"
                    fullWidth
                    margin="dense"
                    value={nameContact}
                    onChange={(e) => setNameContact(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.nameContact ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.nameContact?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phoneContact"
                    label="Telefone"
                    fullWidth
                    margin="dense"
                    value={phoneContact}
                    onChange={(e) => setPhoneContact(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.phoneContact ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.phoneContact?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <RadioButton
                    label="Campo Próprio?"
                    defaultValue={ownField}
                    labelRadioOne="Sim"
                    labelRadioTwo="Não"
                    id="ownField"
                    handleChange={(value) => {
                      setOwnField(value);
                    }}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.ownField?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <RadioButton
                    label="Deseja receber Patrocinio?"
                    defaultValue={wantSponsorship}
                    labelRadioOne="Sim"
                    labelRadioTwo="Não"
                    id="wantSponsorship"
                    handleChange={(value) => {
                      setWantSponsorship(value);
                    }}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.wantSponsorship?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <RadioButton
                    label="Tem Patrocinio?"
                    defaultValue={isSponsorship}
                    labelRadioOne="Sim"
                    labelRadioTwo="Não"
                    id="isSponsorship"
                    handleChange={(value) => {
                      setIsSponsorship(value);
                    }}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.isSponsorship?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="endDate"
                    label="Término do Patrocinio"
                    fullWidth
                    margin="dense"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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
              <Box mt={3} className={styles.buttonContainer}>
                <Link to="/" className={styles.buttonBase}>
                  <Typography>VOLTAR</Typography>
                </Link>
                <Button
                  variant="contained"
                  type="submit"
                  className={styles.button}
                >
                  <Typography>CADASTRAR</Typography>
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </main>
      <Footer />
    </>
  );
};

export default ClubForm;
