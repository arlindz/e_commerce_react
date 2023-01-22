import React from "react";
import "./App.css";

export default function LogInForm(props)
{
  
    return ( 
        <div className="log-in-container"> 
           <input className="forms" onChange={props.handleChange} type="text" name="email" value={props.inputs.email} placeholder="Email"/>
           <input className="forms" onChange={props.handleChange} type="text" name="username" value={props.inputs.username} placeholder="Username"/>
           <input className="forms" onChange={props.handleChange} type="text" name="password" value={props.inputs.password} placeholder="Password"/>
           <button className="buttons"type="button" onClick={props.onLogIn} value="Log in">Log in</button>
           <button className="buttons"type="button" onClick={props.onRegister} value="Register">Register</button>
           <p style={{marginLeft: 28}}>{props.information}</p>
        </div>
    )
}