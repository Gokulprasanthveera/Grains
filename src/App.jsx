import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Feedback from "./components/Feedback";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle adding/removing items from the cart
  const toggleCartItem = (item) => {
    if (cartItems.some((cartItem) => cartItem.id === item.id)) {
      // If the item is already in the cart, remove it
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      // If the item is not in the cart, add it
      setCartItems([...cartItems, item]);
    }
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to handle searching ingredients
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Function to clear the search term
  const handleClear = () => {
    setSearchTerm(""); // Reset search term
  };

  return (
    <Router>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/10858588/pexels-photo-10858588.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
      >
        <Navbar />
        <div className="pt-16 p-4 min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cartItems={cartItems}
                  toggleCartItem={toggleCartItem}
                  searchTerm={searchTerm}
                  onSearch={handleSearch}
                  onClear={handleClear}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  toggleCartItem={toggleCartItem}
                  clearCart={clearCart}
                  searchTerm={searchTerm}
                  onSearch={handleSearch}
                  onClear={handleClear}
                />
              }
            />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
