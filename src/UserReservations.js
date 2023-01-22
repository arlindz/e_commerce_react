import React from "react";
import data from "./Database.js"
import ReservationsDiv from "./ReservationsDiv.js";

export default function UserReservations(props)
{   
    let tempArr = [];
    let reservations = [];
    function a(y){
        alert(y);
    }
    for(let user in data[0])
    {
        if(data[0][user].username !== props.username)
        {
            for(let product in data[0][user].reservations)
            {
              if(data[0][user].reservations[product].productPoster == props.username)
               tempArr.push([data[0][user].reservations[product].mass, data[0][user].reservations[product].productName, data[0][user].reservations[product].productLink]);
            }
            if(tempArr.length != 0)
            {
                reservations.push(<ReservationsDiv name={data[0][user].username} productArray={tempArr}/>);
                tempArr = [];
            }
           
        }


    }
    
    return(
        <div className="other-reservations">
            {<h2 style={{marginLeft: 30}}>{reservations.length !==0?"Users qe kane rezervuar produktet e tua:":"Nuk ka users qe kane rezervuar ndonje produkt tuajin."}</h2>}
            {reservations}
        </div>
    )
}