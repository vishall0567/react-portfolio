import React from "react";

export default function About() {
  return (
    <>
      <section className="about-me" id="about">
        <div className="container">
          <div className="about-content">
            <div className="left-content">
              <div>
                <h1 className="about-heading">About Me</h1>
              </div>
              <img
                src="https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png"
                alt=""
              />
              <p>
                I am Vishal Singh and i'm 22 year old, I have done my BBA Degree
                from Mahatma Gandhi Kashi Vidyapeeth, Varanasi. I really enjoy
                solving problems as well as making things pretty and easy to
                use. I can't stop learning new things; the more, the better.
              </p>
              <div className="work-arrow">
                <p>
                  <a href="#my-works">Check out my work</a>
                </p>
              </div>
            </div>
            <div className="skills">
              <div className="right-content">
                <div>
                  <h1 className="skills-heading">My Skills</h1>
                </div>
                <div className="skills-bar">
                  <div className="bar">
                    <div className="info">
                      <span>HTML</span>
                    </div>
                    <div className="progress-line">
                      <span className="html"></span>
                    </div>
                    <div className="bar">
                      <div className="info">
                        <span>CSS, SCSS</span>
                      </div>
                      <div className="progress-line">
                        <span className="css"></span>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>BOOTSTRAP</span>
                        </div>
                        <div className="progress-line">
                          <span className="bootstrap"></span>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>JAVASCRIPT</span>
                          </div>
                          <div className="progress-line">
                            <span className="javascript"></span>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>REACT</span>
                            </div>
                            <div className="progress-line">
                              <span className="nodejs"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-arrow-2">
                  <p>
                    <a href="#my-works">Check out my work</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
