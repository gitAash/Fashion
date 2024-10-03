import React, { useState } from "react";
import backgroundImage from "C:/Users/aashr/OneDrive/Desktop/my-app/src/men3.jpeg"; // Adjust the path if needed

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [city, setCity] = useState("");
  const [vendor, setVendor] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  // Sample vendors for the selected city
  const vendors = {
    "JP Nagar": ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"],
    Banashankari: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"],
    "Kumarswamy Layout": ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"],
    Koramangala: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"],
    Jayanagara: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  const handleServiceSelect = (serviceType) => {
    setService(serviceType);
    // Set price based on the service type selected
    const prices = {
      Alteration: 200, // Price for alteration
      "Customized Stitch": 300, // Price for customized stitch
    };
    setPrice(prices[serviceType]);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-start p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl bg-opacity-80">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Men's Section</h1>

        {/* Category Selection */}
        <div className="flex flex-col space-y-4 mb-6">
          {["Shirts", "Pants", "Ethnic Wear"].map((category) => (
            <button
              key={category}
              className={`text-lg font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-white ${selectedCategory === category ? "bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Size Inputs Based on Selected Category */}
        {selectedCategory === "Shirts" && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Size Requirements for Shirts</h3>
            <div className="flex flex-col space-y-2 mt-2">
              <input type="text" placeholder="Length of Shirt" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Sleeve Length" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Chest Size" className="border p-3 rounded-lg" />
            </div>
          </div>
        )}

        {selectedCategory === "Pants" && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Size Requirements for Pants</h3>
            <div className="flex flex-col space-y-2 mt-2">
              <input type="text" placeholder="Waist" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Hip" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Full Length" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Inseam" className="border p-3 rounded-lg" />
            </div>
          </div>
        )}

        {selectedCategory === "Ethnic Wear" && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Size Requirements for Ethnic Wear</h3>
            <div className="flex flex-col space-y-2 mt-2">
              <input type="text" placeholder="Length of Ethnic Wear" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Sleeve Length" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Chest Size" className="border p-3 rounded-lg" />
            </div>
          </div>
        )}

        {/* City Selection */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Choose a City</h3>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-3 rounded-lg w-full mt-2"
          >
            <option value="">Select a city</option>
            {Object.keys(vendors).map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </div>

        {/* Vendor Selection */}
        {city && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Choose a Vendor</h3>
            <select
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              className="border p-3 rounded-lg w-full mt-2"
            >
              <option value="">Select a vendor</option>
              {vendors[city].map((vendorName) => (
                <option key={vendorName} value={vendorName}>
                  {vendorName}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Service Selection */}
        {vendor && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Choose a Service</h3>
            <div className="flex space-x-6 mt-4">
              {["Alteration", "Customized Stitch"].map((serviceType) => (
                <button
                  key={serviceType}
                  className={`text-lg font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-white ${service === serviceType ? "bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"}`}
                  onClick={() => handleServiceSelect(serviceType)}
                >
                  {serviceType}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Display Price for Selected Service */}
        {service && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Price</h3>
            <p className="text-lg text-gray-800">
              {service}: ₹{price}
            </p>
          </div>
        )}

        {/* Quantity Selection */}
        {service && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Quantity</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-3 rounded-lg w-full mt-2"
            />
          </div>
        )}

        {/* Checkout Button */}
        {quantity > 0 && (
          <div className="mb-6">
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
