import React from "react";
import Body from "../assets/body.jpg";
import BrakeSystem from "../assets/brake-system.jpg";
import Cables from "../assets/cables.jpg";
import CarCare from "../assets/car-care.jpg";
import CompetitionParts from "../assets/competition-parts.jpg";
import ConvertibleParts from "../assets/tops-covers.jpg";
import CoolingSystem from "../assets/cooling.jpg";
import ElectricalComponents from "../assets/electrical-components.jpg";
import EngineDriveLine from "../assets/engine-driveline.jpg";
import ExhaustEmissions from "../assets/exhaust-emission.jpg";
import Exterior from "../assets/exterior.jpg";
import FuelSystems from "../assets/fuel-system.jpg";
import Interior from "../assets/interior.jpg";
import Maintenance from "../assets/maintenance.jpg";
import OilSystem from "../assets/oil-system.jpg";
import PerformanceHandling from "../assets/performance-handling.jpg";
import Suspension from "../assets/suspension.jpg";
import TransmissionGearbox from "../assets/transmission.jpg";

export const PartsCategory = () => {
  const cards = [
    {
      id: 1,
      title: `Body`,
      alt: `Body Parts`,
      src: Body,
    },
    {
      id: 2,
      title: `Brake System`,
      alt: `Brake System Parts`,
      src: BrakeSystem,
    },
    {
      id: 3,
      title: `Cables`,
      alt: `Cables`,
      src: Cables,
    },
    {
      id: 4,
      title: `Car Care, Tools and Shop Supplies`,
      alt: `Car Care, Tools and Shop Supplies`,
      src: CarCare,
    },
    {
      id: 5,
      title: `Competition Parts`,
      alt: `Competition Parts`,
      src: CompetitionParts,
    },
    {
      id: 6,
      title: `Convetible Tops, Hard Tops and Tonneau Covers`,
      alt: `Convetible Tops, Hard Tops and Tonneau Covers`,
      src: ConvertibleParts,
    },
    {
      id: 7,
      title: `Cooling System`,
      alt: `Cooling System Parts`,
      src: CoolingSystem,
    },
    {
      id: 8,
      title: `Electrical Components`,
      alt: `Electrical Components`,
      src: ElectricalComponents,
    },
    {
      id: 9,
      title: `Engine and Driveline`,
      alt: `Engine and Driveline Parts`,
      src: EngineDriveLine,
    },
    {
      id: 10,
      title: `Exhaust and Emissions`,
      alt: `Exhaust and Emissions`,
      src: ExhaustEmissions,
    },
    {
      id: 11,
      title: `Exterior`,
      alt: `Exterior Parts`,
      src: Exterior,
    },
    {
      id: 12,
      title: `Fuel Systems`,
      alt: `Fuel Systems`,
      src: FuelSystems,
    },
    {
      id: 13,
      title: `Interior`,
      alt: `Interior Parts`,
      src: Interior,
    },
    {
      id: 14,
      title: `Maintenance`,
      alt: `Maintenance Parts`,
      src: Maintenance,
    },
    {
      id: 15,
      title: `Oil System`,
      alt: `Oil System Parts`,
      src: OilSystem,
    },
    {
      id: 16,
      title: `Performance & Handling`,
      alt: `Performance & Handling`,
      src: PerformanceHandling,
    },
    {
      id: 17,
      title: `Suspension`,
      alt: `Suspension Parts`,
      src: Suspension,
    },
    {
      id: 18,
      title: `Transmission, Gearbox and Clutch`,
      alt: `Transmission, Gearbox and Clutch Parts`,
      src: TransmissionGearbox,
    },
  ];
  return (
    <>
      <h1 className="categoryHeader">Select a Category</h1>
      <div className="partsCategory">
        {cards.map((card) => (
          <div
            key={card.id}
            className="cardCategory"
            title={`Shop OEM ${card.alt}`}
          >
            <div className="cardInfo">
              <h5>{card.title}</h5>
              <p>See more</p>
            </div>
            <div>
              <img src={card.src} alt={card.alt} className="cardImg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
