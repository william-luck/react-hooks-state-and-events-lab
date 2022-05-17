import React, { useState } from "react";







function Item({ name, category }) {
  const [inCart, updateCart] = useState(false)

  function handleClick() {

    updateCart(() => !inCart)
    }

    const appClass = inCart ? "in-cart" : ''



  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
