import React , {useState,useEffect} from 'react'
import axios  from 'axios'
import {Portfoliosection, Portfoliotitle, Portfoliotitlespan, List, Listitem, Boxdiv, BoxdivImg, Overlay, OverlaySpan} from './Style.js'
const Portfolio = () =>{

    const [Images , setImages]  = useState([]);

    useEffect ( () => {
        axios.get('js/data.json').then(res => {
            setImages( res.data.portfolio)
        }
      )
    } , [] );

     const Imageslist = Images.map (item => {
            return (
                <Boxdiv key={item.id}>
                    <BoxdivImg src={item.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Boxdiv>
            )
        }
     ) 

    return (

        <Portfoliosection>
            <Portfoliotitle><Portfoliotitlespan>My</Portfoliotitlespan> Portfolio</Portfoliotitle>
            <List>
                <Listitem active>All</Listitem>
                <Listitem>HTML</Listitem>
                <Listitem>Photoshop</Listitem>
                <Listitem>Wordpress</Listitem>
                <Listitem>Mobile</Listitem>
            </List>
            
            <div className="box"> 
                {Imageslist}
            </div>      
        </Portfoliosection>

            )
}

export default Portfolio;