import React, { useState } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";

import products from "../assets/products.json";

export const Search = (props) => {
  let displayedProducts = [...products];

  const lowestPrice = displayedProducts.reduce(function (prev, curr) {
    return prev.price < curr.price ? prev : curr;
  });

  const highestPrice = displayedProducts.reduce(function (prev, curr) {
    return prev.price > curr.price ? prev : curr;
  });

  const [productItems, setProductItems] = useState(displayedProducts);
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  //const [products, setProducts] = useState[displayedProducts];
  //commenting out
  const onPriceInputChange = (min, max) => {
    console.log(min);
    setProductItems(displayedProducts.filter((prod) => prod.price > min));
    //console.log(displayedProducts);
    // TODO: implement price change handler
  };

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
  };

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
  };

  console.log(displayedProducts);
  return (
    <div className="Products">
      <FilterForm
        priceFrom={lowestPrice.price}
        priceTo={highestPrice.price}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={""} columns={columns} />

      <ProductList products={productItems} columns={columns} />
    </div>
  );
};

export default Search;
