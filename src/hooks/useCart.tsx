import { useContext } from "react";
import CarContext, { CarrinhoItem } from "@/Context/cart-context";

// Tipo do contexto (garantia explícita para TypeScript)
type CarContextType = {
  carrinho: CarrinhoItem[];
  setCarrinho: React.Dispatch<React.SetStateAction<CarrinhoItem[]>>;
};

// Hook personalizado para acessar o contexto
export function useCart(): CarContextType {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCart must be used within a CarProvider");
  }

  return context;
}
