import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/About1.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi there! 👋 I'm a passionate and enthusiastic Front-end
              Developer. <br /> <br /> I got into programming, and ever since
              then, it's been an exciting journey of continuous <br />
              learning and growth in the tech world. 🚀
              <br />
              <br />
              I'm pretty good with tech stuff like{" "}
              <i>
                <b className="purple">HTML, CSS, Javascript, React.js and  Next.js.</b>
              </i>
              <br />
              <br />
              I'm really into building cutting-edge stuff like :
              <br />
              <i>
                <b className="purple">Responsive Design </b>and{" "}
                <b className="purple"> CSS Frameworks</b> like{" "}
                <b className="purple">
                  Tailwind or Bootstrap, <br />
                  User Experience Design, Performance Optimization, Web
                  Accessibility, Testing, and Debugging.
                </b>
              </i>
              <br />
              <br />
              I'm super stoked about creating user-centric experiences and
              making websites accessible and efficient.
              <br />
              <br /> I strongly believe that a well-designed website can leave a
              lasting impression on users, and it's crucial to consider performance and accessibility while
              crafting digital experiences.
              <br />
              <br />
              It lets me use cool JavaScript libraries and frameworks to create
              intuitive and seamless
              <br /> user experiences. It's so much fun! 🌟
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dilip884400"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DilipLovev18944"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dilip884400/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lovevanshi.dilip/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
