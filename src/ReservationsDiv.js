import React from "react";
import UserReservations from "./UserReservations.js";
import data from "./Database";
;

export default function ReservationsDiv(props)
{
    const [isClicked, setIsClicked] = React.useState(false);
    const buttonStyles = 
    {
       marginLeft: 40,
       marginTop: 10,
       backgroundColor: "#00203fff",
       color: "white",
       fontSize: 18
    }
    let filteredData = [];
    function switchIsClicked()
    {
        setIsClicked(prevBool=>{return !prevBool});
    }
    function onMouseOver(id)
    {
      document.getElementById(id).style.backgroundColor = "#003568";
    }
    function onMouseLeave(id)
    {
      document.getElementById(id).style.backgroundColor = "#00203fff";
    }
    function a(t){alert(t);}
    for(let i = 0; i < props.productArray.length; i++)
    {
       filteredData.push(<div styles={{ marginLeft: 100}}>
             <div className="product-image-container">
                <img className="product-image" src={props.productArray[i][2]}/>
             <h2 className="product-image-text">{props.productArray[i][1]}</h2>
              <div className="product-image-desc-holder"> 
                <h3 className="product-image-description">@{props.name} ka te rezervuar {props.productArray[i][0]}kg {props.productArray[i][1].toLowerCase()}</h3>
              </div>
           </div>
       </div>);
    }
    return(
        <div className="reservations-div-container">
          <div style={{display: "flex"}}>
           <h1 style={{marginLeft: 40}}>@{props.name} ka te rezervuar:</h1>
           <button 
                id={props.name}
                style={buttonStyles}
                type="button" 
                className="btnn"
                onMouseOver={()=>onMouseOver(props.name)}
                onMouseLeave={()=>onMouseLeave(props.name)}
                onClick={switchIsClicked}
                value="Rezervo" 
                >{isClicked?"Fsheh":"Shfaq"}</button>
              </div>
           {isClicked && <div style={{display: "flex", flexWrap: "wrap", marginLeft: 105}}>{filteredData}</div>}
        </div>
    )
}