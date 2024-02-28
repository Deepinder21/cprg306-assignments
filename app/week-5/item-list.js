"use client";

import React, {useState} from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {

  const [sortBy , setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

return (
  <div>
    <p>Sort by:
      <button onClick={() => setSortBy('name')} className="p-5 m-2 text-l border border-black bg-blue-600 rounded-xl">
        Name</button>
      <button onClick={() => setSortBy('category')} className="p-5 m-2 text-l border border-black  bg-blue-600 rounded-xl">
        Category</button>
      </p>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
);
};

export default ItemList;