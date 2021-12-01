import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import ClubForm from "./pages/ClubForm";
import SponsorForm from "./pages/SponsorForm";
import ConfectionForm from "./pages/ConfectionForm";
import SendEmailSuccess from "./pages/sendEmailSuccess";

import { ThemeProvider } from "@material-ui/core";
import { style } from "./styles/globalStylesMaterialUI";

export function App() {
  return (
    <ThemeProvider theme={style}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/contato/sucesso" element={<SendEmailSuccess />} />
          <Route path="/cadastro/clube" element={<ClubForm />} />
          <Route path="/cadastro/patrocinador" element={<SponsorForm />} />
          <Route path="/cadastro/confeccao" element={<ConfectionForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
