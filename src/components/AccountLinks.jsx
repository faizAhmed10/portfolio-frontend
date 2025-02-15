import React from "react";
import "../css/components/accountlinks.css";

const AccountLinks = ({ loadState }) => {
  return (
    <div>
      <div className={`${loadState ? "wrapper" : "none"}`}>
        <ul>
          <li className="github">
            <a target="_blank" rel="noreferrer" href="https://github.com/faizAhmed10">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>            
            </a>
          </li>
          <li className="twitter">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/faiz_ahmed017">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="instagram">
            <a  target="_blank" rel="noreferrer"  href="https://instagram.com/faiz_ahmed017">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="google">
            <a target="_blank" rel="noreferrer" href="mailto:faizahmed10604@gmail.com">
              <i className="fa fa-google fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="whatsapp">
            <a target="_blank" rel="noreferrer" href="https://wa.me/916362146559">
              <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountLinks;
