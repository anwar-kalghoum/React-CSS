import React from "react";

import Header from "./Header";
import SubHeader from "./SubHeader";
import SubSubHeader from "./SubSubHeader";

import "./styles.scss";

function HeaderP() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      {/* Menu */}
      <Header />
      <SubHeader />
      <SubSubHeader />
    </div>
  );
}
export default HeaderP;
