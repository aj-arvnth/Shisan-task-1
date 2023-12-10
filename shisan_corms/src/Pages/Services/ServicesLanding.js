import React from "react";
import * as Components from "../../Styles/Components";

import Services from "./Services";
import Nav from "./ServicesNav";
import Footer from "../Footer";

function Services_Landing() {
  return (
    <>
      <Nav />
     <Services />
     <Footer/>
    </>
  );
}

export default Services_Landing;
