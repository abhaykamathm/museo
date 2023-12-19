import React from "react";
import "./Provenance.css";

function Provenance() {
  return (
    <div className="provenance-card">
      <div className="title">Provenance</div>
      <div className="info">
        {/* <img /> */}
        <div className="owners">
          <div>You could be the one</div>
          <div>Alan Turing - 1982</div>
          <div>Walt Whitman - 19th Cent</div>
          <div>Pvt Collectors - 18th Cent</div>
          <div>Unknown - 15th Cen</div>
        </div>
      </div>
    </div>
  );
}

export default Provenance;
