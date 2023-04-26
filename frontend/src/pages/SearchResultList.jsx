import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/TourCard";
import { getTourResult } from "../redux/action/tour";
import CommonSection from "../shared/CommonSection";
import Newsletter from "../shared/Newsletter";
import { useLocation } from "react-router-dom";

const SearchResultList = () => {
  const dispatch = useDispatch();
  const { tourResult } = useSelector((state) => state);
  const [tourData, setTourData] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)


  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const location = params.get("city");
    const distance = params.get("distance");
    const maxGroupSize = params.get("maxGroupSize");

    dispatch(
      getTourResult(
        `?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      )
    );
  }, []);

  useEffect(() => {
    if (tourResult.type === "GET_TOUR_RESULT_SUCCESS") {
      setTourData(tourResult.payload.data);
    }
  }, [tourResult]);

  return (
    <section>
      <CommonSection title="Tour Search Result" />
      <Container>
        <Row>
          {tourData && tourData.length ? (
            tourData.map((tour, i) => (
              <Col md="3" key={i}>
                <TourCard tour={tour} />
              </Col>
            ))
          ) : (
            <Col md='12'>
               <div className="my-5 d-flex justify-content-center align-items-center flex-column">
                <h5>No Result</h5>
                <img src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png" style={{width:'200px',height:'200px'}} alt="" />
               </div>
            </Col>
          )}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {" "}
                    {number + 1}{" "}
                  </span>
                ))}
              </div>
            </Col>

        </Row>
      </Container>
      <Newsletter />
    </section>
  );
};

export default SearchResultList;
