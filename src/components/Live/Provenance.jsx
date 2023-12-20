import React from "react";
import "./Provenance.css";

function Provenance() {
  return (
    <div className="provenance-card br-8 pd-8">
      <div className="title fs-20">Provenance</div>
      <div className="info">
        {/* <img /> */}
        <div className="owners fs-16 gp-4">
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
