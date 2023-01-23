import React from "react";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Data from "../../../Data.js";
import './Products.css';

function Products() {
  const [items, setItems] = useState([]);
  function add(Data) {
    setItems([...items, Data])
    localStorage.setItem("lista", JSON.stringify(items));
    console.log(items)
  }
  return (
    <div className="products-container" >
      {
      Data.map(Data => {

        return(
            <div key={Data.id} className="card-products">
                <img src={Data.img} alt="" />
                <p>{Data.name} <br/>{Data.price}</p>
                <button onClick={() => add(Data)}>
                  comprar
                </button>

            </div>
        ) 
      })
      
      }
    </div>
  );
}

export default Products;
