"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js';

import { getItems, addItem } from "_services/shopping-list-service";

async function loadItems() {
    return getItems(user.uid);
}

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    setItems(loadItems());
}, []); 

const handleItemSelect = (id) => {
    let name = itemList.find((item) => item.id === id).name;
    let cleanedName = name.split(",")[0];
    cleanedName = cleanedName.replace(/[^a-z0-9\s,]/gi, "").trim();
    console.log(cleanedName);
    setSelectedItemName(cleanedName);
};

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect}/>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Page;