import React from "react";
import BasicTable from "../../Table/BasicTable";
import Broker_navbar from "./Broker_navbar";
import data from "../../Table/TableDatas";

function Broker_Landing() {
  return (
    <>
      <Broker_navbar />
      <BasicTable data={data} />
      <h1 style={{ color: "white", textAlign: "center" }}>
        BROKER LANDING PAGE
      </h1>
    </>
  );
}

export default Broker_Landing;
