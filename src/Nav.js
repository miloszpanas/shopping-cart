import React from 'react'

export const Nav = ({onTabChange, activetab}) => {
  return (
    <nav className="App-nav">
      <ul>
        <li className="App-nav-item">
          <button onClick={() => onTabChange("items")}>Items</button>
        </li>
        <li className="App-nav-item">
          <button onClick={() => onTabChange("cart")}>Cart</button>
        </li>
      </ul>
    </nav>
  )
}
