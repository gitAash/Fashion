import React, { useContext } from "react";
import { FilterContext } from "./FilterContext";

const Filter = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const newCategories = checked
        ? [...prev.category, value]
        : prev.category.filter((category) => category !== value);

      return { ...prev, category: newCategories };
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [name]: Number(value) || 0 },
    }));
  };

  return (
    <aside className="filter p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filter</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <label className="block">
          <input
            type="checkbox"
            value="Jeans"
            onChange={handleCategoryChange}
          />{" "}
          Jeans
        </label>
        <label className="block">
          <input type="checkbox" value="Tops" onChange={handleCategoryChange} />{" "}
          Tops
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="T-Shirts"
            onChange={handleCategoryChange}
          />{" "}
          T-Shirts
        </label>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <label className="block mb-2">
          Min
          <input
            type="number"
            name="min"
            value={filters.price.min}
            onChange={handlePriceChange}
            className="ml-2 border rounded p-1"
            min="0"
          />
        </label>
        <label className="block">
          Max
          <input
            type="number"
            name="max"
            value={filters.price.max}
            onChange={handlePriceChange}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>
    </aside>
  );
};

export default Filter;
