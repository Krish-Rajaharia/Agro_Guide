// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import InputForm from "./Components/InputForm"; // Import the InputForm
import MarketPrice from "./Components/MarketPrice"; // Import the MarketPrice page
import OrderManagement from "./Components/OrderManagement"; // Import the OrderManagement page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Login Page */}
        <Route path="/" element={<Login />} />

        {/* Route for the InputForm Page */}
        <Route path="/input" element={<InputForm />} />

        {/* Route for Market Price Page for Retailers */}
        <Route path="/market-price" element={<MarketPrice />} />

        {/* Route for Order Management Page for Retailers */}
        <Route path="/order-management" element={<OrderManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
