import React, { Component } from "react";
import axios from "axios";
import {
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectImage,
} from "./style.js";

class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      const { location } = this.props;
      const temp = res.data.projects.filter(
        (project) => project.category === location.state
      );
      this.setState({
        projects: temp,
      });
    });
  }

  render() {
    const { projects } = this.state;
    const { history } = this.props;
    return (
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() =>
              history.push({
                state: project.id,
                pathname: `/projects/details/${project.id}`,
              })
            }
          >
            <ProjectImage src={project.mainCover} />
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    );
  }
}

export default Projects;
