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
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/auth";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});

  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState({});

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handle_LoginSubmit = (e) => {
    e.preventDefault();
    //console.log(loginData);
    setLoading(false);
    dispatch(login(loginData));
    //navigate("/home");
  };
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    console.log(auth)
    if (auth && auth.type && auth.user.data) {
      setAuthUser(auth)
      if (auth.type === "USER_LOGIN_SUCCESS") {
        localStorage.setItem('user',JSON.stringify(auth.user.data))
        localStorage.setItem('token', auth.token)
        toast(auth.message);
        setLoading(false);
        if (auth.success) {
          setTimeout(()=>navigate("/home"), 2000)
        }
      } else {
        toast(auth.data.message);
        setLoading(false);
      }
    }else{
      toast(auth.data && auth.data.message);
      setLoading(false);
    }
    
  }, [auth]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt={loginImg} />
              </div>

              <div className="login__form">
                <div className="login__user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handle_LoginSubmit}>
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
                      Login
                    </Button>
                  ) : (
                    <Button
                      className="btn secondary__btn auth_btn"
                      type="submit"
                    >
                      <Spinner color="success" />
                    </Button>
                  )}
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>{" "}
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

export default Login;
