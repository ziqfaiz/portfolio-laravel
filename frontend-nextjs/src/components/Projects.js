import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import svelte from "../assets/img/svelte.svg";
import golang from "../assets/img/golang.svg";
import tensorflow from "../assets/img/tensorflow.svg";
import pytorch from "../assets/img/pytorch.svg";
import laravel from "../assets/img/laravel.svg";
import js from "../assets/img/js.svg";
import python from "../assets/img/python.svg";
import github from "../assets/img/github-purple.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const web_projects = [
    {
      title: "Event Management System",
      description: "Laravel, Vue, MySQL",
      imgUrl: laravel,
    },
    {
      title: "Words Counter",
      description: "Golang, HTMX, Docker",
      imgUrl: golang,
    },
    {
      title: "Automata Converter",
      description: "JavaScript, HTML, CSS",
      imgUrl: js,
    },
    {
      title: "Premier League Scrollstory Web App",
      description: "Svelte, D3js, LayerCake",
      imgUrl: svelte,
    },
  ];

  const ml_projects = [
    {
      title: "Satellite Image Segmentation Using Transformer",
      description: "Pytorch, Transformer",
      imgUrl: pytorch,
    },
    {
      title: "Lesion Detection Using Machne Learning",
      description: "CuML, Tesorflow, Scikit Learn",
      imgUrl: tensorflow,
    },
    {
      title: "C2 Malware Detection Using Machine Learning",
      description: "DataBricks, Python, Scikit-learn",
      imgUrl: js,
    },
    {
      title: "Stock Price Correlation COefficient Prediction",
      description: "ARIMA, LSTM",
      imgUrl: python,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are my selected projects that are relevent to my
                    skillset. You can checkout my Github page for more details.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {web_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {ml_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>third </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
