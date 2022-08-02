import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import ClubForm from "../pages/ClubForm";
import SponsorForm from "../pages/SponsorForm";
import ConfectionForm from "../pages/ConfectionForm";
import ChampionshipForm from "../pages/ChampionshipForm";
import SendEmailSuccess from "../pages/SendEmailSuccess";
import { PrivacyPolicies } from "../pages/PrivacyPolicies";

import { ThemeProvider } from "@material-ui/core";
import { style } from "../styles/globalStylesMaterialUI";

export function AppRoutes() {
  return (
    <ThemeProvider theme={style}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact />} />
          <Route path="contato/sucesso" element={<SendEmailSuccess />} />
          <Route path="cadastro/clube" element={<ClubForm />} />
          <Route
            path="cadastro/clube/campeonato"
            element={<ChampionshipForm />}
          />
          <Route path="cadastro/patrocinador" element={<SponsorForm />} />
          <Route path="cadastro/confeccao" element={<ConfectionForm />} />
          <Route path="politicas-privacidade" element={<PrivacyPolicies />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
