import React from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import headerImg from "../assets/default.jpg";
import Cart from "../assets/Icons/cart-full.png";
const Header = () => {
  return (
    <>
      <form className="searchForm">
        <label>
          <button className="searchIcon">
            <MdSearch size={20} />
          </button>
          <input
            type="text"
            title="Click here to search"
            placeholder="Search by Keywords, Part Numbers or VIN"
            className="searchInput"
          />
          <button className="goBtn" title="Search Button">
            GO
          </button>
        </label>
        <div>
          <button className="selectVehicle" title="My Garage">
            Select Your Vehicle
          </button>
          <button className="selectCarDropDown" title="Select Vehicle Button">
            <AiOutlineDown size={16} />
          </button>
        </div>
        <div className="cartIcon" title="Cart">
          <img src={Cart} alt="cartIcon" className="cart" />
          <p>0</p>
        </div>
      </form>
      <div>
        <a href="#.." className="headerTitle">
          Welcome to EnglishParts.com, your home for Jaguar, MG, Triumph and
          Austin Healey Parts!
        </a>
        <div className="headerBody">
          <div>
            <img src={headerImg} alt="HeaderImg" id="headerImg" />
          </div>
          <div className="headerBodyContent">
            <h1>Premium Austin Healey, Jaguar, MG, and Triumph Parts</h1>
            <p>
              Unmistakable style. That's what you love about your Austin Healey,
              Jaguar, MG, or Triumph. At EnglishParts.com, we carry a large
              selection of premium repair, maintenance and restoration parts for
              classic British cars. You know you can count on us because we're
              located in Kalamazoo, MI. Finding the right premium repair parts
              has always been our first priority. Our state of the art premium
              parts diagrams ensure that you're getting the perfect part the
              first time. Our experienced team knows these cars inside and out,
              and is here to help. Excellence. The first time, every time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
