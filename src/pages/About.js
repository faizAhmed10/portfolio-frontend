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
        Welcome to my portfolio website! I am a 20-year-old aspiring web developer with expertise in ReactJS and Django, always eager to learn new technologies. Currently, I am pursuing a Bachelor's Degree in Computer Applications (2023-2026) in Bangalore, Karnataka, India.
        </p>

        <p>
        I've always been fascinated by web development. It offers the perfect blend of creativity and logic, enabling me to create beautiful and functional websites and web applications.
        </p>

        <p>
        ReactJS and Django are some of the most powerful and popular technologies in the field. They can be used to develop scalable and dynamic websites and web apps. Many leading companies, such as Instagram, Pinterest, Spotify, Dropbox, and YouTube, use this tech stack. Feel free to explore my work and connect with me!
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
