/* eslint-disable react/prop-types */
import MenuCard from "@/pages/home/_components/cardapio/card";
import "animate.css";
import { MenuItem } from "dados";
import { ReactNode } from "react";

// eslint-disable-next-line react/prop-types
interface FoodsProps {
  Food: MenuItem[];
  icon: ReactNode;
  adicionarItemAoCarrinho: (
    quantidade: number,
    nome: string,
    precoUnitario: number,
    image: string
  ) => void;
  MensagemDeAdicao: () => void;
  tirar: string | null;
}
const Foods = ({
  Food,
  icon,
  adicionarItemAoCarrinho,
  MensagemDeAdicao,
  tirar,
}: FoodsProps) => {
  return (
    <div
      className={`flex flex-col justify-center flex-wrap sm:flex-row box-border mt-12 sm:max-h-[680px] gap-6 scale-[1.0] sm:mx-[200px] sm:pb-2 animate__animated animate__fadeIn notranslate ${
        tirar === null ? "overflow-hidden" : null
      } `}
    >
      {Food.map((foodItem, i) => (
        <MenuCard
          add={() => {
            const quantidade = 1;
            const nome = foodItem.name;
            const precoUnitario = foodItem.price;
            const image = foodItem.img;
            adicionarItemAoCarrinho(quantidade, nome, precoUnitario, image);
            MensagemDeAdicao();
          }}
          icon={icon}
          description={foodItem.dsc}
          backgroundImage={foodItem.img}
          foodName={foodItem.name}
          price={foodItem.price}
          foodComposition={foodItem.composicao}
          foodServe={foodItem.serve}
          key={i}
        />
      ))}
    </div>
  );
};
export default Foods;
