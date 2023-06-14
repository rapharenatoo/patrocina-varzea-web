import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { SendEmailSuccess } from "../pages/SendEmailSuccess";
import { PrivacyPolicies } from "../pages/PrivacyPolicies";

import { ThemeProvider } from "@material-ui/core";

import { style } from "../styles/globalStylesMaterialUI";

export function AppRoutes() {
  return (
    <ThemeProvider theme={style}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobre' element={<About />} />
          <Route path='contato' element={<Contact />} />
          <Route path='contato/sucesso' element={<SendEmailSuccess />} />
          <Route path='politicas-privacidade' element={<PrivacyPolicies />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
