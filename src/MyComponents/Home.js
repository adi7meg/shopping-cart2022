import React, { useState } from "react"
import faker from "faker"
import SingleProduct from "./SingleProduct";
faker.seed(100);

const Home = ({ cart, setCart, products }) => {
  console.log(cart);

  return (
    <div>
      Home
      {products.map((prod) => (
        <SingleProduct
          key={prod.id}
          prod={prod}
          cart={cart}
          setCart={setCart}
          products={products}
        />
      ))}
    </div>
  )
}

export default Home;
