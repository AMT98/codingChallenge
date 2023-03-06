import React from "react";
import logo from "../assets/logo.png";
import locationIcon from "../assets/Icons/header-location copy.png";
import phoneIcon from "../assets/Icons/header-phone copy.png";
import mailIcon from "../assets/Icons/header-email.png";
import downArrow from "../assets/Icons/arrow-down.png";
import rightArrow from "../assets/Icons/arrow-entervin-hover.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <>
      <div className="navHeader">
        <p>
          Browse our complete catalog of OEM and licensed British heritage parts
          for your classic British automobile. | Kalamazoo, MI
        </p>
      </div>
      <div className="companyContact">
        <div>
          <div className="navHeaderInfo">
            <img src={logo} alt="websiteLogo" className="logo" />
            <h1 className="navUrl">EnglishParts.com</h1>
            <div className="mediumScreen">
              <RxHamburgerMenu />
            </div>
            <div className="navDropDownBtns">
              <p>
                Parts
                <img
                  src={downArrow}
                  alt="downArrowIcon"
                  className="downArrowIcon"
                />
              </p>
              <p>
                About Us
                <img
                  src={rightArrow}
                  alt="rightArrowIcon"
                  className="rightArrowIcon"
                />
              </p>
            </div>
          </div>
          <div className="companyLocationContainer">
            <div className="companyLocation">
              <img
                src={locationIcon}
                alt="locationIcon"
                className="companyContactIcons locationIcon"
              />
              <p>5850 Stadium Dr, Kalamazoo, MI 49009</p>
            </div>
            <div className="companyLocation">
              <img
                src={phoneIcon}
                alt="phoneIcon"
                className="companyContactIcons"
              />
              <p>866.467.1776</p>
            </div>
            <div className="companyLocation">
              <img
                src={mailIcon}
                alt="mailIcon"
                className="companyContactIcons"
              />
              <p>sales@englishparts.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
