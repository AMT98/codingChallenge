import React from "react";
import AustinHealey from "../assets/austin-healey.png";
import Jaguar from "../assets/jaguar.png";
import MG from "../assets/mg.png";
import Triumph from "../assets/triumph.png";

export const Cars = () => {
  return (
    <div className="carsChoices">
      <div className="selectVehicleHeader">
        <p>Select a Make</p>
      </div>
      <div className="carsCategory">
        <div title="Shop OEM Austin Healey Parts">
          <h3>Austin Healey</h3>
          <img src={AustinHealey} alt="AustinHealeyCarImg" />
        </div>
        <div title="Shop OEM Jaguar Parts">
          <h3>Jaguar</h3>
          <img src={Jaguar} alt="JaguarCarImg" />
        </div>

        <div title="Shop OEM MG Parts">
          <h3>MG</h3>
          <img src={MG} alt="MGCarImg" />
        </div>

        <div title="Shop OEM Triumph Parts">
          <h3>Triumph</h3>
          <img src={Triumph} alt="TriumphCarImg" />
        </div>
      </div>
    </div>
  );
};
