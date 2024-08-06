import React, { useContext } from "react";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Testimonials from "../pages/Testimonials";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes, Route} from "react-router-dom";
import WebsiteInfo from "../pages/WebsiteInfo";
import TestimonialForm from "../pages/TestimonialForm";
import AuthContext from "../utils/AuthContext";
const AnimatedRoutes = () => {
  let { user } = useContext(AuthContext);
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/work/websiteInfo/:id" element={<WebsiteInfo />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/testimonialpost"
          element={user ? <TestimonialForm /> : <Login />}
        />
      </Routes>
    </div>
  );
};

export default AnimatedRoutes;
