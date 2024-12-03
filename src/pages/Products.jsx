import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  // const allProductsdata = useSelector((state) => state?.products);
  const allProductsdata = useSelector((state) => state?.products);
  console.log(allProductsdata)
  const [searchProducts, setSearchproducts] = useState("");

  return (
    <>
    
      <Header value={setSearchproducts} />
      <div className="heading">
        <h1 className="text-4xl font-extrabold p-5 text-center">
          ALL PRODUCTS
        </h1>
      </div>

      <div className="productCardwrapper flex flex-wrap justify-center center ">
        {allProductsdata
          ?.filter((item) => {
            return searchProducts.toLocaleLowerCase() === ""
              ? item : item.title.toLocaleLowerCase().includes(searchProducts);
          })
          ?.map((item) => {
            return <ProductCard key={item.id} data={item} />;
          })}
      </div>
      <Footer/>
    </>
  );
};

export default Products;
