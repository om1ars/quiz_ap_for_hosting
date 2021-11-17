import React from "react";
import "./index";
import "./styles.scss";

export default function Second() {
  return (
    <div>
      <div className="second__container"></div>
      <div class="second_background__container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div class="second__stars"></div>
        <div class="second__twinkling"></div>
        <div class="second__clouds"></div>
      </div>
    </div>
  );
}
