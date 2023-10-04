import { createContext, useState } from "react";

const CarContext = createContext({});

export function CarProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [userData, setUserData] = useState([])
  return (
    <CarContext.Provider value={{ carrinho, setCarrinho, userData, setUserData }}>
      {children}
    </CarContext.Provider>
  );
}

export default CarContext;
