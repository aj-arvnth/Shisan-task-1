import React from "react";
import * as Components from "../../Styles/Components";

import ITAM from "./ITAM";
import ITAMNav from "./ITAMNav";
import Footer from "../Footer";

function ITAM_Landing() {
  return (
    <>
      <ITAMNav />
     <ITAM/>
     <Footer/>
    </>
  );
}

export default ITAM_Landing;
