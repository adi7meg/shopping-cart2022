import React from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({cart,setCart}) => {
  return (
    <div>
      <h1>Cart</h1>
    {cart.map((prod)=>(<SingleProduct cart={cart} setCart={setCart}  prod={prod} key={prod.id}/>))}
    </div>
  );
};

export default Cart;
