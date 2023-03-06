import React from "react";
import disclaimer from "../assets/disclaimer-white.png";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h4>ABOUT</h4>
          <p>Accepted Payment</p>
          <p>Contact Us</p>
          <p>Policies</p>
          <p>Refunds</p>
          <p>Returns</p>
        </div>
        <div>
          <h4>LEGAL</h4>
          <p>Policies</p>
        </div>
        <div>
          <h4>LINKS</h4>
          <p>My Information</p>
          <p>Testimonials</p>
        </div>
      </div>
      <div className="footerDisclaimer">
        <p className="footerWarning">
          <img
            src={disclaimer}
            alt="disclaimerIcon"
            className="disclaimerIcon"
          />
          While every reasonable effort is made to ensure the accuracy of this
          data, we are not responsible for any errors or omissions contained on
          these pages. Please verify any information in question with a sales
          representative.
        </p>
      </div>
      <div className="secondaryFooter">
        <p>SPWEB49</p>
        <p>&copy; 2021 EnglishParts.com</p>
      </div>
    </>
  );
};
