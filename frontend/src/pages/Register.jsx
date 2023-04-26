import React, { useState } from "react";
import "../styles/login.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Spinner,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { register } from "../redux/action/auth";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handle_LoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(register(userData));
  };

  useEffect(() => {
    if (auth && auth.payload && auth.payload.data) {
      if (auth.type === "USER_REGISTER_SUCCESS") {
        const { data } = auth.payload;
        toast(data.message);
        if (data.success) {
          window.location.replace("/login");
        }
      } else {
        const { data } = auth.payload;
        toast(data.message);
      }
    }
    setLoading(false);
  }, [auth]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt={registerImg} />
              </div>

              <div className="login__form">
                <div className="login__user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handle_LoginSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  {!loading ? (
                    <Button
                      className="btn secondary__btn auth_btn"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  ) : (
                    <Button className="btn secondary__btn auth_btn" disabled>
                      <Spinner color="success" />
                    </Button>
                  )}
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Register;
