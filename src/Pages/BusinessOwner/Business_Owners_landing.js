import React from "react";
import Business_Owner_navbar from "./Business_Owner_navbar";
import BasicTable from "../../Table/BasicTable";
import data from "../../Table/TableDatas";
function Business_Owner_Landing() {
  return (
    <>
      <Business_Owner_navbar />
      <h2 style={{ color: "#c6c336", textAlign: "left",position:"absolute",margin:"110px 0px 0px 25px" }}>BUYER'S TABLE</h2>

      <BasicTable data={data}/>

    </>
  );
}

export default Business_Owner_Landing;
