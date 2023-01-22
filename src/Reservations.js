import React from "react";
import "./App.css";
import data from "./Database.js"

export default function Reservations(props)
{
    const imageStyles = {
        marginRight: 100,
        marginBottom: 25                 
      }
   return(
  
        <div styles={{marginLeft: 100}}className="product-image-container">
             <img className="product-image" src={props.link}
               style={imageStyles}/>
             <h2 className="product-image-text">{props.name}</h2>
              <div className="product-image-desc-holder"> 
                <h3 className="product-image-description">Keni te rezervuar 
                  {props.isSingular?props.mass === 1?" "+props.mass + " produkt te ketij lloji"
                  :" "+props.mass + " produkte te ketij lloji":props.mass+ "kg te ketij produkti"}
                </h3>
              </div>
           </div>

   )
}