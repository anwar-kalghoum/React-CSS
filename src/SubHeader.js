import React from "react";
import "../style/SubHeader.scss";

class SubHeader extends React.Component {
  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <div className="SubHeader__content-headtt">
          <div className="SubHeader__div2">
            <img
              className="SubHeader__img"
              src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/BwCb-Dink%20logo.svg"
            />
            <div className="SubHeader__selectdiv">
              <select>
                <option> WOMEN </option>
              </select>
            </div>
            <div className="SubHeader__selectdiv">
              <label>
                <select>
                  <option> MEN </option>
                </select>
              </label>
            </div>
            <div className="SubHeader__selectdiv">
              <label>
                <select>
                  <option> KIDS </option>
                </select>
              </label>
            </div>
            <div className="SubHeader__selectdiv">
              <label>
                <select>
                  <option> ACCESSORIES </option>
                </select>
              </label>
            </div>
          </div>
          <div className="SubHeader__div1">
            <div className="SubHeader__live-fitting-room">
              LIVE FITTING ROOM{" "}
            </div>
            <div className="SubHeader__ecofriendly">
              <span className="SubHeader__rouge">ECO</span>FRIENDLY{" "}
            </div>
            <div>
              <img
                className="SubHeader__search-icon"
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/nUrk-serach.PNG"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SubHeader;
