import React from "react";
import Business_Owner_navbar from "./Business_Owner_navbar";
import BasicTable from "../../Table/BasicTable";
import data from "../../Table/TableDatas";
function Business_Owner_Landing() {
  return (
    <>
      <Business_Owner_navbar />
      <BasicTable data={data}/>
      <h2 style={{ color: "white", textAlign: "center" }}>
        BUSINESS OWNER LANDING PAGE
      </h2>
    </>
  );
}

export default Business_Owner_Landing;
