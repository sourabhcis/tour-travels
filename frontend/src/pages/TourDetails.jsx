import React, { useRef, useState } from "react";
import "../styles/tour-detail.css";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
//import tourData from "../assets/data/tours";
import Booking from "../components/Booking/Booking";
import avatar from "../assets/images/avatar.jpg";
import Newsletter from "../shared/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {createReview, getTourDetail} from '../redux/action/tour'

const TourDetails = () => {
  const { id } = useParams();
  const {tourDetail, auth, review} = useSelector((state)=> state)
  const dispatch = useDispatch();
  const reviewMsgRef = useRef();
  const [tourRating, setTourRating] = useState(0);
  const [tourData, setTourData] = useState({})

  //const tour = tourData.find((tour) => tour.id == id);

  useEffect(()=> {
    dispatch(getTourDetail(id))
  },[])

  useEffect(()=> {
    if(tourDetail.type === "GET_TOUR_DETAIL_SUCCESS"){
      setTourData(tourDetail.payload.data)
    }
  },[tourDetail])

  const {
    photo,
    title,
    desc,
    avgRating,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tourData;
 const {data} = auth.user;

  const submitReview = (e) => {
    e.preventDefault();
    const reviewtext = reviewMsgRef.current.value;
    const obj = {
      reviewText: reviewtext,
      username: data.username,
      rating: tourRating,
    }
    dispatch(createReview(id,obj))
  };

  useEffect(()=> {
    if(review.type === "CREATE_REVIEW_SUCCESS"){
      dispatch(getTourDetail(id))
      reviewMsgRef.current.value = ""
    }
  },[review])

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="tour_img" />

                <div className="tour__info">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2> {title} </h2>
                    <div className="tour__top">
                      <h3>
                        $ {price} <span> /per person</span>{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-5 mt-1">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>{" "}
                      {avgRating} ( {reviews?.length} ){" "}
                    </span>

                    <span>
                      <i class="ri-map-pin-range-fill"></i>Somewhere
                    </span>
                  </div>

                  <div className="tour__extra-details d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-1">
                      <i class="ri-map-pin-2-fill"></i> {city}
                    </span>

                    <span className="d-flex align-items-center gap-1">
                      <i class="ri-money-dollar-circle-line"></i> {price} / per
                      person
                    </span>

                    <span className="d-flex align-items-center gap-1">
                      <i class="ri-map-pin-time-fill"></i> {distance} k/m
                    </span>

                    <span className="d-flex align-items-center gap-1">
                      <i class="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Decription</h5>
                  <p> {desc} </p>
                </div>

                {/* Tour review section */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews) </h4>

                  <Form onSubmit={submitReview}>
                    <div className="rating__group d-flex align-items-center gap-3">
                      <span onClick={() => setTourRating(1)}>
                        1 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i class="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                      />
                      <button className="btn text-white primary__btn">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews && reviews.length ? reviews.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5> {review.username} </h5>
                              <p> {new Date(review.createdAt).toDateString()} </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating} <i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6> {review.reviewText} </h6>
                        </div>
                      </div>
                    )): <p className="text-center">No Reviews</p>}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tourData} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
