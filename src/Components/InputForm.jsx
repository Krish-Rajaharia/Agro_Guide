// src/Components/InputForm.jsx

import React, { useState } from 'react';

const InputForm = () => {
  const [formInputs, setFormInputs] = useState({
    ph: '',
    ec: '',
    oc: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    sulfur: '',
    zinc: '',
    boron: '',
    iron: '',
    manganese: '',
    copper: '',
    soilType: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission logic here
    console.log('Submitted data:', formInputs);
  };

  return (
    <div className="input-form-container">
      <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Input Field</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter the pH of soil</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="ph"
                  value={formInputs.ph}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter the EC of soil</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="ec"
                  value={formInputs.ec}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Organic Carbon</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="oc"
                  value={formInputs.oc}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Nitrogen (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="nitrogen"
                  value={formInputs.nitrogen}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Phosphorus (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="phosphorus"
                  value={formInputs.phosphorus}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Potassium (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="potassium"
                  value={formInputs.potassium}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Sulfur (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="sulfur"
                  value={formInputs.sulfur}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Zinc (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="zinc"
                  value={formInputs.zinc}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Boron (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="boron"
                  value={formInputs.boron}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Iron (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="iron"
                  value={formInputs.iron}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Manganese (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="manganese"
                  value={formInputs.manganese}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Copper (kg/ha)</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="copper"
                  value={formInputs.copper}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Enter Soil Type</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  name="soilType"
                  value={formInputs.soilType}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                  type="text"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
