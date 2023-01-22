import React from "react";
import "./App.css";
import Product from "./Product.js"
import data from "./Database";
import Button from "./Button";
import Profile from "./Profile";
import AddProduct from "./AddProduct";
import SelectButton from "./SelectButton";

export default function Main(props) {
   const [fruitArray, setFruitArray] = React.useState(data[2]);
   const [userInfo, setUserInfo] = React.useState(data[0][props.email]);
   const [buttonData, setButtonData] = React.useState(data[1]);
   const [profileShown, setProfileShown] = React.useState(false);
   const [currentIndex, setCurrentIndex] = React.useState(2);
   const [addProduct, setAddProduct] = React.useState(false)

   let filteredData2 = [];
   for (let i = 0; i < buttonData.length; i++) {
      if (i == buttonData.length - 1) {
         filteredData2.push(<Button
            title={buttonData[i].name}
            on={buttonData[i].mouseOver}
            key={buttonData[i].id}
            mouseIsOver={() => handleClick(buttonData[i].id)}
            handleClick={props.onLogOut}
         />);
      } else if (i == buttonData.length - 2) {
         filteredData2.push(<Button
            title={buttonData[i].name}
            on={buttonData[i].mouseOver}
            key={buttonData[i].id}
            mouseIsOver={() => handleClick(buttonData[i].id)}
            handleClick={showProfile}
         />);
      } else if (i == buttonData.length - 3){
         filteredData2.push(<Button
            title="Shto Produktin"
            on={buttonData[i].mouseOver}
            key={buttonData[i].id}
            mouseIsOver={() => handleClick(buttonData[i].id)}
            handleClick={showAddProduct}
         />);
      }
      else
      {
         filteredData2.push(<SelectButton
            arr={buttonData[i]}
            key={i}
            id={buttonData[i][0].id}
            on={buttonData[i][0].mouseOver}
            mouseIsOver={handleClick}
            handleClick={changeMain}
            />
         );
         
      }
   }
   function addProd()
   {
      const mass = document.getElementById("mass").value, 
      name = document.getElementById("name").value,
      type = document.getElementById("type").value,
      link = document.getElementById("link").value,
      description = document.getElementById("description").value,
      priority = document.getElementById("priority").value,
      price = document.getElementById("price").value;
      let dataIndex;
      
      for(let i = 0; i < 2; i++){
      for(let j = 0; j < data[1][i].length; j++){
      if(type == data[1][i][j].name) {
         dataIndex = data[1][i][j].id;
      }
   }
}
   
      const priceTypeSingular = document.getElementById("priceType").value === "Produkti shitet me sasi";

      if(mass <= 0 || price < 0) return;
      
      const product = 
      {
         name: name,
         link: link,
         priority: Number(priority),
         poster: userInfo.username,
         priceTypeSingular: priceTypeSingular,
         price: Number(price),
         available: Number(mass),
         id: Number(data[dataIndex].length),
         description: description,
         mouseOverDesc: false,
         mouseOverReserve: false,
         canBuyInformation: false,
         consent: false,
         canBuy: false,
         hasEnough: true,
         descIsShown: false
      };
      addProductInArr(product, dataIndex, 0, data[dataIndex].length-1)
   }
   function addProductInArr(product, dataIndex, lowIndex, highIndex)
   {
      if(highIndex < lowIndex)
      {
         data[dataIndex].splice(lowIndex, 0, product);
         return;
      }
      if(highIndex === lowIndex)
      {
         if(data[dataIndex][highIndex].priority < product.priority) data[dataIndex].splice(highIndex,0,product);
         if(data[dataIndex][highIndex].priority > product.priority) data[dataIndex].splice(highIndex+1,0,product);
         return;
      }
      let midIndex = Math.floor((lowIndex+highIndex)/2);
      if(data[dataIndex][midIndex].priority < product.priority) 
      {
         addProductInArr(product, dataIndex, lowIndex, midIndex-1);
      }else if(data[dataIndex][midIndex].priority > product.priority) 
      {
         addProductInArr(product, dataIndex, midIndex+1, highIndex);
      }else{
         data[dataIndex].splice(midIndex, 0, product);
         return;
      }
   }
   function showAddProduct()
   {
     setAddProduct(true);
     setProfileShown(false);
   }
   function addQuantity(id) {
      const quantity = document.getElementById(id + "" + id).value;
      document.getElementById(id + "" + id).value = "";

      setFruitArray(prevFruitArray => {
         return prevFruitArray.map((fruit) => {
            if (fruit.id === id) {
               data[currentIndex][fruit.id].available = Number(data[currentIndex][fruit.id].available) + Number(quantity);
               return { ...fruit, available: Number(fruit.available) + Number(quantity) };
            }
            return fruit;
         })
      });

   }
   function changeMain(id){
      setFruitArray(data[id]);
      setProfileShown(false);
      setAddProduct(false);
      setCurrentIndex(id);
      alert(id);
   }
   function handleClick(id) {
      setButtonData(prevButtonData => {
         return prevButtonData.map((currentButton) => {
            return currentButton.id === id ? { ...currentButton, mouseOver: !currentButton.mouseOver } : currentButton;
         })
      });
   }

   let filteredData = fruitArray.map(fruit => (
      <Product
         name={fruit.name}
         link={fruit.link}
         price={fruit.price}
         availability={fruit.available}
         showDescription={() => descriptionShower(fruit.id)}
         desc={fruit.description}
         isClicked={fruit.descIsShown}
         mouseOverDesc={fruit.mouseOverDesc}
         mouseOverReserve={fruit.mouseOverReserve}
         reservation={() => reserve(fruit.id)}
         mouseIsOverDesc={() => mouseOverDesc(fruit.id)}
         mouseIsOverReserve={() => mouseOverRes(fruit.id)}
         showIfCanBuy={fruit.canBuyInformation}
         canBuy={fruit.canBuy}
         id={fruit.id}
         hasEnough={fruit.hasEnough}
         test={fruit.test}
         infoRemover={() => infoRemover(fruit.id)}
         addQuantity={() => addQuantity(fruit.id)} 
         poster={fruit.poster}
         user={userInfo.username}
         priceTypeSingular={fruit.priceTypeSingular}/>
   ))
   function showProfile() {
      setProfileShown(true);
      setAddProduct(false);
   }
   function infoRemover(id) {
      setFruitArray(prevFruitArray => {
         return prevFruitArray.map((fruit) => {
            return fruit.id === id ? { ...fruit, canBuyInformation: false } : fruit;
         })
      });
   }
   function reserve(id) {
      const kg = document.getElementById(id).value;
      if (kg === "" || kg == 0) {
         setFruitArray(prevFruitArray => {
            document.getElementById(id).value = "";
            return prevFruitArray.map((fruit) => {
               return fruit.id === id ? { ...fruit, showIfCanBuy: false } : fruit;
            })
         });
         return;
      }
      let cost;

      for (let i = 0; i < fruitArray.length; i++)
         if (id === fruitArray[i].id) cost = fruitArray[i].price;


      setFruitArray(prevArray => {
         return prevArray.map((element) => {

            if (id === element.id) {

               element.canBuyInformation = true;
               document.getElementById(id).value = "";
               if (element.available - kg < 0) {
                  document.getElementById(id).value = "";

                  return { ...element, hasEnough: false, canBuyInformation: true }
               } else {
                  element.hasEnough = true;
                  document.getElementById(id).value = "";
                  if (userInfo.balance - kg * cost >= 0) {

                     setUserInfo(prevUserInfo => {
                        if (prevUserInfo.reservations.hasOwnProperty(currentIndex + "" + element.id)) {
                           prevUserInfo.reservations[currentIndex + "" + element.id] = {
                              mass: Number(prevUserInfo.reservations[currentIndex + "" +element.id].mass) + Number(kg),
                              productName: element.name,
                              productLink: element.link,
                              productPoster: element.poster,
                              isSingular: element.priceTypeSingular
                           };
                        } else {
                           prevUserInfo.reservations[currentIndex + "" + element.id] = { 
                              mass: Number(kg), 
                              productName: element.name, 
                              productLink: element.link, 
                              productPoster: element.poster, 
                              isSingular: element.priceTypeSingular
                           };
                        }
                        return {
                           ...prevUserInfo,
                           balance: prevUserInfo.balance - kg * cost
                        };
                     });

                     data[0][props.email] = {
                        ...data[0][props.email],
                        balance: data[0][props.email].balance - kg * cost,
                        reservations: userInfo.reservations
                     };
                     data[currentIndex][element.id].available = data[currentIndex][element.id].available - kg;

                     return { ...element, canBuy: true, available: element.available - kg, canBuyInformation: true };
                  } else {
                     element.canBuyInformation = true;
                     element.canBuy = false;
                     return element;
                  }
               }
            } else {

               return element;
            }
         })
      })
   }


   function descriptionShower(id) {
      setFruitArray(prevFruitArray => {
         return prevFruitArray.map((fruit) => {
            return fruit.id === id ? { ...fruit, descIsShown: !fruit.descIsShown } : fruit;
         })
      });
   }
   function mouseOverDesc(id) {
      setFruitArray(prevFruitArray => {
         return prevFruitArray.map((fruit) => {
            return fruit.id === id ? { ...fruit, mouseOverDesc: !fruit.mouseOverDesc } : fruit;
         })
      });
   }
   function mouseOverRes(id) {
      setFruitArray(prevFruitArray => {
         return prevFruitArray.map((fruit) => {
            return fruit.id === id ? { ...fruit, mouseOverReserve: !fruit.mouseOverReserve } : fruit;
         })
      });
   }
   function a(a){alert(a);
   }
   return (
      <div>
         <div style={{display:"flex"}}>{filteredData2}</div>
         {!profileShown && <h2 onClick={()=>a({...data[0].edonaa.reservations.Molla})}>Balance: {userInfo.balance}$</h2>}
         {profileShown && <Profile user={userInfo} />}
         {addProduct && <AddProduct username={userInfo.username} handleClick={addProd}/>}
         {!profileShown && !addProduct && filteredData}
      </div>
   )
}
