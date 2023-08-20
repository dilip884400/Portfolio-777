import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import KanbanBoard from "../../Assets/Projects/KanbanBoard.png";
import GymWebsite from "../../Assets/Projects/GymWebsite.png";
import TwitterClone from "../../Assets/Projects/TwitterClone.png";
import GoogleDocClone from "../../Assets/Projects/GoogleDocClone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleDocClone}
              isBlog={false}
              title="Google Doc Clone"
              description="Tech stack: React-js, Javascript, CSS. The web app enables users to edit and format documents with options such
              as bold, italic, and more and offers the ability to print or download the file
              as a PDF for future reference"
              ghLink="https://github.com/the-chand-babu/GoogleDoc.git"
              demoLink="https://google-doc-3sir.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GymWebsite}
              isBlog={false}
              title="Gym Website"
              description="Tech stack: HTML, MUI, CSS, JavaScript, React, Recoil, and React Router DOM. This project is a gym website that utilizes the following technologies. The website provides users with the functionality to register, log in, and
              purchase subscriptions"
              ghLink="https://github.com/the-chand-babu/Project1_Gym.git"
              demoLink="https://gym-website-13y6.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TwitterClone}
              isBlog={false}
              title="Twitter Clone"
              description="Tech stack: React-js, Javascript, CSS, HTML, Recoil-js, React- Router- Dom. The React-based Twitter clone project offers Twitter-like functionalities such
              as posting and interacting with feeds, multiple account logins, and account creation, and is optimized for both mobile and desktop users. ."
              ghLink="https://github.com/dilip884400/Twitter_clone.git"
              demoLink="https://twitter-clone-777.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KanbanBoard}
              isBlog={false}
              title="Kanban Board"
              description="Tech stack: React JS, Recoil, react-beautiful-dnd, Material-UI (MUI)
              The Kanban Board is a task management tool developed using React JS, Recoil, and Material-UI (MUI). It utilizes the power of react-beautiful-dnd
              library for smooth drag-and-drop functionality. Organize and track your tasks effortlessly with this user-friendly and visually appealing Kanban Board. "
              ghLink="https://github.com/Ankush123rai/React-Kanban_Board.git"
              demoLink="https://kanban-ikee.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
