import React from "react";

function Shopcart() {
  var list = JSON.parse(localStorage.getItem("lista"));
  return (
    <div>
      {list.map((list , i) => {
        return (
          <div key={i} className="card-products">
            <img src={list.img} alt="" />
            <p>
              {list.name} <br />
              {list.price}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Shopcart;
