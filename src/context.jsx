import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarItemAoCarrinho = (quantidade, nome, precoUnitario, image) => {
    const precoTotal = quantidade * precoUnitario;
    const itemCarrinho = {
      image,
      quantidade,
      nome,
      precoUnitario,
      precoTotal,
    };
    setCarrinho([...carrinho, itemCarrinho]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarItemAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
