import React from "react";
import "../style/Header.scss";
class Header extends React.Component {
  render() {
    return (
      <div className="Header__Menu__topnav">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <a className="Header__Menu__active" href="#home">
          <select className="Header__Menu__greenColor">
            <option value="USA">USA</option>
          </select>
        </a>
        <a href="">DAILY DEALS</a>
        <a href="">GIFT CARDS</a>
        <a href="">SELL</a>
        <a href="">HELP & CONTACT</a>
        <div className="Header__Menu__search-container">
          <a>
            <div className="Header__Menu__blockimg">
              <img
                className="Header__Menu__imagee"
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/OV69-user.svg"
              />
              <div>LOGIN </div>
            </div>
          </a>
          <a>
            <div className="Header__Menu__blockimg">
              <img
                className="Header__Menu__imagee2"
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/kr63-Fill.svg"
              />
              <div className="Header__Menu__part2"> $ 1.023</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default Header;
