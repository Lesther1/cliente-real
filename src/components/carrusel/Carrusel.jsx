import React from "react";
import Arrowleft from "../../assets/arrow-left.png";
import Arrowrigth from "../../assets/arrow-rigth.png";
import Data from "../../../Data.js";
import "./Carrusel.css";

const product1 = Data[0]
const product2 = Data[13]
const product3 = Data[12]
function Carrusel() {
  return (
    <div className="carrusel-container">
      <div className="carrusell-item" id="item-1">
      <p className="offer">!Oferta!</p>
        <div className="carrusell-card" id="card-1">
            <img src={product1.img} alt="" className="card-img" />
            <p className="installation">Instalacion en 1 hora</p>
            <p>{product1.name}<br/>{product1.price}</p>
            <a href="" className="carrusel-add">Añadir a carrito</a>
        </div>
        <div className="carrusell-arrow">
          <a href="#item-3" className="arrow">
            <img src={Arrowleft} />
          </a>
          <a href="#item-2" className="arrow">
            <img src={Arrowrigth} />
          </a>
        </div>
      </div>
      <div className="carrusell-item" id="item-2">
        <p className="offer">!Oferta!</p>
        <div className="carrusell-card" id="card-2">
        <img src={product2.img} alt="" className="card-img" />
        <p className="installation">Instalacion en 1 hora</p>
            <p>{product2.name}<br/>{product2.price}</p>
            <a href="" className="carrusel-add">Añadir a carrito</a>
        </div>
        <div className="carrusell-arrow">
          <a href="#item-1" className="arrow">
            <img src={Arrowleft} />
          </a>
          <a href="#item-3" className="arrow">
            <img src={Arrowrigth} />
          </a>
        </div>
      </div>
      <div className="carrusell-item" id="item-3">
        <p className="offer">!Oferta!</p>
        <div className="carrusell-card" id="card-3">
        <img src={product3.img} alt="" className="card-img" />
        <p className="installation">Instalacion en 1 hora</p>
            <p>{product3.name}<br/>{product3.price}</p>
            <a href="" className="carrusel-add">Añadir a carrito</a>
        </div>
        <div className="carrusell-arrow">
          <a href="#item-2" className="arrow">
            <img src={Arrowleft} />
          </a>
          <a href="#item-1" className="arrow">
            <img src={Arrowrigth} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
