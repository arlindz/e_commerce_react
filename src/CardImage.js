import React from "react";

export default function CardImage(props)
{
     return(
        <div className="card-container">
           <img src={props.link} className="card-image"/>
             <h2 className="card-content">Një dardhë e mesme 178g ofron 101 kalori, 0.3g yndyre, 1.8mg natrium</h2>
        </div>
     )
}