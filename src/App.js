import React, { useState } from "react";
import { Nav } from "./Nav";
import "./App.css";

function App() {
  const [activetab, setActiveTab] = useState("items");

  return (
    <div className="App">
      <Nav activeTab={activetab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activetab}/>
      </main>
    </div>
  );
}

const Content = ({ tab }) => {
  switch (tab) {
    default:
    case "items":
      return <span>Items</span>;
    case "cart":
      return <span>Cart</span>;
  }
};

export default App;
