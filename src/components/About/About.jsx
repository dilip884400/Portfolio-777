import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import AboutMe from "../../Assets/372497207546927.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "38px",
              paddingBottom: "70px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "30px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <h4>
              Dynamic Professional with a Passion for
              Technology, Exploring internet, and Gaming.
            </h4>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "38px", paddingBottom: "70px" }}
            className="about-img"
          >
            <img src={AboutMe} alt="about" className="img-fluid" />

            
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
