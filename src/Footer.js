import React from "react";

import "../style/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer__re">
        <div className="Footer__rectangle-27">
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <div>
            <div className="Footer__contentDisplay">
              <div>
                <p className="Footer__questions">questions</p>
                <p className="Footer__help-track-order-ret ">
                  Help <br />Track Order <br />Returns
                </p>
              </div>
              <div>
                <p className="Footer__questions">WHAT’S IN STORE</p>
                <p className="Footer__help-track-order-ret ">
                  Help <br />Track Order <br />Returns
                </p>
              </div>
              <div>
                <p className="Footer__questions">FOLLOW US</p>
                <p className="Footer__help-track-order-ret ">
                  Facebook<br />
                  Twitter<br />
                  Google+<br />
                  Instagram
                </p>
              </div>
              <div>
                <p className="Footer__questions">MORE ABOUT</p>
                <p className="Footer__help-track-order-ret ">
                  Corporate Responsibility<br />
                  Jobs at DINK<br />
                  Investors<br />
                  As Seen On Screen
                </p>
              </div>
              <div>
                <p className="Footer__questions">MORE SITES</p>
                <p className="Footer__help-track-order-ret ">
                  Mobile and DINK apps<br />
                  Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className="Footer__contentDisTwo">
            <div className="Footer__dded">
              <p className="Footer__shipping-to"> SHIPPING TO:</p>
              <select className="Footer__greenColorr">
                <option value="audi" selected>
                  USA
                </option>
              </select>
            </div>
            {/*img1*/}
            <div className="Footer__BlockImg">
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/uMD0-v1.png"
                  alt=""
                />
              </div>
              {/* img2 */}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/oe24-v2.png"
                  alt=""
                />
              </div>
              {/* img3 */}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/piNb-v3.jpg"
                  alt=""
                />
              </div>
              {/* img 4*/}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/plZw-v4.png"
                  alt=""
                />
              </div>
              {/* img 5*/}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/YERc-v5.png"
                  alt=""
                />
              </div>
              {/* img 6*/}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/Kh4d-v6.png"
                  alt=""
                />
              </div>
              {/* img 7*/}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/Ph2p-v7.png"
                  alt=""
                />
              </div>
              {/* img 8*/}
              <div>
                <img
                  className="Footer__img__Size"
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/RHDJ-v8.png"
                  alt=""
                />
              </div>
            </div>
            {/* img */}
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
