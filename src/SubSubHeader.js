import React from "react";

import "../style/SubSubHeader.scss";

class Barre extends React.Component {
  render() {
    return (
      <div className="SubSubHeader__flex-content">
        <div className="SubSubHeader__flex-containe">
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <div className="SubSubHeader__flex-text">
            <span className="SubSubHeader__textblanc"> 10%</span>{" "}
            <span className="SubSubHeader__testbarra">STUDENT DISCOUNT</span>&nbsp;
            &nbsp; &#10095;
          </div>
          <div className="SubSubHeader__flex-text">
            <span className="SubSubHeader__textblanc"> $ 9.95 </span>-{" "}
            <span className="SubSubHeader__unlimited-n">
              UNLIMITED NEXT DAY DELIVERY FOR 1 YEAR
            </span>{" "}
            &nbsp; &#10095;
          </div>
          <div className="SubSubHeader__unlimited-n">
            <span className="SubSubHeader__textblanc">
              FREE DELIVERY WORLDWIDE
            </span>
            &nbsp; &#10095;
          </div>
        </div>
      </div>
    );
  }
}
export default Barre;
