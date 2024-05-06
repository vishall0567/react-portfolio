import React from "react";
import img from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
export default function Mywork() {
  return (
    <>
      <section id="my-works">
        <div className="portfolio">
          <div className="proj-heading">
            <h1>Portfolio</h1>
          </div>

          <div className="portfolio-content container">

            <div className="proj-1">
              <img src={img} alt=""/>
              <div className="proj1-details">
                <h2>TO-DO List</h2>
                <p>Build Using HTML,CSS,JS</p>
                <button className="btn">
                  <a href="https://vishall0567.github.io/To-Do-List/"
                    target="blank">View source</a>
                </button>
              </div>
            </div>

            <div className="proj-2">
              <div className="proj2-details">
                <h2>Material-Landing Webpage</h2>
                <p>Build Using HTML,CSS,JS</p>
                <button className="btn">
                  <a
                    href="https://vishall0567.github.io/material-landing/"
                    target="blank"
                  >
                    View source
                  </a>
                </button>
              </div>
              <img src={img2} alt="" className="img2"/>
            </div>
            
            <div className="proj-2" id="proj-3">
              <img src={img3} alt=""/>
              <div className="proj2-details">
                <h2>Counter App</h2>
                <p>Build Using HTML,SCSS,JS</p>
                <button className="btn">
                  <a
                    href="https://vishall0567.github.io/Counter/"
                    target="blank"
                  >
                    View source
                  </a>
                </button>
              </div>
            </div>
            <div className="more-work">
              <p>More</p>
              <a
                href="https://github.com/vishall0567"
                target="blank">Github</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
