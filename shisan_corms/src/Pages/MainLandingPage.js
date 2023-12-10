import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Background.css";
import zIndex from "@mui/material/styles/zIndex";

function MainLandingPage() {
  return (
    <>
      <div className="mainbody">  
        <Navbar />
        <h2
          style={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            margin: "610px 0px 0px 600px",
          }}
        >
          MAIN LANDING PAGE
        </h2>
      </div>
      
    </>
  );
}

export default MainLandingPage;
