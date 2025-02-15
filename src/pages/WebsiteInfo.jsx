import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../css/pages/websiteinfo.css";
import loader from '../images/loader.gif'
import AuthContext from "../utils/AuthContext";
const WebsiteInfo = () => {
  const { id } = useParams();

  const [webInfo, setWebInfo] = useState([]);
  let [loading, setLoading] = useState(true)
  
  let {apiUrl} = useContext(AuthContext)
  useEffect(() => {
    const getWebsiteInfo = async () => {
      try {
        let response = await fetch(`${apiUrl}api/website/${id}`);
        let data = await response.json();
        setWebInfo(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    getWebsiteInfo();
  }, [id]);
  return (
    <div>
      {loading ? <img src={loader} alt="loading..." style={{
        display:"block",
        width: "20rem",
        marginInline: "auto"
      }}/> : 
    (<div>
      <div className="page-header">
        <div className="line"></div>
        <h1>{webInfo.title}</h1>
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src={webInfo.image}
            alt="website display"
            className="rounded-image"
          />
          <div className="overlay"></div>
        </div>
        <div className="text-container">
          <h2 className="tagline">{webInfo.built_with}</h2>
          <p className="description">{webInfo.description}</p>
        </div>
        <a className="btn-link" target="_blank" rel="noreferrer" href={webInfo.github_link}>
          <button className="link-btn">View Code</button>
        </a>
      </div>
    </div>)}
    </div>
  );
};

export default WebsiteInfo;
