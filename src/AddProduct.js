import React from "react";
import data from "./Database.js"

export default function AddProduct(props)
{
  const [showDescription, setShowDescription] = React.useState(false);
  const [inputs, setInputs] = React.useState({name: "", price: "", description: "", link: "", type: "", mass: "", priceType: "", priority: ""});
  const stylesDescription = {
    backgroundColor: props.mouseOverDesc ? "#003568" : "#00203fff",
    marginTop: 10,
    width: 200,
    height: 60,
    color: "#ffffff",
  }
  const stylesReservation = {
    backgroundColor: props.mouseOverReserve ? "#003568" : "#00203fff",
    marginTop: 30,
    width: 200,
    height: 60,
    color: "#ffffff"
  }
  const h4BuyInfoStyles = { marginTop: 10 }
  const imageStyles = {
    marginRight: 100,
    marginBottom: 25
  }
    function showDesc()
    {
      setShowDescription(prev=>{return !prev});
    }
    function handleChange(event)
    {
      setInputs(prevInputs =>{
        return {...prevInputs, [event.target.name]: event.target.value}
      });
    }
   return(
  <div>
    <div style={{height: 400, marginTop: 0, marginLeft: 10 }}className="add-product">
         <input id="name"className="forms" onChange={handleChange} type="text" name="name" value={inputs.name} placeholder="Emri"/>
         <input id="price"className="forms" onChange={handleChange} type="number" name="price" value={inputs.price} placeholder="Qmimi"/>
         <input id="priority"className="forms" onChange={handleChange} type="number" name="priority" value={inputs.priority} placeholder="Prioriteti"/>
         <input id="description"className="forms" onChange={handleChange} type="text" name="description" value={inputs.description} placeholder="Pershkrimi"/>
         <input id="link"className="forms" onChange={handleChange} type="text" name="link" value={inputs.link} placeholder="Linku i imazhit"/>
         <select name="priceType" onChange={handleChange} style={{marginLeft: 30}} id="priceType">
            <option>Produkti shitet me kg</option>
            <option>Produkti shitet me sasi</option>
          </select>
         <select name="type" onChange={handleChange}style={{marginLeft: 30}} id="type">
            <option>Perime</option>
            <option>Fruta</option>
            <option>Elektronike</option>
            <option>Mobilje</option>
            <option>Aksesore</option>
          </select>
         <input id="mass"className="forms" onChange={handleChange} type="number" name="mass" value={inputs.mass} placeholder={inputs.priceType === "Produkti shitet me sasi"?"Sasia":"Masa"}/>
         <button className="buttons"type="button" onClick={props.handleClick} value="shto">Shto produktin</button>
         {inputs.mass <= 0?<h4 style={{marginLeft: 10}}>{inputs.priceType === "Produkti shitet me sasi"?"Sasia":"Masa"} duhet te kete nje vlere valide.</h4>:inputs.price<0||inputs.price == ""?<h4 style={{marginLeft: 10}}>Qmimi duhet te kete nje vlere valide.</h4>:<h4></h4>}
    </div>
    <div>
      <h1>Postimi juaj do dukej keshtu:</h1>
      <div className="background-animation2">
      <div style={{ width: 450 }} className="product-text-layout">
        <h1 className="header-product-text">{inputs.name}</h1>
        <button
          type="button"
          style={stylesDescription}
          className={props.mouseOverDesc ? "btnn glow" : "btnn"}
          onClick={showDesc}
          onMouseOver={props.mouseIsOverDesc}
          onMouseLeave={props.mouseIsOverDesc}>
          {props.isClicked ? props.mouseOverDesc ? "Fsheh pershkrimin?" : "Fsheh pershkrimin" : props.mouseOverDesc ? "Shfaq pershkrimin?" : "Shfaq pershkrimin"}
        </button>
        {showDescription && <p className="product-description">{inputs.description}</p>}
        {!showDescription && <p className="product-description">{inputs.description.slice(0, Math.floor(inputs.description.length/2))}...</p>}
        <p className="product-price">Qmimi: {inputs.priceType === "Produkti shitet me sasi"?inputs.price + "$":inputs.price + "$/kg"}</p>
        <div style={{ display: "flex" }}>
          <h4 className="btn-shine">{inputs.mass == ""?"Kane mbetur edhe ___" + (inputs.priceType === "Produkti shitet me sasi"?" produkte":"kg"):(inputs.mass == 1?"Ka":"Kane") + " mbetur edhe " +
          (inputs.priceType === "Produkti shitet me sasi"?inputs.mass == 1?"1 produkt":inputs.mass + " produkte":inputs.mass + "kg")}
          </h4>
          <div style={{ marginLeft: 20, display: "flex" }} class="main">
            <form>
              <input type="text" id={props.id + "" + props.id} onClick={props.infoRemover} class="write" placeholder></input>
              <label for="name" class="hello"><strong>Shto sasi</strong></label>
              <span class="enter"></span>
            </form>
            <button
              style={{ marginLeft: 20, width: 85, height: 30 }}
              type="button"
              className="btn">Shto</button>
          </div>
        </div>
      </div>
      <div className="product-image-container">
        <img className="product-image" src={inputs.link} alt={inputs.name} style={imageStyles} />
        <h2 className="product-image-text">{inputs.name}</h2>
        <div className="product-image-desc-holder">
          <p className="product-image-description">{inputs.description}</p>
        </div>
      </div>
        <h1 style={{marginTop: 200}}>Postuar nga ju</h1>
    </div>
    </div>
  </div>
   )
} 