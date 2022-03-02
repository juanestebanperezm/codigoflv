import React from "react";

import  "../styles/Footer.css"

import AdvertisementBottom from "./advertisement/AdvertisementBottom";

function Footer() {
  return (
    <div>
      <div className="dummy_page">
        <AdvertisementBottom />
      </div>
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Colaboradores</h1>
            <ul>
              <li>Diego</li>
              <li>Lynros</li>
              <li>xStaked</li>
              <li>Darksito</li>
              <li>Alejandro</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h1>.</h1>
              <li>nmskxkvm (juansito)</li>
              <li>DC dev</li>
              <li>gatofullempresario (esta de miron pero sirve de algo)</li>
              <li>C R I S T I A N</li>
              <li>jhon deiverson</li>
            </ul>
          </div>
          <div className="col">
            <h1>.</h1>
            <ul>
              <li>#0209 el parcero no muestra bien el nombre en discord</li>
              <li>Will Dv</li>
              <li>ema4hhh</li>
              <li>juanjhoaneti</li>
              <li>janko</li>
            </ul>
          </div>
          
          <div className="col">
            <h1>.</h1>
            <ul>
              <li>$xyh</li>
              <li>lyonhawk</li>
              <li>StevenM</li>
            </ul>
          </div>
          
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
