import React, { useContext } from "react"
import faker from "faker"
import SingleProduct from "./SingleProduct";
import { contextState } from "../Context/Context";
faker.seed(100);

const Home = ({ }) => {
  const {cart, setCart, products} = useContext(contextState)

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
