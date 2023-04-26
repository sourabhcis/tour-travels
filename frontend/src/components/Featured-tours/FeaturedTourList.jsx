import React from "react";
import TourCard from "../../shared/TourCard";
//import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import { getTour } from "../../redux/action/tour";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const FeaturedTourList = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => state);
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    dispatch(getTour());
  }, []);

  useEffect(() => {
    if (tour.type === "GET_TOUR_SUCCESS") {
      setTourData(tour.payload.data);
    }
  }, [tour]);

  return tourData && tourData.length ? (
    tourData.map((tour, i) => (
      <Col lg="3" key={i}>
        <TourCard tour={tour} />
      </Col>
    ))
  ) : (
    <Col md="12">
      <div className="my-5 d-flex justify-content-center align-items-center flex-column">
        <h5>No Result</h5>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
          style={{ width: "200px", height: "200px" }}
          alt=""
        />
      </div>
    </Col>
  );
};

export default FeaturedTourList;
