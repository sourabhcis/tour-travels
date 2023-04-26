import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const quick_link = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];

  const quick_link2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];

  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              </p>

              <div className="social__links d-flex align-items-center gap-5">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_link.map((item, i) => (
                <ListGroupItem key={i} className="ps-0 border-0">
                  <Link>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_link2.map((item, i) => (
                <ListGroupItem key={i} className="ps-0 border-0">
                  <Link>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>

                <p className="mb-0 ">California, US</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>

                <p className="mb-0 ">support@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  Phone:
                </h6>

                <p className="mb-0 ">+31-343-434-54</p>
            </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
