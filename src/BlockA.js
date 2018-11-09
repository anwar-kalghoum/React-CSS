import React from "react";

import "../style/BlockA.scss";

function BlockA() {
  return (
    <div className="blockA-img">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <div className="blockA-img-div ">
        <div className="div-riot-is-a-style">
          <p className="blockA-imgpop-riot">
            POP RIOT<br /> IS A STYLE<br /> EXPLOSION<br /> F/W ‘16{" "}
          </p>
        </div>
      </div>
      <div className="blockA-img-divtwo ">
        <p className="blockA-img-fall">FALL WINTER ’16 PREVIEW DENIM</p>
        <p className="blockA-img-rectangle-32" />
      </div>{" "}
      <div className="blockA-img-div ">
        <p className="blockA-img-denimeye">
          #DENIMEYE<br /> ON<br /> TOUR
        </p>
      </div>{" "}
      <div className="blockA-img-div ">
        <p className="blockA-img-denimeye-kids-coll">
          KIDS<br /> COLLECTION<br /> F/W ‘16
        </p>
      </div>
    </div>
  );
}

export default BlockA;
