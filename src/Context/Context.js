import { createContext, useState } from "react"
import faker from "faker";

export const contextState = createContext();

const Context = ({children}) => {
    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.vehicle.vehicle(),
        price: faker.commerce.price(),
        image: faker.image.cats(),
      }));
    const [cart,setCart] = useState([]);
    const [products]=useState(productsArray); 
  return (
    <contextState.Provider value={{cart,setCart,products}}>{children}</contextState.Provider>
  )
}

export default Context