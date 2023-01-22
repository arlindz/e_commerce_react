import React from "react";
import "./App.css";

export default function Button(props)
{
    const styles = 
    {
        backgroundColor: props.on? "#003568" : "#00203fff",
        color: "#ffffff"
    }
    return (
        <button type="button" onClick={props.handleClick} className={props.on?"btnn glow":"button"} style={styles} onMouseOver={props.mouseIsOver} onMouseLeave={props.mouseIsOver}>{props.title}</button>
    )
}