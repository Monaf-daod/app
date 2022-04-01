import React, { Component } from "react";
import axios from "axios";
import {
  ProfileskillsSections,
  Profile1,
  Profiletitle,
  ProfiletitleSpan,
  Profilelist,
  ProfileListitem,
  ProfileListitemSpan,
  ProfileSkills,
  ProfileSkillstitle,
  ProfileSkillsTitleSpan,
  ProfileSkillsDesc,
  ProfileSkillsBar,
  ProfileSkillsBartitle,
  ProfileSkillsBarperc,
  ProfileSkillsBarparent,
  ProfileSkillsBarparentSpan,
} from "./Style.js";

class Profile extends Component {
  state = {
    profile: {},
    skilles: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        profile: res.data.profile[0],
        skilles: res.data.skilles,
      });
    });
  }

  render() {
    const { profile } = this.state;
    const { skilles } = this.state;
    const skilleslist = skilles.map((skill) => {
      return (
        <ProfileSkillsBar key={skill.id}>
          <ProfileSkillsBartitle>{skill.title}</ProfileSkillsBartitle>
          <ProfileSkillsBarperc>{skill.process}</ProfileSkillsBarperc>
          <ProfileSkillsBarparent>
            <ProfileSkillsBarparentSpan
              sp={skill.id}
            ></ProfileSkillsBarparentSpan>
          </ProfileSkillsBarparent>
        </ProfileSkillsBar>
      );
    });

    return (
      <ProfileskillsSections id="profileSection">
        <div className="container">
          <Profile1>
            <Profiletitle>
              <ProfiletitleSpan>My </ProfiletitleSpan>Profile
            </Profiletitle>
            <Profilelist>
              <ProfileListitem>
                <ProfileListitemSpan>Name : </ProfileListitemSpan>
                {profile.name}
              </ProfileListitem>
              <ProfileListitem>
                <ProfileListitemSpan>Birthday : </ProfileListitemSpan>
                {profile.birthday}
              </ProfileListitem>
              <ProfileListitem>
                <ProfileListitemSpan>Address : </ProfileListitemSpan>
                {profile.address}
              </ProfileListitem>
              <ProfileListitem>
                <ProfileListitemSpan>Phone : </ProfileListitemSpan>
                {profile.phone}
              </ProfileListitem>
              <ProfileListitem>
                <ProfileListitemSpan>Email : </ProfileListitemSpan>
                {profile.email}
              </ProfileListitem>
              <ProfileListitem>
                <ProfileListitemSpan>Website : </ProfileListitemSpan>
                <ProfileListitemSpan web>{profile.websit}</ProfileListitemSpan>
              </ProfileListitem>
            </Profilelist>
          </Profile1>

          <ProfileSkills>
            <ProfileSkillstitle>
              Some <ProfileSkillsTitleSpan>skills</ProfileSkillsTitleSpan>
            </ProfileSkillstitle>
            <ProfileSkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </ProfileSkillsDesc>
            {skilleslist}
          </ProfileSkills>
        </div>
      </ProfileskillsSections>
    );
  }
}

export default Profile;
