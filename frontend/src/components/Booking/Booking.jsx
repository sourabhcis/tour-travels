import React from "react";
import "./booking.css";
import {
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Button,
  List,
} from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour }) => {
  const navigate = useNavigate();
  const { price, avgRating, reviews } = tour;
  const [booking_FormData, setBooking_Formdata] = useState({
    userId:'01',
    userEmail:'example@gmail.com',
    fullname:'',
    phone:'',
    bookAt:'',
    guestSize:1
  })

  const handleChange = (e) => {
    setBooking_Formdata({...booking_FormData, [e.target.name]:e.target.value})
  };

  let serviceFee = 10;
  let totalAmount = Number(price * booking_FormData.guestSize) + Number(serviceFee);

  const handle_BookingSubmit = () =>{
    //console.log(booking_FormData)
    navigate('/thank-you')
  }

  return (
    <div className="booking">
      {/* Booking top */}
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          $ {price} <span> /per person</span>{" "}
        </h3>
        <span>
          {" "}
          <i class="ri-star-fill"></i> {avgRating} ( {reviews?.length} ){" "}
        </span>
      </div>

      {/* Booking form*/}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              name="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              name="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* Booking form bottom */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"></i> 1 person{" "}
            </h5>
            <span>$ {price} </span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5> Service Charge </h5>
            <span>$ {serviceFee} </span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5> Total </h5>
            <span> $ {totalAmount} </span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handle_BookingSubmit}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
