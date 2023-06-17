import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/core";

import { TabPanel } from "../../components/TabPanel";

import logoImg from "../../assets/logo-tabs.png";

import styles from "./styles.module.scss";

import { style } from "../../styles/globalStylesMaterialUI";

export function TabsCategories() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const tabContent = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const clubContent = () => {
    return (
      <>
        <p>
          Os times de várzea são constituídos, em sua maioria, através de
          encontros de amigos de bairros nas comunidades da periferia. Se unem
          para arrecadar recursos para aquisição de jogos de uniformes para seus
          jogadores, nas categorias juvenil de 07 a 13 anos, categoria sport de
          14 a 30 anos e categoria veterano de 31 a 50 anos. São mais de 241
          unidades esportivas (campos) em terrenos municipais, com administração
          da comunidade local. Em cada unidade (Campo), por final de semana, há
          uma movimentação de 640 jogadores, que multiplicado pelas 241
          unidades, têm-se 154.240 jogadores. São em média 16 times no final de
          semana em cada unidade, multiplicado por 241 unidades totalizam 3.856
          times.
          <br />
          <br />O seu cadastro no aplicativo é muito importante para fortalecer,
          valorizar e dar visibilidade aos times de várzea; Com o seu cadastro
          estaremos abrindo as portas para trazer mais benefícios aos times de
          várzea, tais como: atrair potenciais patrocinadores, aquisição de
          uniformes e demais produtos esportivos tais como, bolas, chuteiras,
          troféus, mochilas, etc.
        </p>
        <img src={logoImg} alt='Logo patrocina várzea' />
      </>
    );
  };

  const sponsorContent = () => {
    return (
      <>
        <p>
          Possibilidade de expor suas marcas em todas as regiões (norte, sul,
          leste e oeste) e seus respectivos bairros da capital do Estado de São
          Paulo, aumentando suas vendas e dando maior visibilidade às suas
          marcas e produtos. É um mercado muito extenso, 241 unidades esportivas
          (campos) em terrenos municipais, com administração é feita pela
          própria população do bairro. Em cada unidade (Campo), por final de
          semana, há uma movimentação de 640 jogadores, que multiplicado pelas
          241 unidades, têm-se 154.240 jogadores, sem contar demais públicos.
          <br />
          <br />
          Uma outra conta: são 16 times no final de semana em cada unidade,
          multiplicado por 241 unidades totalizam 3.856 times. Os patrocínios
          poderão sem feitos através de recursos financeiros, serviços, produtos
          tais como jogos de uniformes, chuteiras, bolas, boné, mochilas,
          troféus, medalhas, produtos alimentícios, etc. Possibilidade também de
          patrocinar um campeonato inteiro ou parte dele. Patrocinando o esporte
          de várzea, indiretamente estará fazendo uma ação social, ajudando
          jovens das comunidades das periferias. 90% dos jogadores
          profissionais, passam pelos times de várzea.
        </p>
        <img src={logoImg} alt='Logo patrocina várzea' />
      </>
    );
  };

  const confectionContent = () => {
    return (
      <>
        <p>
          Apostamos nessa parceria para juntar os interesses mútuos das empresas
          e dos clubes/times, possibilitando às empresas aumentarem suas vendas
          dando maior visibilidade às suas marcas em um mercado muito extenso,
          porém, pouco explorado. Já os clubes/times poderão se beneficiar
          através do interesse dessas mesmas empresas em patrociná-los, obtendo
          descontos ou até mesmo comprando uniformes a preço de custo.
          <br />
          <br />
          Na capital de São Paulo são mais de 241 unidades esportivas (campos)
          em terrenos municipais. Por final de semana, há uma movimentação de
          640 jogadores, que multiplicado pelas 241 unidades, têm-se 154.240
          jogadores, sem contar demais públicos. Uma outra conta: são 16 times
          no final de semana em cada unidade, multiplicado por 241 unidades
          totalizam 3.856 times e as empresas poderão também atuar como
          patrocinadoras de campeonatos. 90% dos jogadores profissionais passam
          pelos times de várzea.
        </p>
        <img src={logoImg} alt='Logo patrocina várzea' />
      </>
    );
  };

  return (
    <ThemeProvider theme={style}>
      <Box classes={styles.container}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          selectionFollowsFocus
          centered
        >
          <Tab label='Clube' {...tabContent(0)} />
          <Tab label='Patrocinador' {...tabContent(1)} />
          <Tab label='Confecção' {...tabContent(2)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            {clubContent()}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {sponsorContent()}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {confectionContent()}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </ThemeProvider>
  );
}
