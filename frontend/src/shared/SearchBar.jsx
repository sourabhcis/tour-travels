import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Row, Form } from "reactstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const locationRef = useRef();
  const distanceRef = useRef();
  const maxGroupSizeRef = useRef();

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All field are required ! ");
    }
    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: {name:'sandeep',city:'indore'}}
    );
  };
  return (
    <Col xs="12" sm="12" md="12" lg="12">
      <div className="search__bar">
        {/* <Form className='d-flex align-items-center gap-4'>
                <div className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input ref={locationRef} type='text' placeholder='Where are you going ?' />
                    </div>
                </div>
                <div className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input ref={distanceRef} type='number' placeholder='Distance k/m' />
                    </div>
                </div>
                <div className='d-flex gap-3 form__group from__group-last'>
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input ref={maxGroupSizeRef} type='number' placeholder='0' />
                    </div>
                </div>

                <span className='search__icon' type='submit' onClick={searchHandler}>
                 <i class="ri-search-line"></i>
                </span>
            </Form> */}
        <Row>
          <Col sm="12" md="12" lg="3">
            <div className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  ref={locationRef}
                  type="text"
                  placeholder="Where are you going ?"
                />
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="3">
            <div className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i class="ri-map-pin-time-line"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  ref={distanceRef}
                  type="number"
                  placeholder="Distance k/m"
                />
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="3">
            <div className="d-flex gap-3 form__group from__group-last">
              <span>
                <i class="ri-group-line"></i>
              </span>
              <div>
                <h6>Max People</h6>
                <input ref={maxGroupSizeRef} type="number" placeholder="0" />
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="3">
            <span
              className="search__icon"
              type="submit"
              onClick={searchHandler}
            >
              <i class="ri-search-line"></i>
            </span>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SearchBar;
