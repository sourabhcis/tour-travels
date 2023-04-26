import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav_link = [
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
const Header = ({ auth }) => {


  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* logo start */}
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {/* menu start */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_link.map((item, i) => (
                  <li className="nav__item" key={i}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {" "}
                      {item.display}{" "}
                    </NavLink>
                  </li>
                ))}

                <div className="nav__btns d-flex align-items-center gap-4">
                  {!auth.isAuthenticated ? (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button className="btn primary__btn">
                        <Link to="/register">Register</Link>
                      </Button>
                    </>
                  ) : (
                    <Button className="btn primary__btn" onClick={()=> {
                      localStorage.clear();
                      window.location.replace ('/login')
                    }}>Logout</Button>
                  )}
                </div>

                <span className="mobile__menu">
                  <i class="ri-menu-line"></i>
                </span>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
