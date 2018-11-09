import React from "react";

import "../style/BlockB.scss";

function BlockB() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <div className="blockB-img">
        <div className="blockB-img-b1">
          <div className="blockB-img-blurred-back">
            <p className="blockB-img-sunwashed-shades-of">
              SUNWASHED SHADES OF SUMMER
            </p>
            <p className="blockB-img-the-soft-sun-collect">
              THE SOFT SUN COLLECTION ESSENTIALS
            </p>
            <button className="blockB-img-button">VIEW THE SELECTION</button>
          </div>
          <div className="blockB-img-bl">
            <div className="blockB-img-blurred-back1">
              <div className="blockB-img-blol">
                <p className="blockB-img-women2">SHOP</p>
                <p className="blockB-img-women"> WOMEN</p>
              </div>
            </div>
            <div className="blockB-img-blurred-back2">
              <div className="blockB-img-blol">
                <p className="blockB-img-women2">SHOP</p>
                <p className="blockB-img-women"> MEN</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blockB-img-b2">
          <div>
            <div className="blockB-sale">
              <p className="blockB-sale-div">- 50%</p>{" "}
            </div>
            <img
              className="blockB-img-tishort"
              src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/H3AM-Bitmap%20(10).png"
            />
            <p className="blockB-light-cabardine">LIGHT CABARDINE SHIRT</p>
            <p className="blockB-100-00">$ 100.00</p>
            <p className="blockB-70-00">$ 70.00</p>
            <div className="blockB-cercle3">
              <div className="blockB-cercle" />
              <div className="blockB-cercle2" />
              <div className="blockB-cercle2" />
            </div>
          </div>
        </div>
        <div className="blockB-img-b3">
          <img
            className="blockB-img-oval-4"
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/T2sO-Oval%204.svg"
          />
          <p className="blockB-img-dive">DIVE INTO SUMMER</p>
          <p className="blockB-imgwith-the-spring-sum">
            WITH THE SPRING/SUMMER 2016 COLLECTIO FOR KIDS
          </p>
        </div>
      </div>
      <div className="blockB-backp ">
        <img
          className=" blockB-fill-5"
          src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/tjVt-Fill%205.svg"
          alt=""
        />
        <div className="blockB-free-delivery-worldw">
          FREE DELIVERY WORLDWIDE
          <div className="blockB-more-info">
            MORE INFO
            <span className="BlockB-more-flech"> &nbsp; &#62; </span>
          </div>
        </div>

        <img
          className="blockB-fill-4"
          src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/FOWD-Fill%204.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default BlockB;
