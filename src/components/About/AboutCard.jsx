import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            My name is Dilip Lovevanshi, and I am 22 years old. Originally from
            Rajgarh, Madhya Pradesh, I am currently residing in Nagpur,
            Maharashtra. I hold a Bachelor's degree in Computer Application
            (BCA).
            <br />
            <br />
            I am an optimistic and self-motivated individual, looking forward to
            work in an IT industry which allows pushing my boundaries and serve
            really good work. Strong knowledge of HTML, CSS, JavaScript and
            React.
            <br />
            <br />
            In January 2023, I joined Function Up, a bootcamp focused on honing
            development skills, to embark on my front-end developer career as a
            trainee. Due to my excellent performance, I was promoted to the role
            of Teaching Assistant, where I conducted live doubt classes and
            mentored junior trainees on various ReactJS projects.
            <br />
            <br />
            After completing my BCA degree, I faced severe financial crises at
            home, which hindered my ability to pursue further studies. To
            address this situation, I decided to venture into farming.
            Transitioning from a BCA graduate to a farmer was quite challenging.
            However, my passion for problem-solving remained strong, and it
            eventually led me to explore the world of tech industries and their
            operations. I took the initiative to learn web development from
            scratch, and now, I am working as a Frontend developer at Aperra Soultions.
            <br />
            <br />
            Let's embark on a journey of innovation and growth together.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "right" }}>
            "Believe what you prays for"
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "right" }}>
            Dilip
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
