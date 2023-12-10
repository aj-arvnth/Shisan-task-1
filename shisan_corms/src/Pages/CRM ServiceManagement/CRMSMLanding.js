import React from "react";
import * as Components from "../../Styles/Components";

import CRMSM from "./CRMSM";
import CRMSMNav from "./CRMSMNav";
import Footer from "../Footer";

function CRMSM_Landing() {
  return (
    <>
      <CRMSMNav />
      <CRMSM />
      <Footer />
    </>
  );
}

export default CRMSM_Landing;
