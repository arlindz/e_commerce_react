import React from "react";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import LogInForm from "./LogInForm.js";
import data from "./Database.js";

export default function App()
{
    const [showLogInForm, setShowLogInForm] = React.useState(true);
    const [users, setUsers] = React.useState(data[0])
    const [information, setInformation] = React.useState("Shenoni te dhenat e llogarise tuaj!");
    const [inputs, setInputs] = React.useState({username: "", email: "", password: ""});
    const [email, setEmail] = React.useState("");
    const [balance, setBalance] = React.useState(500);

    function handleChange(event)
    {
      setInputs(prevInputs =>{
        return {...prevInputs, [event.target.name]: event.target.value}
      });
    }
    function onRegister()
    {
      if(inputs.email in users)
      {
        setInformation("E-mail qe keni shkruar eshte ne perdorim! Provoni nje tjeter.");
        return;
      }
      if(inputs.username in users)
      {
        setInformation("Username qe keni shenuar ekziston! Provoni nje tjeter.");
        return;
      }
      if(inputs.password.length < 6 || inputs.password.length > 14)
      {
         setInformation("Fjalekalimi duhet te kete mes 6 dhe 14 shkronja.");
         return;
      }
      if(inputs.username.length < 6 || inputs.username.length > 14)
      {
         setInformation("Username duhet te kete mes 6 dhe 14 shkronja.");
         return;
      }
      users[inputs.email] = {username: inputs.username, password: inputs.password, balance: balance, reservations: {}};
      data[0][inputs.email] = {username: inputs.username, password: inputs.password, balance: balance, reservations: {}};
      data[0][inputs.username] = "";
      users[inputs.username] = ""; 
      setBalance(prev=>{return prev+100});
      setUsers(prevUsers=>{
         return prevUsers;
      })
      setInformation("Keni regjistruar llogarine me sukses!");
   }

    function onLogIn()
    {
       if(!(inputs.email in users))
       {
          setInformation("Email qe keni shenuar nuk ekziston.");
          return;
       }
       if(inputs.username !== users[inputs.email].username)
       {
          setInformation("Emri qe keni shenuar nuk perputhet me email.");
          return;
       }

       if(users[inputs.email].password === inputs.password)
       {
          setInformation("Jeni kyqur me sukses!");
          setEmail(inputs.email);
          setShowLogInForm(false);
          return;
       }
       setInformation("Fjalekalimi qe keni shenuar nuk eshte i sakte!");
    }
    function onLogOut()
    {
        setInputs({username: "", email: "", password: ""});
        setInformation("Shenoni te dhenat e llogarise tuaj!");
        setShowLogInForm(true);
    }
     return(
         <div>
             {showLogInForm && <LogInForm onLogIn={onLogIn} onRegister={onRegister} handleChange={handleChange} inputs={inputs} information={information}/>}
             {!(showLogInForm) && <Navbar />}
             {!(showLogInForm) && <Main onLogOut={onLogOut} email={email}/>}
         </div>
     )
}

