import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        height: "auto",
        bottom: "0",
        overflow: "hidden",
        // zIndex: "1",
      }}
      fluid
    >
      <div className="xx">
        <div style={{ padding: "60px" }}>
          <div style={{ display: "flex" }}>
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <p className="footerMain">ABOUT</p>
              <a>Contact Us</a>
              <a>About Us</a>
              <a>ShoppingCart Stories</a>
              <a>Press</a>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <p className="footerMain">HELP</p>
              <a>Payment</a>
              <a>Shipping</a>
              <a>Cancellation and Returns</a>
              <a>FAQ</a>
              <a>Report Infringement</a>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <p className="footerMain">POLICY</p>
              <a>Return Policy</a>
              <a>Terms of Use</a>
              <a>Security</a>
              <a>Privacy</a>
              <a>Sitemap</a>
              <a>EPR Compliance</a>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <p className="footerMain borderright">SOCIAL</p>
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Youtube</a>
              <a>Google Plus</a>
            </Col>
            <Col
              className="borderleft"
              style={{
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
                width: "200px",
              }}
            >
              <p className="footerMain">Mail Us</p>
              <p className="footerdetails">
                ShoppingCart Internet Pvt Ltd Block B (Begonia), Ground Floor,
                Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Varthur Hobli, Bengaluru East Taluk, Bengaluru
                District, Karnataka, India, 560103.
              </p>
            </Col>
          </div>
          <br></br>
          <div>
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <p className="footerMain">Registered Office Address:</p>
              <p className="footerdetails">
                ShoppingCart Internet Private Limited, Vaishnavi Summit, Ground
                Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala, Bengaluru
                - 560034 India CIN : U51109KA2012PTC066107 Telephone: 1800 208
                9898
              </p>
            </Col>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "20px 60px",
          borderTop: "1px solid #666666",
          display: "flex",
        }}
      >
        <Col>
          <p>Sell on ShoppingCart</p>
        </Col>
        <Col>
          <p>Advertise</p>
        </Col>
        <Col>
          <p>Gift Cards</p>
        </Col>
        <Col>
          <p>Help Center</p>
        </Col>

        <Col style={{ alignSelf: "center" }}>
          <img
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_2dd397.svg"
            alt="sponsord by ye sab"
          />
        </Col>
      </div>
    </div>
  );
};
export default Footer;
