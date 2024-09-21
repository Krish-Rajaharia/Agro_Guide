import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../styles.css'; // Importing the CSS

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [profession, setProfession] = useState(''); // To track profession selection
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To show error messages
  const [showPopup, setShowPopup] = useState(false); // To show the first pop-up for Farmer
  const [showInputForm, setShowInputForm] = useState(false); // To control 12-input form visibility
  const [showFarmingPopup, setShowFarmingPopup] = useState(false); // To control Contract Farming pop-up
  const [showRetailerPopup, setShowRetailerPopup] = useState(false); // To control Retailer pop-up

  const [formInputs, setFormInputs] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: '',
    field11: '',
    field12: ''
  }); // State for the 12 inputs

  // Handle the login form submission
  const handleLogin = (event) => {
    event.preventDefault();

    // Validate if all fields are filled
    if (!profession) {
      setErrorMessage('Please select a profession.');
    } else if (!email || !password) {
      setErrorMessage('Please fill in all the fields.');
    } else {
      setErrorMessage('');
      
      // Show Farmer options if profession is Farmer
      if (profession === 'Farmer') {
        setShowPopup(true);
      } 
      // Redirect for Retailer options
      else if (profession === 'Retailer') {
        setShowRetailerPopup(true); // Trigger the retailer popup
      }
    }
  };

  // Show the 12-input form when the "TO GROW" button is clicked
  const handleToGrow = () => {
    setShowPopup(false);
    // Redirect to InputForm page
    window.location.href = '/input'; // Or use navigate from 'react-router-dom'
  };

  // Handle Retailer navigation
  const handleRetailerOption = (option) => {
    setShowRetailerPopup(false); // Close the retailer popup
    navigate(option); // Navigate to the selected retailer page
  };

  // Handle the submission of the 12-input form
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Simple validation to check if all fields are filled
    for (let field in formInputs) {
      if (!formInputs[field]) {
        setErrorMessage('Please fill all the input fields.');
        return;
      }
    }

    // If all fields are filled, hide the input form and show the Contract Farming pop-up
    setErrorMessage('');
    setShowInputForm(false); // Hide input form
    setShowFarmingPopup(true); // Show second pop-up
  };

  // Function to handle input changes in the 12 fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      {/* Header with Logo */}
<div className="login-header flex justify-center mb-4">
  <img src="./assets/002.png" alt="logo" className="logo-img" />
</div>
      {/* Login Form Section */}
      <div className="login-box">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="rounded-md px-4 py-3 border border-gray-300"
          >
            <option value="" disabled>
              Select your profession
            </option>
            <option value="Farmer">Farmer</option>
            <option value="Retailer">Retailer</option>
          </select>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md px-4 py-3 border border-gray-300"
            type="email"
            placeholder="Enter email address"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md px-4 py-3 border border-gray-300"
            type="password"
            placeholder="Enter password"
            required
          />

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4">
          <a href="#" className="text-sm text-blue-500">Forgot your password?</a>
          <a href="#" className="text-sm text-blue-500">Don't have an account? Create one</a>
        </div>
      </div>

      {/* First Pop-up for Farmer Options */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-menu">
            <h2 className="text-xl font-bold mb-4">What would you like to do?</h2>
            <div className="flex flex-col gap-4">
              <button className="popup-button" onClick={handleToGrow}>
                TO GROW
              </button>
              <button className="popup-button">TO SELL</button>
            </div>
            <button className="close-popup" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Retailer Pop-up for Market Price and Order Management */}
{showRetailerPopup && (
  <div className="popup-overlay">
    <div className="popup-menu">
      <h2 className="text-xl font-bold mb-4">Choose an Option</h2>
      <div className="flex flex-col gap-4">
        <button 
          className="popup-button" 
          onClick={() => handleRetailerOption('/market-price')}
        >
          MARKET PRICE
        </button>
        <button 
          className="popup-button" 
          onClick={() => handleRetailerOption('/order-management')}
        >
          ORDER MANAGEMENT
        </button>
      </div>
      <button className="close-popup" onClick={() => setShowRetailerPopup(false)}>
        Close
      </button>
    </div>
  </div>
)}
      {/* 12-input form for "TO GROW" option */}
      {showInputForm && (
        <div className="popup-overlay">
          <div className="popup-menu">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              {Object.keys(formInputs).map((field, index) => (
                <input
                  key={index}
                  name={field}
                  value={formInputs[field]}
                  onChange={handleInputChange}
                  className="rounded-md px-4 py-3 border border-gray-300"
                  type="text"
                  placeholder={`Input ${index + 1}`}
                  required
                />
              ))}
              <button
                type="submit"
                className="popup-button"
              >
                Submit
              </button>
            </form>
            <button className="close-popup" onClick={() => setShowInputForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Second Pop-up for Farming Options (after 12-input form submission) */}
      {showFarmingPopup && (
        <div className="popup-overlay">
          <div className="popup-menu">
            <h2 className="text-xl font-bold mb-4">Select Farming Option</h2>
            <div className="flex flex-col gap-4">
              <button className="popup-button">CONTRACT FARMING</button>
              <button className="popup-button">NON CONTRACT FARMING</button>
            </div>
            <button
              className="close-popup"
              onClick={() => setShowFarmingPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
