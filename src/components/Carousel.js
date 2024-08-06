import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../css/components/carousel.css";
const Carousel = ({ website }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < website.length / 2 - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const reduceWebsites = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 2);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    return acc;
  };

  const renderVerticalLayout = () => {
    return website.map((item, index) => (
      <div key={index} className="card">
        <img src={item.image} className="card-img-top card-img" alt="" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h5 className="card-tagline">{item.built_with}</h5>
          <p className="card-text">{item.description.substring(0, 100)}...</p>
          <Link to={`/work/websiteInfo/${item.id}`} className="btn-link">
            <button className="link-btn">Read more...</button>
          </Link>
        </div>
      </div>
    ));
  };
  const totalSlides = Math.ceil(website.length / 2);
  return (
    <div >
      {window.innerWidth <= 880 ? (
        <div className="vertical-layout">{renderVerticalLayout()}</div>
      ) : (
        <div> 
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={33}
            totalSlides={totalSlides}
            className="card-div"
            currentSlide={currentSlide}
          >
            <Slider className="slider-web">
              {website.reduce(reduceWebsites, []).map((site, index) => (
                <Slide key={index} index={index}>
                  <div style={{ display: "flex" }}>
                    {site.map((item, index) => (
                      <div key={index} className="card">
                        <img
                          src={item.image}
                          className="card-img-top card-img"
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <h5 className="card-tagline">{item.built_with}</h5>
                          <p className="card-text">
                            {item.description.substring(0, 100)}...
                          </p>
                          <Link
                            to={`/work/websiteInfo/${item.id}`}
                            className="btn-link"
                          >
                            <button className="link-btn">Read more...</button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Slide>
              ))}
            </Slider>
            <div className="slider-btn-div">
              <ButtonBack
                disabled={currentSlide === 0}
                onClick={handlePrevSlide}
                className={
                  currentSlide === 0 ? "slider-btn disabled" : "slider-btn"
                }
              >
                Back
              </ButtonBack>
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
export default Carousel;
