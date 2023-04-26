import React, { useState, useEffect } from "react";
import "../styles/tour.css";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
//import tourData from "../assets/data/tours";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import { getTour } from "../redux/action/tour";
import { useDispatch, useSelector } from "react-redux";

const Tour = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => state);
  const [tourData, setTourData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  useEffect(() => {
    dispatch(getTour());
  }, []);

  useEffect(() => {
    if (tour.type === "GET_TOUR_SUCCESS") {
      setTourData(tour.payload.data);
    }
  }, [tour]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData && tourData.length ? (
              tourData.map((tour, i) => (
                <Col sm="12" md="4" lg="3" key={i} className="mb-4">
                  {" "}
                  <TourCard tour={tour} />{" "}
                </Col>
              ))
            ) : (
              <Col md="12">
                <div className="my-5 d-flex justify-content-center align-items-center flex-column">
                  <h5>No Result</h5>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
                    style={{ width: "300px", height: "300px" }}
                    alt=""
                  />
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
      </section>

      <Newsletter />
    </>
  );
};

export default Tour;
