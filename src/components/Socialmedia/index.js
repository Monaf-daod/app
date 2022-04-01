import React ,{Component} from 'react'
import axios from 'axios'
import {SocialMedia, Socialmediasocial, Socialmediasocialicon, SocialmediasocialP, SocialmediasocialpSpan1, SocialmediasocialpSpan2 } from  './Style.js'

class  Socialmedia extends Component {

    state= {
        social :[]
    }

    componentDidMount () {

        axios.get('js/data.json').then ( res => {
            this.setState({
                social :res.data.social
            })
        })
    }

    
    render() {

        const {social} = this.state;
        const socialList = social.map( item => {
            return (
                <Socialmediasocial info={item.id} key={item.id}>
                    <Socialmediasocialicon className={item.icon}></Socialmediasocialicon>
                    <SocialmediasocialP>
                        <SocialmediasocialpSpan1>{item.title}</SocialmediasocialpSpan1>
                        <SocialmediasocialpSpan2>{item.body}</SocialmediasocialpSpan2>
                    </SocialmediasocialP>
                </Socialmediasocial>
            )
        })
        return (
        
            <SocialMedia>
                    {socialList}
            </SocialMedia>
                )
    }
}

export default Socialmedia;