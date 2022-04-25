import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SkillsMainContainer,
  SkillsContainer,
  SkillsTitle,
  SkillCard,
  FirstFace,
  SecondFace,
  SkillCardImage,
  SkillCardTitle,
  SkillFirstColumn,
  SkillFirstColumnItem,
  SkillSecondColumn,
  SkillSecondColumnItem,
  SkillThirdColumn,
  SkillThirdColumnItem,
} from "./Style.js";

const Skills = ({ skillsRef }) => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSkills([...res.data.skills]);
    });
  }, []);

  // function for handling services display as array of item,
  // each item is array of 2 items
  const handleSkillsItems = (skillsArr) => {
    let tempArrays = [];
    let temp = [...skillsArr];
    while (temp.length) {
      tempArrays.push(temp.splice(0, 3));
    }
    return tempArrays;
  };

  /// render Skills section
  const renderSkillsList = (
    <SkillsContainer>
      {handleSkillsItems(skills).map((colSkills, index) => {
        if (index === 0)
          return (
            <SkillFirstColumn key={index} xs={12} md={4}>
              {colSkills.map((skillItem, ind) => (
                <SkillFirstColumnItem key={ind} position={ind}>
                  <SkillCard>
                    <FirstFace>
                      <SkillCardImage src={skillItem.image} />
                      <SkillCardTitle>{skillItem.title}</SkillCardTitle>
                    </FirstFace>
                    <SecondFace>
                      <SkillCardImage src={skillItem.image} />
                    </SecondFace>
                  </SkillCard>
                </SkillFirstColumnItem>
              ))}
            </SkillFirstColumn>
          );
        else if (index === 1)
          return (
            <SkillSecondColumn key={index} xs={12} md={4}>
              {colSkills.map((skillItem, ind) => (
                <SkillSecondColumnItem key={ind}>
                  <SkillCard>
                    <FirstFace>
                      <SkillCardImage src={skillItem.image} />
                      <SkillCardTitle>{skillItem.title}</SkillCardTitle>
                    </FirstFace>
                    <SecondFace>
                      <SkillCardImage src={skillItem.image} />
                    </SecondFace>
                  </SkillCard>
                </SkillSecondColumnItem>
              ))}
            </SkillSecondColumn>
          );
        else
          return (
            <SkillThirdColumn key={index} xs={12} md={4}>
              {colSkills.map((skillItem, ind) => (
                <SkillThirdColumnItem key={ind} position={ind}>
                  <SkillCard>
                    <FirstFace>
                      <SkillCardImage src={skillItem.image} />
                      <SkillCardTitle>{skillItem.title}</SkillCardTitle>
                    </FirstFace>
                    <SecondFace>
                      <SkillCardImage src={skillItem.image} />
                    </SecondFace>
                  </SkillCard>
                </SkillThirdColumnItem>
              ))}
            </SkillThirdColumn>
          );
      })}
    </SkillsContainer>
  );

  return (
    <SkillsMainContainer ref={skillsRef} data-aos="zoom-out">
      <SkillsTitle>Skills</SkillsTitle>
      {renderSkillsList}
    </SkillsMainContainer>
  );
};

export default Skills;
