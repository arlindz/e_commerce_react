import React from "react";
import "./App.css";
import data from "./Database.js";
import image from "./images/strawberry-drawing.png";

export default function Navbar()
{
   
    return(
        <div className="nav">
           <img className="navbar-image" src={image} alt="gg"/>
             <div class="content inline-webtitle">
                <h2>Kemi</h2>
                <h2>Kemi</h2>
             </div>
        </div>
    )
}