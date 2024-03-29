import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import phone from "../../Images/phone.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png";

const Footer = () => {
  return (
    <div
      className="footer-background footer align-items-center"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justift-content-center align-items-center">
          <Col sm="6" className="d-flex align-items-center">
            <div className="footer-shroot">الشروط و الاحكام</div>
            <div className="footer-shroot mx-2">سياسية الخصوصيه</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col sm="6" className="d-flex justify-content-end align-items-center">
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className="footer-phone">779460107</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
