import React from "react";
import Data from "../../../Data.js";
import './Card.css'

const product1 = Data[21];
const product2 = Data[20];
const list = [product1, product2];
function Card() {
  return (
    <div className="card-container">
      {
      list.map((list) => {
        return (
          <div key={list.id} className="card-new">
            <p className="new">!Nuevo!</p>
            <img src={list.img} alt="" />
            <p>
              {list.name} <br />
              {list.price}
            </p>
            <button>comprar</button>
          </div>
        );
      })
      }
    </div>
  );
}

export default Card;
