import { useContext } from "react";
import UserContext from "../Context/user-context";

// Hook personalizado para acessar o contexto
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a CarProvider");
  }

  return context; // Retorna diretamente o contexto tipado
}
