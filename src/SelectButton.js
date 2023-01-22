import React from "react";

export default function SelectButton(props)
{
    function handleChange(event)
    {
        let index;
        for(let i = 0; i < props.arr.length; i++)
        if(event.target.value == props.arr[i].name) index = props.arr[i].id;
        props.handleClick(index);
    }
    const styles = 
    {
        backgroundColor: props.on? "#003568" : "#00203fff",
        color: "#ffffff",
        width: 310
    }
   let filteredData = [];
   for(let i = 0; i < props.arr.length; i++)
   {
      filteredData.push(
      <option className={props.arr.onMouseOver?"btnn glow":"btnn"}>
          {props.arr[i].name}
      </option>);
   }
   return(
      <div>
        <select onMouseOver={()=>props.mouseIsOver(props.id)}onChange={handleChange} className="btnn" style={styles}>
            {filteredData}
        </select>
      </div>
   )
}