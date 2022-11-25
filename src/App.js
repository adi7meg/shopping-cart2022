import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./MyComponents/Cart";
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import faker from "faker";
faker.seed(100)

function App() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.vehicle.vehicle(),
    price: faker.commerce.price(),
    image: faker.image.cats(),
  }));
  const [cart, setCart] = useState([]);
  const [products]=useState(productsArray); 
 
  return (
    <BrowserRouter>
      <Header />
      <Routes className="">
        <Route path="/"  element={<Home cart={cart} setCart={setCart} products={products}/>}  exact/> 

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
