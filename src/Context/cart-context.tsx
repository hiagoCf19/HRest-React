import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Tipo para os dados do carrinho
export type CarrinhoItem = {
  image: string;
  quantidade: number;
  nome: string;
  precoUnitario: number;
  precoTotal: number;
};

// Tipo para o valor do contexto
type CarContextType = {
  carrinho: CarrinhoItem[];
  setCarrinho: Dispatch<SetStateAction<CarrinhoItem[]>>;
};

// Inicializando o contexto com o tipo correto
const CarContext = createContext<CarContextType | undefined>(undefined);

type CarProviderProps = {
  children: ReactNode;
};

export function CarProvider({ children }: CarProviderProps) {
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

  return (
    <CarContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarContext.Provider>
  );
}

export default CarContext;
