import react from "../assets/img/react.svg";
import tableau from "../assets/img/tableau.svg";
import pytorch from "../assets/img/pytorch.svg";
import golang from "../assets/img/golang.svg";
import tensorflow from "../assets/img/tensorflow.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Below are my skills that I believe would be beneficial to your
                team.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>Frontend Development</h5>
                </div>
                <div className="item">
                  <img src={tensorflow} alt="Image" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={pytorch} alt="Image" />
                  <h5>Deep Learning</h5>
                </div>
                <div className="item">
                  <img src={tableau} alt="Image" />
                  <h5>Data Visualization</h5>
                </div>
                <div className="item">
                  <img src={golang} alt="Image" />
                  <h5>Backend Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
