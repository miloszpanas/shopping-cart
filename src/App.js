import React, { useState } from "react";
import { Nav } from "./Nav";
import { ItemPage } from "./ItemPage";
import { items } from "./static-data";
import "./App.css";

function App() {
  const [activetab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const onAddToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  }

  console.log(cart);

  return (
    <div className="App">
      <Nav activeTab={activetab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activetab} onAddToCart={onAddToCart}/>
      </main>
    </div>
  );
}

const Content = ({ tab, onAddToCart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case "cart":
      return <span>Cart</span>;
  }
};

export default App;
