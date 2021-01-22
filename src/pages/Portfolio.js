import React from "react";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../projects.js";

function Portfolio() {

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
      {projectsData.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              blurb={project.blurb}
              appText={project.appText}
              appLink={project.appLink}
              gitText={project.gitText}
              gitLink={project.gitLink}
            />
          ))}
      </Container>
    </div>
  );
}

export default Portfolio;