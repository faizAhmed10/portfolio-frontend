import React, { useContext } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../css/pages/login.css";
import AuthContext from "../utils/AuthContext";
import loader from '../images/loader.gif'
const Login = () => {
  let { loginUser, loading } = useContext(AuthContext);
  return (
    <div>
      {loading && <img className="loader" src={loader} alt=""/>}
      <form onSubmit={loginUser}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h1>Login</h1>
          <MDBInput
            wrapperClass="mb-4"
            required
            label="Email"
            name="username"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            required
            label="Password"
            name="password"
            id="form2"
            type="password"
          />
          <button type="submit" className="link-btn">
            Login
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Login;
