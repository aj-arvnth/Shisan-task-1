import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/Login/AdminLogin";
import UserLogin from "./Pages/Login/UserLogin";
import LandingPage from "./landingpage";
import SignUp from "./Pages/Login/SignUp";
import BuyerLogin from "./Pages/Buyer/BuyersLogin";
import BrokerLogin from "./Pages/Broker/BrokersLogin";
import BusinessOwnersLogin from "./Pages/BusinessOwner/BusinessOwnersLogin";
import ProfessionalServicesLogin from "./Pages/ProfessionalService/ProfessionalServicesLogin";
import Buyer_Landing from "./Pages/Buyer/Buyer_landing";
import Business_Owner_Landing from "./Pages/BusinessOwner/Business_Owners_landing";
import Professional_Service_Landing from "./Pages/ProfessionalService/Professional_Services_landing";
import Broker_Landing from "./Pages/Broker/Broker_landing";
import ForgetPass from "./Pages/Login/ForgetPass";
import SubscriptionPage from "./Pages/Subscription/SubscriptionPage";
import PaymentPage from "./Pages/Payment/PaymentPage";
import Map from "./Pages/Map";
import BasicTable from "./Table/BasicTable";
import data from "./Table/TableDatas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/table" element={<BasicTable data={data} />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/payment/:subscriptionIndex" element={<PaymentPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/buyer_lo" element={<BuyerLogin />} />
          <Route path="/broker_lo" element={<BrokerLogin />} />
          <Route path="/business_owners_lo" element={<BusinessOwnersLogin />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route
            path="/professional_services_lo"
            element={<ProfessionalServicesLogin />}
          />
          <Route path="/buyer_landing" element={<Buyer_Landing />} />
          <Route
            path="/business_owner_landing"
            element={<Business_Owner_Landing />}
          />
          <Route
            path="/professional_service_landing"
            element={<Professional_Service_Landing />}
          />
          <Route path="/broker_landing" element={<Broker_Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
