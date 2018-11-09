import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
// Menu
import HeaderP from "./HeaderP";
import HeaderMobile from "./HeaderMobile";

//Content
import BlockA from "./BlockA";
import ContentMobile from "./ContentMobile";
import BlockB from "./BlockB";
import BlockC from "./BlockC";
import BlockD from "./BlockD";
//Footer
import Footer from "./Footer";
import SubFooter from "./SubFooter";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />

      <MediaQuery query="(min-width: 1201px)">
        <HeaderP />
      </MediaQuery>
      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <HeaderMobile />
      </MediaQuery>

      {/* Menu */}
      {/* Content */}
      <MediaQuery query="(min-width: 1201px)">
        <BlockA />
      </MediaQuery>
      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <ContentMobile />
      </MediaQuery>
      <BlockB />
      <BlockC />
      <BlockD />
      {/* Footer */}
      <Footer />
      <SubFooter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
