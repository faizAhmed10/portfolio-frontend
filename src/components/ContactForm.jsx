import React, { useState, useContext } from "react";
import "../css/components/contactform.css";
import { MDBContainer, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import AuthContext from "../utils/AuthContext";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let {apiUrl} = useContext(AuthContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = formData.name;
    let email = formData.email;
    let message = formData.message;
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    let response = await fetch(`${apiUrl}api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    let data = await response.json();
    alert("Form submitted!");

    console.log(data);
  };

  return (
    <div>
      <MDBContainer className="p-3 my-2 d-flex flex-column w-50">
        <form onSubmit={handleSubmit}>
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <MDBTextArea
            placeholder="Message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="link-btn">
            Send
          </button>
        </form>
      </MDBContainer>
    </div>
  );
}

export default ContactForm;
