import React from "react";
import "../css/pages/about.css";

const About = () => {
  return (
    <div>
      <div className="page-header">
        <div className="line"></div>
        <h1>About Me</h1>
        <div className="line"></div>
      </div>
      <div id="about">
        <div className="intro-txt">
        <p>
        Welcome to my portfolio! I’m a 20-year-old web developer passionate about building functional and visually appealing web applications. Currently pursuing a BCA (2023-2026) in Bangalore, I have hands-on experience with ReactJS and Django and am always eager to learn and explore new technologies.
        </p>

        <p>
        I find web development to be the perfect balance of creativity and logic, allowing me to craft digital solutions to real-world problems. My tech stack—ReactJS and Django—is widely used by leading companies like Instagram, Pinterest, and Spotify for developing scalable, high-performance applications.
        </p>

        <p>
        Feel free to explore my work, and let's connect! 🚀
        </p>
        </div>

        <h2 style={{textAlign: "center", marginBlock: "10px"}}>My Skills</h2>
        <div className="skills-box">
          <div className="react skill">
            <p>REACTJS</p>
            <div className="outer">
              <div className="inner inner-react">60%</div>
            </div>
          </div>
          <div className="django skill">
            <p>DJANGO</p>
            <div className="outer">
              <div className="inner inner-django">40%</div>
            </div>
          </div>
          <div className="javascript skill">
            <p>JavaScript</p>
            <div className="outer">
              <div className="inner inner-javascript">60%</div>
            </div>
          </div>
          <div className="python skill" >
            <p>PYTHON</p>
            <div className="outer">
              <div className="inner inner-python">60%</div>
            </div>
          </div>
          <div className="html skill">
            <p>HTML</p>
            <div className="outer">
              <div className="inner inner-html">80%</div>
            </div>
          </div>
          <div className="css skill">
            <p>CSS</p>
            <div className="outer">
              <div className="inner inner-css">70%</div>
            </div>
          </div>
          <div className="c-p skill">
            <p>C</p>
            <div className="outer">
              <div className="inner inner-c">50%</div>
            </div>
          </div>
          <div className="cpp skill">
            <p>C++</p>
            <div className="outer">
              <div className="inner inner-cpp">50%</div>
            </div>
          </div>
          <div className="java skill">
            <p>JAVA</p>
            <div className="outer">
              <div className="inner inner-java">40%</div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
