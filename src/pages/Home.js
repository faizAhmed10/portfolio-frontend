import React, { useEffect, useState } from "react";
import AccountLinks from "../components/AccountLinks";
import {Link} from "react-router-dom";
import "../css/pages/home.css";
import "../css/components/carousel.css";

const Home = () => {
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    setLoadState(true);
  }, []);
  return (
    <div id="home">
      <div className={`star ${loadState ? "a" : ""}`}></div>
      <div className={`star ${loadState ? "b" : ""}`}></div>
      <div className={`star ${loadState ? "c" : ""}`}></div>
      <div className={`star ${loadState ? "d" : ""}`}></div>
      <div id={`${loadState ? "home-intro" : "none"}`}>
        <h1>I'm Faiz</h1>
        <p>I'm a Web-developer proficient in ReactJS and Django.</p>
        <AccountLinks loadState={loadState} />
        <Link to="/contact" className="btn-link">
        <button
                style={{
                  width: "160px",
                  margin: "20px 0",
                }}
                className="link-btn"
              >
            Contact Now
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
