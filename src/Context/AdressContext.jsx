import { createContext, useState } from "react";

const AdrsContext = createContext({});

export function AdrsProvider({ children }) {
  const [EnderecoDeEntrega, setEnderecoDeEntrega] = useState([]);

  return (
    <AdrsContext.Provider value={{ EnderecoDeEntrega, setEnderecoDeEntrega }}>
      {children}
    </AdrsContext.Provider>
  );
}

export default AdrsContext;