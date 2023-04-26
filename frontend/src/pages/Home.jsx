import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import MasonryImageGallery from "../components/Images-gallery/MasonryImageGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {


  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-item-center">
                <Subtitle subtitle={"Know Before You Go"} />
                <img src={worldImg} alt="worldImg" />
              </div>
              <h1>
                {" "}
                Traveling opens the door to creating
                <span className="highlight"> memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                fugit laborum consequuntur molestias architecto. Eius optio eum
                ad soluta quaerat sapiente, consectetur, dolore velit impedit,
              </p>
            </div>
          </Col>

          <Col xs="12" sm="12" md="2" lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="heroImg" />
            </div>
          </Col>
          <Col xs="12" sm="12" md="2" lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col xs="12" sm="12" md="2" lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="heroImg02" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>

      {/* Hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mt-5">
              <Subtitle subtitle="Explore" />
              <h5 className="featured__tour-title">Our featured tour</h5>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle="Experience" />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Exercitationem hic fugiat{" "}
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Succesfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients </h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>year experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle="Gallery" />
              <h2 className="gallery__title">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonia section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle="Fans Love" />
              <h2 className="testimonial__title">What fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter section start */}
      <Newsletter />
    </>
  );
};

export default Home;
