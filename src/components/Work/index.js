import React, { Component } from "react";
import axios from "axios";
import {
  WorkSection,
  Workicon,
  Worktitle,
  Workpart,
  Partdesc,
  Parttitle,
  Span,
  Line,
} from "./Style.js";

class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        works: res.data.works,
      });
    });
  }
  render() {
    const { works } = this.state;
    const { workRef } = this.props;
    const workslist = works.map((item) => {
      return (
        <Workpart
          first={item.id}
          key={item.id}
          // onClick={() =>
          //   navigationHandlers.history.push({
          //     state: item.category,
          //     pathname: "/projects",
          //   })
          // }
        >
          <Workicon className={item.icon_name}></Workicon>
          <Parttitle>{item.title}</Parttitle>
          <Line />
          <Partdesc>{item.body}</Partdesc>
        </Workpart>
      );
    });

    return (
      <WorkSection ref={workRef}>
        <div className="container">
          <Worktitle>
            <Span>My</Span> Work
          </Worktitle>
          {workslist}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
