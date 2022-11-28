import React from "react";

const SingleProduct = ({ prod, cart, setCart }) => {

  return (
    <div className="singleProduct">
      <div>{prod.id}</div>
      <img src={prod.image} />
      <div>name:{prod.name}</div>
      <div>$:{prod.price}</div>

      {cart.includes(prod) ? (
        <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>
          Remove from cart
        </button>
      ) : (
        <button onClick={() => setCart([...cart, prod])}>Add to cart</button>
      )}
    </div>
  );
};

export default SingleProduct;
