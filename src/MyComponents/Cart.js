import React, { useContext, useEffect, useState } from "react";
import { contextState } from "../Context/Context";
import SingleProduct from "./SingleProduct";

const Cart = ({}) => {
  const {cart, setCart} = useContext(contextState)
  const [total,setTotal]= useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+ Number(curr.price),0))
  },[cart])

  return (
    <div>
      <h1>Cart</h1>
       <h2>Total:{total}</h2>


    {cart.map((prod)=>(<SingleProduct cart={cart} setCart={setCart}  prod={prod} key={prod.id}/>))}
    </div>
  );
};

export default Cart;
