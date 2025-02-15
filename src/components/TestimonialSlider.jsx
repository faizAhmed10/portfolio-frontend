import React, { useContext, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link, useNavigate } from "react-router-dom";
import "../css/components/testimonialslider.css";
import "../css/components/carousel.css";
import AuthContext from "../utils/AuthContext";
const TestimonialSlider = ({ testimonials }) => {
  let history = useNavigate();
  let token = JSON.parse(localStorage.getItem("authTokens"));
  let { logoutUser } = useContext(AuthContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < testimonials.length / 3 - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const reduceTestimonials = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    return acc;
  };

  const verticalDisplay = () => {
    return (
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginInline: "2rem"
        }}>
        <Link to="/testimonialpost" className="btn-link">
        <button
                style={{
                  width: "160px",

                }}
                className="link-btn"
              >
            Post a testimonial
            </button>
        </Link>

        <button
          className="link-btn"
          type="submit"
          onClick={token ? logoutUser : () => history("/login")}
        >
          {token ? "Logout" : "Login"}
        </button>
        </div>
        {testimonials.length>0 ? testimonials.map((testimonial, index) => (
          <div key={index} className="card" >
            <div className="card-body">
              <h5 className="card-title">{testimonial.comment}</h5>
              <h4 style={{ textAlign: "right" }} className="card-text">
                - {testimonial.name}
              </h4>
            </div>
          </div>
        )) : <p style={{
          textAlign: "center",
          marginBlock: "2rem"
        }}>No Testimonials yet</p>}
      </div>
    );
  };

  const totalSlides = Math.ceil(testimonials.length / 3);
  return (
    <div>
      {window.innerWidth <= 880 ? (
        <div>{verticalDisplay()}</div>
      ) : (
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={33}
            totalSlides={totalSlides}
            currentSlide={currentSlide}
            className="card-div"
          >
            <Slider className="slider">
              {testimonials.lenght>0 ? testimonials
                .reduce(reduceTestimonials, [])
                .map((testimonial, index) => (
                  <Slide index={index} key={index}>
                    <div  style={{ display: "flex" }}>
                      {testimonial.map((item, index) => (
                        <div
                          key={index}
                          className="card slide-cards"
                          style={{ width: "18rem" }}
                        >
                          <div className="card-body">
                            <h5 className="card-title">{item.comment}</h5>
                            <h4
                              style={{ textAlign: "right" }}
                              className="card-text"
                            >
                              - {item.name}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Slide>
                )) : <p style={{
                  fontSize: "2rem",
                }}>No Testimonials yet.</p>}
            </Slider>
            <Link to="/testimonialpost" >
              <button
                style={{
                  width: "160px",
                  margin: "0px 60px",
                }}
                className="link-btn"
              >
                Post a testimonial
              </button>
            </Link>

            <div className="slider-btn-div"
            style={{
              marginTop: "0"
            }}
            >
              <ButtonBack
                disabled={currentSlide === 0}
                onClick={handlePrevSlide}
                className={
                  currentSlide === 0 ? "slider-btn disabled" : "slider-btn"
                }
              >
                Back
              </ButtonBack>
              <button
                className="link-btn"
                onClick={token ? logoutUser : () => history("/login")}
              >
                {token ? "Logout" : "Login"}
              </button>
              <ButtonNext
                disabled={currentSlide === totalSlides - 1}
                onClick={handleNextSlide}
                className={
                  currentSlide === totalSlides - 1
                    ? "slider-btn disabled"
                    : "slider-btn"
                }
              >
                Next
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
