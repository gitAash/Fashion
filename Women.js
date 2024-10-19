import React, { useState } from 'react';

const womenServices = [
  { name: 'Custom Dresses', description: 'Tailored dresses for every occasion.', price: '$50 - $200', additionalFields: ['Type of Dress', 'Fabric Type'] },
  { name: 'Alterations', description: 'Get your clothes altered to fit perfectly.', price: '$10 - $50', additionalFields: ['Type of Alteration'] },
  { name: 'Wedding Gowns', description: 'Bespoke wedding gowns tailored to your style.', price: '$200 - $1000', additionalFields: ['Style', 'Train Length', 'Fabric Type'] },
  { name: 'Blouses & Tops', description: 'Custom blouses, tops, and shirts.', price: '$30 - $100', additionalFields: ['Style', 'Fabric Type'] },
];

const vendors = [
  { name: 'Fashion Tailor', location: 'Jp Nagar', distance: '2 miles', priceRange: '$50 - $300', description: 'Specializes in casual and custom dresses.' },
  { name: 'Elite Stitching', location: 'Banashankari', distance: '5 miles', priceRange: '$20 - $250', description: 'Expert in alterations and custom gowns.' },
  { name: 'Bridal Couture', location: 'Jayanagar', distance: '3 miles', priceRange: '$150 - $1000', description: 'Exclusive bridal and wedding couture.' },
  { name: 'Tailor Pro', location: 'Kumarswamy Layout', distance: '4 miles', priceRange: '$30 - $400', description: 'Offers premium tailoring services for all occasions.' },
  { name: 'Tailor Pro', location: 'Kormanagla', distance: '4 miles', priceRange: '$40 - $350', description: 'High-end tailoring and professional alterations.' },
];

const locations = ['Jp Nagar', 'Banashankari', 'Jayanagar', 'Kumarswamy Layout', 'Kormanagla'];

const Women = () => {
  const [formVisible, setFormVisible] = useState({});
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState('');
  const [additionalInputs, setAdditionalInputs] = useState({}); // State to manage additional inputs

  const toggleForm = (serviceName) => {
    setFormVisible((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
    // Reset additional inputs when form is opened
    if (!formVisible[serviceName]) {
      setAdditionalInputs((prev) => ({ ...prev, [serviceName]: {} }));
    }
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);

    // Filter vendors based on the selected location
    const nearbyVendors = vendors.filter((vendor) => vendor.location === location);
    setFilteredVendors(nearbyVendors);
    setSelectedVendor(''); // Reset selected vendor when location changes
  };

  const handleVendorSelection = (vendorName) => {
    setSelectedVendor(vendorName); // Set the selected vendor
  };

  const handleInputChange = (serviceName, fieldName, value) => {
    setAdditionalInputs((prev) => ({
      ...prev,
      [serviceName]: {
        ...prev[serviceName],
        [fieldName]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-background-image.jpg)' }}>
      <div className="container mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Women's Tailoring Services</h2>
        <p className="mb-8 text-lg text-center text-gray-600">Explore a range of services tailored specifically for women.</p>

        <ul className="space-y-6">
          {womenServices.map((service, index) => (
            <li key={index} className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white">
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="font-bold text-lg text-gray-900">Price: {service.price}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
                onClick={() => toggleForm(service.name)}
              >
                Order Now
              </button>

              {formVisible[service.name] && (
                <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-gray-100">
                  <h4 className="text-2xl font-bold mb-4">{service.name} Details</h4>
                  <form>
                    {/* Size measurement fields */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="size">Size Measurements:</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="chest">Chest:</label>
                          <input
                            type="number"
                            id="chest"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter chest measurement"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="waist">Waist:</label>
                          <input
                            type="number"
                            id="waist"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter waist measurement"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="hips">Hips:</label>
                          <input
                            type="number"
                            id="hips"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter hips measurement"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1" htmlFor="shoulders">Shoulders:</label>
                          <input
                            type="number"
                            id="shoulders"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter shoulders measurement"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Vendor and location selection */}
                    <div className="mt-6">
                      <h4 className="text-xl font-bold mb-4">Select Your Location</h4>
                      <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="w-full border border-gray-300 p-2 rounded mb-4"
                      >
                        <option value="">Select Location</option>
                        {locations.map((location, index) => (
                          <option key={index} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>

                      {/* Display vendors based on selected location */}
                      {selectedLocation && (
                        <div>
                          <h4 className="text-xl font-bold mb-4">Available Vendors in {selectedLocation}</h4>
                          {filteredVendors.length > 0 ? (
                            <ul className="space-y-4">
                              {filteredVendors.map((vendor, index) => (
                                <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                  <label className="flex items-center">
                                    <input
                                      type="radio"
                                      name={`vendor-${service.name}`} // Ensure each service has its own vendor group
                                      className="mr-2"
                                      checked={selectedVendor === vendor.name}
                                      onChange={() => handleVendorSelection(vendor.name)}
                                    />
                                    <p className="font-bold text-lg text-gray-800">{vendor.name}</p>
                                  </label>
                                  <p className="text-gray-700">{vendor.location} - {vendor.distance}</p>
                                  <p className="text-gray-600">{vendor.description}</p>
                                  <p className="font-bold text-gray-800">Price Range: {vendor.priceRange}</p>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>No vendors available in this location.</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Additional attributes based on service type */}
                    {service.additionalFields && (
                      <div className="mt-6">
                        {service.additionalFields.map((field, idx) => (
                          <div key={idx} className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor={field}>{field}:</label>
                            <input
                              type="text"
                              id={field}
                              className="w-full border border-gray-300 p-2 rounded"
                              placeholder={`Enter ${field.toLowerCase()}`}
                              value={additionalInputs[service.name]?.[field] || ''}
                              onChange={(e) => handleInputChange(service.name, field, e.target.value)}
                              required
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Women;
