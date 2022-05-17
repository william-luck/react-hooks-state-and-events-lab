import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [selectedCategory, setFilterBy] = useState('All')

  const foodsToDisplay = items.filter(food => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return food.category === selectedCategory
    }}) 

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
    }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
