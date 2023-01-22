import React from "react";
import "./App.css";


export default function Product(props) {
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

  return (
    <div className="background-animation2">
      <div style={{ width: 450 }} className="product-text-layout">
        <h1 className="header-product-text">{props.name}</h1>
        <button
          type="button"
          style={stylesDescription}
          className={props.mouseOverDesc ? "btnn glow" : "btnn"}
          onClick={props.showDescription}
          onMouseOver={props.mouseIsOverDesc}
          onMouseLeave={props.mouseIsOverDesc}>
          {props.isClicked ? props.mouseOverDesc ? "Fsheh pershkrimin?" : "Fsheh pershkrimin" : props.mouseOverDesc ? "Shfaq pershkrimin?" : "Shfaq pershkrimin"}
        </button>
        {props.isClicked && <p className="product-description">{props.desc}</p>}
        {!props.isClicked && <p className="product-description">...</p>}
        <p className="product-price">Qmimi: {props.price}${props.priceTypeSingular?"":"/kg"}</p>
        <div style={{ display: "flex" }}>
          <h4 className="btn-shine">{props.availability === 1?"Ka":"Kane"} mbetur edhe {props.priceTypeSingular?props.availability === 1?"nje produkt":props.availability + " produkte":props.availability + "kg"}</h4>
          {props.user == props.poster && <div style={{ marginLeft: 20, display: "flex" }} class="main">
            <form>
              <input type="text" id={props.id + "" + props.id} onClick={props.infoRemover} class="write" placeholder></input>
              <label for="name" class="hello"><strong>Shto sasi</strong></label>
              <span class="enter"></span>
            </form>
            <button
              style={{ marginLeft: 20, width: 85, height: 30 }}
              type="button"
              onClick={props.addQuantity}
              className="btn">Shto</button>
          </div>}
        </div>
      </div>
      <div className="product-image-container">
        <img className="product-image" src={props.link} alt={props.name} style={imageStyles} />
        <h2 className="product-image-text">{props.name}</h2>
        <div className="product-image-desc-holder">
          <p className="product-image-description">{props.desc}</p>
        </div>
      </div>
      {props.user !== props.poster?<form style={{ paddingTop: 5 }}>
        <label className="product-form">
          <h2 style={{ height: 40 }}>Sheno {props.priceTypeSingular?"sasine":"sa kg"} do qe te rezervosh</h2>
          <div class="main">
            <form>
              <input type="text" id={props.id} onClick={props.infoRemover} class="write" placeholder></input>
              <label for="name" class="hello"><strong>Sasia</strong></label>
              <span class="enter"></span>
            </form>
          </div>
        </label>
        <button
          type="button"
          className={props.mouseOverReserve ? "btnn glow" : "btnn"}
          onClick={props.reservation}
          onMouseOver={props.mouseIsOverReserve}
          onMouseLeave={props.mouseIsOverReserve}
          value="Rezervo"
          style={stylesReservation}
        >{props.mouseOverReserve ? "Rezervo?" : "Rezervo"}</button>
        {props.showIfCanBuy && <h4
          style={h4BuyInfoStyles}
          className="btn-shine">
          {props.hasEnough ? props.canBuy ?
            "Rezervimi eshte kryer me sukses!" :
            "Nuk keni mjaftueshem para..." :
            "Nuk ka sasi te mjaftueshme per kerkesen tuaj."}
        </h4>}
        <h2>Postuar nga @{props.poster}</h2>
      </form>:<h1 style={{marginTop:200}}>Postuar nga ju</h1>}
    </div>
  )
}