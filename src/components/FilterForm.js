import React, { useState } from "react";

export const FilterForm = ({ priceFrom, priceTo, onPriceInputChange }) => {
  const [minPrice, setMinPrice] = useState(priceFrom);
  const [maxPrice, setMaxPrice] = useState(priceTo);

  const handleChange = (e, type) => {
    if (type === "min") setMinPrice(e.target.value);
    else setMaxPrice(e.target.value);

    onPriceInputChange(minPrice, maxPrice);
  };

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        value={minPrice}
        onChange={(e) => handleChange(e, "min")}
        placeholder="Price from..."
      />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        value={maxPrice}
        onChange={(e) => handleChange(e, "max")}
        placeholder="Price to..."
      />
    </div>
  );
};
