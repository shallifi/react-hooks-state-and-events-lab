import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [itemInCart, setItemInCart] = useState(true)

  function handleCartClick(){
    setItemInCart((itemInCart) => !itemInCart )

  }

  return (
    <li className={itemInCart ? "in=cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{itemInCart ? "Add to Cart" : "Remove From Cart" } </button>
    </li>
  );
}

export default Item;
