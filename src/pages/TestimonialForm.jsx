import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import "../css/pages/testimonialform.css";
import AuthContext from "../utils/AuthContext";
const TestimonialForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  let {apiUrl} = useContext(AuthContext)
  let handleSubmit = async (e) => {
    e.preventDefault(); 
    const token = JSON.parse(localStorage.getItem("authTokens"));
    let response = await fetch(`${apiUrl}api/create-testimonial/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify({
        name: name,
        comment: comment,
      }),
    });
    let data = await response.json();
    console.log("Testimonial submitted:", token.access, data);
    setName("");
    setComment("");
  };

  return (
    <div className="container">
      <div className="page-header">
        <div className="line"></div>
        <h1>Post a Testimonial</h1>
        <div className="line"></div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTestimonial">
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Write your testimonial here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <button 
        style={{
          width: "100%"
        }}
        type="submit" className="link-btn">
          Submit Testimonial
        </button>
      </Form>
    </div>
  );
};

export default TestimonialForm;
