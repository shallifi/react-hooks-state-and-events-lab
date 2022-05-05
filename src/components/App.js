import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react'

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(true)
  
  function handleDarkClick() {
    setDarkMode((darkMode) => !darkMode)
  }
  const appClass = darkMode ? "App dark" : "App light"
  console.log(darkMode)
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkClick}> {darkMode ? "Dark" : "Light"}  Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
