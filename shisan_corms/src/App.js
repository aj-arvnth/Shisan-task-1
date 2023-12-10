import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLandingPage from "./Pages/MainLandingPage";
import AdminLogin from "./Login/AdminLogin";
import ItamLogin from "./Pages/ITAM/ItamLogin";
import ITAM_Landing from "./Pages/ITAM/ItamLanding";
import FAM_Landing from "./Pages/FAM/FamLanding";
import FamLogin from "./Pages/FAM/FamLogin";
import OthersLogin from "./Pages/Others/OthersLogin";
import Others_Landing from "./Pages/Others/OthersLanding";
import CRMSM_Landing from "./Pages/CRM ServiceManagement/CRMSMLanding";
import CRMSMLogin from "./Pages/CRM ServiceManagement/CRMSMLogin";
import SignUp from "./Login/SignUp";
import ForgetPass from "./Login/ForgetPass";
import Services from "./Pages/Services/Services";
import Services_Landing from "./Pages/Services/ServicesLanding";
import Contact from "./Pages/Contact/Contact";
import Contact_Landing from "./Pages/Contact/ContactLanding";
import Aboutus_Landing from "./Pages/AboutUs/AboutusLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/itam-lo" element={<ItamLogin />} />
          <Route path="/itam-landing" element={<ITAM_Landing />} />
          <Route path="/fam-landing" element={<FAM_Landing />} />
          <Route path="/fam-lo" element={<FamLogin />} />
          <Route path="/others-lo" element={<OthersLogin />} />
          <Route path="/others-landing" element={<Others_Landing />} />
          <Route path="/crmsm-landing" element={<CRMSM_Landing />} />
          <Route path="/crmsm-lo" element={<CRMSMLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/services" element={<Services_Landing />} />
          <Route path="/contact" element={<Contact_Landing/>} />
          <Route path="/aboutus" element={<Aboutus_Landing/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
