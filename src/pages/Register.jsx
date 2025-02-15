import React, { useContext } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import "../css/pages/login.css";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";
import loader from '../images/loader.gif'
const Register = () => {
  let { registerUser, loading } = useContext(AuthContext);

  return (
    <div>
      {loading && <img className="loader" src={loader} alt=""/>}
      <form onSubmit={registerUser}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h1>Register</h1>
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            required
            name="email"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            required
            name="password"
            id="form2"
            type="password"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Confirm Password"
            required
            name="confirmpassword"
            type="password"
          />

          <button type="submit" className="link-btn">
            Register
          </button>
          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Register;
