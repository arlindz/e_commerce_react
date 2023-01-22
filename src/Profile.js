import React from "react";
import Reservations from "./Reservations.js";
import data from "./Database";
import UserReservations from "./UserReservations.js";

export default function Profile(props)
{
    const [isClicked, setIsClicked] = React.useState(false);
    const buttonStyles = 
    {
       marginLeft: 40,
       marginTop: 18,
       marginBottom: 20,
       backgroundColor: "#00203fff",
       color: "white",
       fontSize: 18
    }
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
   let filteredData = [];

    for(let prop in props.user.reservations)
    {
      filteredData.push(<Reservations mass={props.user.reservations[prop].mass} name={props.user.reservations[prop].productName} 
      link={props.user.reservations[prop].productLink} isSingular={props.user.reservations[prop].isSingular}/>);
    }
    return(
    <div>
        <div className="other-reservations">
            <div style={{display: "flex"}}>
              <div style={{display:"flex"}}> 
                <h2  style={{marginLeft: 30, marginTop: 33}}>Username: @{props.user.username}</h2>
                <h2  style={{marginLeft: 30, marginTop: 33}}>Balance: {props.user.balance}$</h2>
              </div>
              <button 
                id={props.user.username}
                style={buttonStyles}
                type="button" 
                className="btnn"
                onMouseOver={()=>onMouseOver(props.user.username)}
                onMouseLeave={()=>onMouseLeave(props.user.username)}
                onClick={switchIsClicked}
                value="Rezervo" 
                >{isClicked?"Fsheh":"Shfaq"}</button>
            </div>
            {isClicked && <div style={{display: "flex", flexWrap: "wrap", marginLeft: 120}}>{filteredData}</div>}
        </div>
        <div>
            <UserReservations username = {props.user.username}/>
        </div>
    </div>
    )
}