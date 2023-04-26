import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import Newsletter from "../shared/Newsletter";
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";
import tourImg01 from "../assets/images/tour-img01.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <section>
      <CommonSection title="About Travel World" />
      <Container>
        <div className="about__subtitle">
          <Subtitle subtitle="Lets Explore Us" />
        </div>
        <Row>
          <Col md="6">
            <div className="about_section mb-5">
              <h2 className="mt-4">About Travel World</h2>
              <p>
                We are a full service travel agency offering everything from
                accommodation to the best air-conditioned hotels, luxury
                holidays, guided tours and exclusive travel packages. Our agency
                is independent, personal, and reliable of course. If you have
                any questions or needs - feel free to contact us. We want to
                create memories you will cherish for a lifetime. We are a full
                service travel agency offering everything from accommodation to
                the best air-conditioned hotels, luxury holidays, guided tours
                and exclusive travel packages.
              </p>
              <p>
                We are a family and are always happy to help you and your family
                with everything, from wedding planning to pick-up and drop offs.
                Our family is a part of this experience and would love to be
                part of your special day. We hope you enjoy our brand and are
                excited about spending your special day with us in the park.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className="about__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>

        <div className="about__subtitle">
          <Subtitle subtitle="Our Facilities" />
        </div>

        <Row className="about__row">
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-car-line"></i>
              </span>
              <p>Domestic Trour's</p>
            </div>
          </Col>
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-ticket-line"></i>
              </span>
              <p>Flexible Budget</p>
            </div>
          </Col>
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-building-3-line"></i>
              </span>
              <p>Activities</p>
            </div>
          </Col>
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-shopping-bag-line"></i>
              </span>
              <p>Tour & Packages</p>
            </div>
          </Col>
        </Row>

        <Row className="about__row pb-5">
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-store-line"></i>
              </span>
              <p>Adventure Experience</p>
            </div>
          </Col>
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-car-line"></i>
              </span>
              <p>Safe Traveling</p>
            </div>
          </Col>
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-computer-line"></i>
              </span>
              <p>Technology Dependent</p>
            </div>
          </Col>
          <Col md="3">
            <div className="about__info text-center">
              <span>
                <i class="ri-store-line"></i>
              </span>
              <p>Family Trip's</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <div className="steps_section">
              <h2 className=" text-center">Our Process</h2>
              <Row className="steps__content">
                <Col md='3' className="steps__item">
                    <img
                      src={'https://cdn-icons-png.flaticon.com/512/2250/2250207.png'}
                      alt=""
                    />
                  <h5>Login / Signup</h5>
                </Col>
                <Col md='3' className="steps__item">
                    <img
                      src={'https://cdn-icons-png.flaticon.com/512/2475/2475365.png'}
                      alt=""
                    />
                  <h5>Choose Your Tour Package</h5>
                </Col>
                <Col md='3' className="steps__item">
                    <img
                      src={'https://cdn-icons-png.flaticon.com/512/4116/4116367.png'}
                      alt=""
                    />
                  <h5>Create Booking & Payment</h5>
                </Col>
                <Col md='3' className="steps__item">
                    <img
                      src={'https://cdn-icons-png.flaticon.com/512/3175/3175199.png'}
                      alt=""
                    />
                  <h5>Enjoy Your Trip !</h5>
                </Col> 
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </section>
  );
};

export default About;
