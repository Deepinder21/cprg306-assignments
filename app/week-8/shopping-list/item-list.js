"use client";
import React, { useState } from 'react';
import Item from "./item";

 function ItemList({items, onItemSelect})  {
  const [sortBy, setSortBy] = useState("name");


  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
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
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default ItemList;