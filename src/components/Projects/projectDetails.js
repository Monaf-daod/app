import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { ProjectDetailsContainer } from "./style";
import SwiperWithGallery from "./swiper";
import axios from "axios";

class ProjectDetails extends Component {
  state = {
    project: {
      id: null,
      category: "",
      title: "",
      mainCover: "",
      images: [],
    },
  };

  componentDidMount() {
    axios.get("/js/data.json").then((res) => {
      const { location } = this.props;
      const temp = res.data.projects.find(
        (project) => project.id === location.state
      );
      console.log(temp);
      this.setState({
        project: {
          id: temp.id,
          category: temp.category,
          title: temp.title,
          mainCover: temp.mainCover,
          //images: this.handleProjectImages(temp.images),
          images: [...temp.images],
        },
      });
    });
  }

  handleProjectImages = (imagesArr) => {
    let tempArrays = [];
    let temp = [...imagesArr];
    while (temp.length) {
      tempArrays.push(temp.splice(0, 3));
    }
    return tempArrays;
  };

  render() {
    const { project } = this.state;
    return (
      <ProjectDetailsContainer>
        <Row>
          <Col>
            <SwiperWithGallery imagesArr={project.images} />
          </Col>
        </Row>
      </ProjectDetailsContainer>
    );
  }
}

export default ProjectDetails;
