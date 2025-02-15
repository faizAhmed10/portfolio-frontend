import React, { useState, useEffect, useContext } from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import "../css/pages/testimonials.css";
import loader from '../images/loader.gif'
import AuthContext from "../utils/AuthContext";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  let [loading, setLoading] = useState(true)
  let {apiUrl} = useContext(AuthContext)
  const getTestimonials = async () => {
    try {
      let response = await fetch(`${apiUrl}api/testimonials/`);
      let data = await response.json();
      setTestimonials(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <div>
      <div className="page-header">
        <div className="line"></div>
        <h1>Testimonials</h1>
        <div className="line"></div>
      </div>
      <div className="card-div">
      {loading && <img className="loader" src={loader} alt=""/>}
        {!loading ? <TestimonialSlider testimonials={testimonials} /> : null}
      </div>
    </div>
  );
};

export default Testimonials;
