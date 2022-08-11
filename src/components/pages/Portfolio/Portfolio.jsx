// import './App.css';
import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project/Project";
import CreamFinder from "../../../assets/images/CREAMFINDER.png";
import CodeQuiz from "../../../assets/images/CodeQuiz.png";
import NoteTaker from "../../../assets/images/NoteTaker.png";
import WeatherDashboard from "../../../assets/images/WeatherDashboard.png";
import Scheduler from "../../../assets/images/Scheduler.png";
import BookSearchEngine from "../../../assets/images/BookSearchEngine.png";

// create object for projects
const projectsObj = [
  {
    id: 1,
    name: "Cream Finder",
    img: CreamFinder,
    deployedUrl: "https://enthousiaste-monsieur-80020.herokuapp.com/",
    githubUrl: "https://enthousiaste-monsieur-80020.herokuapp.com/",
  },
  {
    id: 2,
    name: "Code Quiz",
    img: CodeQuiz,
    deployedUrl: "https://ozerkerr.github.io/code-quiz/",
    githubUrl: "https://github.com/ozerkerr/note-taker",
  },
  {
    id: 3,
    name: "Note Take",
    img: NoteTaker,
    deployedUrl: "https://github.com/ozerkerr/note-taker",
    githubUrl: "https://github.com/ozerkerr/note-taker",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    img: WeatherDashboard,
    deployedUrl: "https://ozerkerr.github.io/weather-dashboard/",
    githubUrl: "https://github.com/ozerkerr/weather-dashboard",
  },
  {
    id: 5,
    name: "Work Day Scheduler",
    img: Scheduler,
    deployedUrl: "https://ozerkerr.github.io/work-day-scheduler/",
    githubUrl: "https://github.com/ozerkerr/work-day-scheduler",
  },
  {
    id: 6,
    name: "Book Search Engine",
    img: BookSearchEngine,
    deployedUrl: "https://infinite-inlet-58538.herokuapp.com/",
    githubUrl: "https://github.com/ozerkerr/book-search-engine",
  },
];

// create component
function Portfolio() {
  return (
    <Container className="my-5">
      <h5 className="m-0">Portfolio</h5>
      <Container className="d-flex flex-row flex-wrap">
        {/* map through object and render each one */}
        {projectsObj.map((project) => {
          return (
            <Row className="m-3" key={project.id}>
              <Project
                projectImg={project.img}
                deployedUrl={project.githubUrl}
                githubUrl={project.githubUrl}
                name={project.name}
              />
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}

// export component
export default Portfolio;
