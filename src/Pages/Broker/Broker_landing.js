import React from "react";
import BasicTable from "../../Table/BasicTable";
import Broker_navbar from "./Broker_navbar";
import data from "../../Table/TableDatas";

function Broker_Landing() {
  return (
    <>
      <Broker_navbar />
      
      <h2 style={{ color: "white", textAlign: "center",position:"absolute",margin:"630px 0px 0px 600px" }}>
        BROKER LANDING PAGE
      </h2>
    </>
  );
}

export default Broker_Landing;
