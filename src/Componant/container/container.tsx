import {DataOfContainer} from "../../data";
import React from "react";
import './container.css'

function Container({ title, description, imageUrl }: { title: string; description: string; imageUrl: any }) {
    return (
        <div className="container">
            <img className="img" src={imageUrl} alt={title} />
            <div>
                <h2 className="Large_text">{title}</h2>
                <p className="small_text">{description}</p>
            </div>
        </div>
    );
}

export default function Over_all (){
    return(
        <div id='over_all'>
            <Container {...DataOfContainer[0]}/>
            <Container {...DataOfContainer[1]}/>
            <Container {...DataOfContainer[2]}/>
        </div>

    );
}