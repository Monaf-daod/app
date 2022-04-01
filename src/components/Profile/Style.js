import styled from 'styled-components'

export const ProfileskillsSections =styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const Profile1 =styled.div`
    width: 50%;
    float: left;
`
export const Profiletitle =styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfiletitleSpan =styled.span`
    font-weight: normal;
`


export const Profilelist =styled.ul`
    list-style: none
`

export const ProfileListitem =styled.li`
    margin-bottom: 8px
`


export const ProfileListitemSpan =styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    font-weight: ${props => props.web ? 'normal' : ''};
    color: ${props => props.web ? '#eb5424' : ''};

`

export const ProfileSkills =styled.div`
    width: 50%;
    float: left;
`

export const ProfileSkillstitle =styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileSkillsTitleSpan =styled.span`
    font-weight: normal;
`

export const ProfileSkillsDesc =styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`


export const ProfileSkillsBar =styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`



export const ProfileSkillsBartitle =styled.span`
    float: left;
`


export const ProfileSkillsBarperc =styled.span`
    float: right;
    margin-right: 100px
`


export const ProfileSkillsBarparent =styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ProfileSkillsBarparentSpan =styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width :${props => props.sp === 1 ? '100%' : '' };
    width :${props => props.sp === 2 ? '90%' : '' };
    width :${props => props.sp === 3 ? '80%' : '' };
    width :${props => props.sp === 4 ? '75%' : '' }

`






