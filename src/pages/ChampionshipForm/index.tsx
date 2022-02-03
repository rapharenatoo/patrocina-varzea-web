import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Button,
  ButtonBase,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./styles.module.scss";
import RadioButton from "../../components/RadioButton";
import CheckBox from "../../components/CheckBox";
import { useState } from "react";
import database from "../../services/firebase";
import { Link } from "react-router-dom";

const ChampionshipForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome do Clube é obrigatório"),
    email: Yup.string().email("Email está inválido"),
  });

  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [name, setName] = useState("");
  const [nameContact, setNameContact] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState({
    norte: false,
    sul: false,
    leste: false,
    oeste: false,
  });
  const [reward, setReward] = useState({
    uniforme: false,
    trofeu: false,
    medalhas: false,
    dinheiro: false,
  });

  const newChampionship = (data: any) => {
    data.preventDefault();
    database
      .collection("championship")
      .add({
        name,
        nameContact,
        contactPhone,
        email,
        date,
        zipCode,
        street,
        number,
        neighborhood,
        state,
        city,
        zone,
        reward,
      })
      .then(() => {
        console.log("Cadastrado com Sucesso!!!");
        console.log("zone: ", zone);
        console.log("reward: ", reward);
        window.alert("Cadastrado com Sucesso!");
      })
      .catch(() => {
        console.log("Alguma coisa deu errado!!!");
        window.alert("Alguma coisa deu errado. Tente novamente!");
      });

    setName("");
    setNameContact("");
    setContactPhone("");
    setEmail("");
    setDate("");
    setZipCode("");
    setStreet("");
    setNumber("");
    setNeighborhood("");
    setState("");
    setCity("");
    setZone({
      norte: false,
      sul: false,
      leste: false,
      oeste: false,
    });
    setReward({
      uniforme: false,
      trofeu: false,
      medalhas: false,
      dinheiro: false,
    });
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

  const { norte, sul, leste, oeste } = zone;

  const handleZoneChange = (event: any) => {
    setZone({
      ...zone,
      [event.target.name]: event.target.checked,
    });
  };

  const { uniforme, trofeu, medalhas, dinheiro } = reward;

  const handleRewardChange = (event: any) => {
    setReward({
      ...reward,
      [event.target.name]: event.target.checked,
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
              Campeonato
            </Typography>

            <form onSubmit={newChampionship}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="name"
                    required
                    label="Nome do Campeonato"
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
                    id="nameContact"
                    label="Nome do Organizador"
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
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
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
                  <TextField
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
                    id="date"
                    label="Mês de Início"
                    fullWidth
                    margin="dense"
                    color="primary"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputProps={{
                      className: styles.input,
                    }}
                    error={errors.date ? true : false}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.date?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                  <TextField
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
                    id="street"
                    label="Endereço"
                    fullWidth
                    margin="dense"
                    value={street}
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

                <Grid item xs={12} sm={12}>
                  <CheckBox
                    key="zone"
                    labelTitle="Localidade: "
                    checkedOne={norte}
                    checkedTwo={sul}
                    checkedThree={leste}
                    checkedFour={oeste}
                    valueOne="norte"
                    valueTwo="sul"
                    valueThree="leste"
                    valueFour="oeste"
                    labelOne="Zona Norte"
                    labelTwo="Zona Sul"
                    labelThree="Zona Leste"
                    labelFour="Zona Oeste"
                    handleChange={handleZoneChange}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.zone?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <CheckBox
                    key="reward"
                    labelTitle="Premiação:"
                    checkedOne={uniforme}
                    checkedTwo={trofeu}
                    checkedThree={medalhas}
                    checkedFour={dinheiro}
                    valueOne="uniforme"
                    valueTwo="trofeu"
                    valueThree="medalhas"
                    valueFour="dinheiro"
                    labelOne="Jogo de Uniforme"
                    labelTwo="Troféu"
                    labelThree="Medalhas"
                    labelFour="Dinheiro"
                    handleChange={handleRewardChange}
                  />
                  <Typography
                    variant="inherit"
                    color="textSecondary"
                    className={styles.errorMessage}
                  >
                    {errors.reward?.message}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={3} className={styles.buttonContainer}>
                <Link to="/cadastro/clube" className={styles.buttonBase}>
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

export default ChampionshipForm;
