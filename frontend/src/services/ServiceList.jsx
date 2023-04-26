import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem Ipsum dolar sit amet, consetor addipiscing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guid",
    desc: "Lorem Ipsum dolar sit amet, consetor addipiscing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem Ipsum dolar sit amet, consetor addipiscing elit.",
  },
];
const ServiceList = () => {
  return ServicesData.map((item, i) => (
    <Col lg="3" key={i}>
      <ServiceCard item={item} />
    </Col>
  ));
};

export default ServiceList;
