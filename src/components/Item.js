import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, toggleInCart] = useState(false);
  function handleCartToggle(){
    toggleInCart(() => !inCart);
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add"
        onClick={handleCartToggle}
      >
        {!inCart ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
