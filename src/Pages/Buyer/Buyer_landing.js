import React from "react";
import Buyer_navbar from "./Buyer_navbar";
import BasicTable from "../../Table/BasicTable";
import data from "../../Table/TableDatas";
import { PositionOptions } from "mapbox-gl";

function Buyer_Landing() {
  return (
    <>
      <Buyer_navbar />
      
        <h2 style={{ color: "#c6c336", textAlign: "left",position:"absolute",margin:"110px 0px 0px 25px" }}>SELLER'S TABLE</h2>
      
      <BasicTable data={data} />
    </>
  );
}

export default Buyer_Landing;
