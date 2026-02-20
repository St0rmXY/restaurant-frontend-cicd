import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Local Restaurant</h1>
      </header>
      <section id="menu">
        <h2>Menus</h2>
        <ul>
          <li>Burger - $10</li>
          <li>Pizza - $12</li>
          <li>Salad - $8</li>
        </ul>
      </section>
      <section id="order">
        <h2>Order Section</h2>
        <form>
          <label>Item: <input type="text" /></label>
          <button>Place Order</button>
        </form>
      </section>
      <section id="profile">
        <h2>User Profile</h2>
        <p>Name: John Doe</p>
        <p>Orders: 5</p>
      </section>
    </div>
  );
}

export default App;
