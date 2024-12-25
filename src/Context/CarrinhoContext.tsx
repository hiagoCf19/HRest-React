import { createContext, ReactElement, useState } from "react";

const CarContext = createContext({});

export function CarProvider({ children }: any) {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <CarContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarContext.Provider>
  );
}

export default CarContext;
