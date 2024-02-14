"use client"
import React, { useState } from 'react';

const NewItem = () => {
 
  const [Name, setName] = useState('');
  const [Quantity, setQuantity] = useState(1);
  const [Category, setCategory] = useState('produce');

const handleSubmit = (e) => {
    e.preventDefault();
    const item = { Name, Quantity, Category };
    console.log(item);
    alert(`Name: ${Name}, Quantity: ${Quantity}, Category: ${Category}`);
 
    setName('');
    setQuantity(1);
    setCategory('produce');
};

  return (

    <form onSubmit={handleSubmit}>

    <div className="mb-4">
        <label
            htmlFor="Name"
            className="block text-m font-medium text-black-700">
        Name
        </label>
        <input
          type="text"
          placeholder='Enter item name here'
          value={Name}
          onChange={(e) =>setName(e.target.value)}
          required
          className="mt-1 p-2 border border-black rounded-md w-full"
        />
    </div>

    <div className="mb-4">
        <label
            htmlFor="Quantity"
            className="block text-m font-medium text-black-700">
        Quantity
        </label>
        <input
          type="number"
          id = "quantity"
          min="1"
          max="99"
          value={Quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="mt-1 p-2 border border-black rounded-md w-full"
        />
    </div>

    <div className="mb-4">
        <label
            htmlFor="Category"
            className="block text-m font-medium text-black-700">
        Category
        </label>
        <select value={Category} onChange={(e) => setCategory(e.target.value)}
        className="at -1 p-2 border border-black rounded-md w-full">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
    </div>


      <button
        ype= "submit"
        className=" bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-900 bg-center" >Add</button>

    </form>

);
};

export default NewItem;