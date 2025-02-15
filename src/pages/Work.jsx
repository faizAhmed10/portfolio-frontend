import React, { useState, useEffect, useContext } from "react";
import Carousel from "../components/Carousel";
import AuthContext from "../utils/AuthContext";
import "../css/pages/work.css";
import loader from '../images/loader.gif'
const Work = () => {
  const [site, setSite] = useState([]);
  const [loading, setLoading] = useState(true)
  let {apiUrl} = useContext(AuthContext)
  const getWorks = async () => {
    try {
      console.log(apiUrl)
      let response = await fetch(`${apiUrl}api/website/`);
      let data = await response.json();
      console.log(data);
      setSite(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div>
      <div id="work" className="page-header">
        <div className="line"></div>
        <h1>Websites That I've built</h1>
        <div className="line"></div>
      </div>
      <div>
        {loading && <img className="loader" src={loader} alt=""/>}
        {!loading ? <Carousel website={site} /> : null}
      </div>
    </div>
  );
};

export default Work;
