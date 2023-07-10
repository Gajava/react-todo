import React, { useState } from "react";

import "./App.css";

function App() {
  const [item, setItem] = useState("");

  const [itemsList, setItemsList] = useState([]);

  function handleData() {
    if (item !== "") {
      setItemsList([item, ...itemsList]); // Add the new item at the beginning

      setItem("");
    }
  }

  function deleteItem(index) {
    const updatedList = [...itemsList];

    updatedList.splice(index, 1);

    setItemsList(updatedList);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>

      <div className="box">
        <h2 style={{ textAlign: "center" }}>Items To Buy</h2>

        <input
          type="text"
          placeholder="Add a new item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button type="button" onClick={handleData}>
          Add
        </button>

        {itemsList.map((item, index) => (
          <div key={index}>
            <span>{item}</span>

            <button
              type="button"
              className="btn1"
              onClick={() => deleteItem(index)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
