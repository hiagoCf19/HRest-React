/* eslint-disable react/jsx-key */

import MENU from "../../../../dados";
import { useRef, useState } from "react";
import { GiCakeSlice, GiFullPizza, GiSteak } from "react-icons/gi";
import Foods from "./cardapio/foods";
import { PiHamburgerFill } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiBarbecue } from "react-icons/gi";
import {
  FaDrumstickBite,
  FaBacon,
  FaGlassMartiniAlt,
  FaIceCream,
  FaHamburger,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
("feather-icons-react/build/IconComponents");
import { BiSolidDrink } from "react-icons/bi";
import { useCart } from "@/hooks/useCart";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";

const CardapioComponent = () => {
  const { carrinho, setCarrinho } = useCart();
  const [tirar, setTirar] = useState<string | null>(null);
  const [botaoAtivo, setBotaoAtivo] = useState(0);

  const titulosSpn = [
    "Burgers",
    "Pizzas",
    "Churrasco",
    "Steaks",
    "Bebidas",
    "Sobremesas",
  ];
  const icons = [
    <PiHamburgerFill className="text-primary/80" size={20} />,
    <FaPizzaSlice className="text-primary/80" />,
    <FaDrumstickBite className="text-primary/80" />,
    <FaBacon className="text-primary/80" />,
    <FaGlassMartiniAlt className="text-primary/80" />,
    <FaIceCream size={20} className="text-primary/80" />,
  ];

  const scrollContainerRef = useRef(null);
  const burgers = MENU.burgers;
  const pizzas = MENU.pizzas;
  const churrasco = MENU.churrasco;
  const steaks = MENU.steaks;
  const bebidas = MENU.bebidas;
  const sobremesa = MENU.sobremesas;

  const adicionarItemAoCarrinho = (
    quantidade: number,
    nome: string,
    precoUnitario: number,
    image: string
  ) => {
    // Verificar se o item já existe no carrinho, o item vai existir quando item.nome for igual ao nome
    const ItemExisteQuando = carrinho.find((item) => item.nome === nome);

    if (ItemExisteQuando) {
      // Se o item já existe, atualizar apenas a quantidade
      const novoCarrinho = carrinho.map((item) => {
        if (item.nome === nome) {
          return {
            ...item,
            quantidade: item.quantidade + quantidade,
            precoTotal: (item.quantidade + quantidade) * item.precoUnitario,
          };
        } else {
          return item;
        }
      });

      // Atualizar o carrinho com o novoCarrinho
      setCarrinho(novoCarrinho);
    } else {
      // Se o item não existe, adicionar como um novo item
      const precoTotal = quantidade * precoUnitario;

      const itemCarrinho = {
        image,
        quantidade,
        nome,
        precoUnitario,
        precoTotal,
      };

      setCarrinho([...carrinho, itemCarrinho]);
    }
  };

  const [adicionou, setAdicionou] = useState(false);
  const MensagemDeAdicao = () => {
    setAdicionou(true);

    setTimeout(() => {
      setAdicionou(false);
    }, 3000);
  };

  return (
    <>
      <section id="Cardapio" className="p-8 sm:p-0 ">
        {/* DESCRIÇÃO DA SECTION */}
        <div
          id="titulo-da-section"
          className="flex justify-center mb-10 text-center sm:text-start"
        >
          <Title descricao={"Cardápio"} title={"Escolha sua comida favorita"} />
        </div>
        {/*BARRA DE SELEÇÃO DE ITENS */}
        <div
          id="seletor-de-itens"
          className=" flex justify-between items-center gap-2 sm:justify-center "
        >
          <div
            className="flex min-wmax sm:w-auto overflow-x-scroll sm:overflow-hidden gap-4 p-2 "
            ref={scrollContainerRef}
          >
            {titulosSpn.map((spn, i) => (
              <button
                key={i}
                className={`gap-1 flex items-center rounded-xl  p-[10px] bg-secondary/90 shadow-lg ${
                  botaoAtivo === i
                    ? "bg-colorSecondary"
                    : "hover:bg-colorSecondary"
                } active:bg-colorPrimary`}
                onClick={() => setBotaoAtivo(i)}
              >
                {icons[i]}
                <span className="medium text-zinc-100">{spn}</span>
              </button>
            ))}
          </div>
        </div>
        {/* ITENS DO CARDAPIO */}
        <div
          className={` sm:w-auto  ${
            tirar === "removido" ? "sm:pb-[16%]" : null
          }`}
        >
          {botaoAtivo === 0 ? (
            <Foods
              Food={burgers}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              tirar={tirar}
              icon={<FaHamburger size={40} className="text-primary/80" />}
            />
          ) : null}
          {botaoAtivo === 1 ? (
            <Foods
              Food={pizzas}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              tirar={tirar}
              icon={<GiFullPizza size={40} className="text-primary/80" />}
            />
          ) : null}
          {botaoAtivo === 2 ? (
            <Foods
              Food={churrasco}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              tirar={tirar}
              icon={<GiBarbecue size={40} className="text-primary/80" />}
            />
          ) : null}
          {botaoAtivo === 3 ? (
            <Foods
              Food={steaks}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              tirar={tirar}
              icon={<GiSteak size={40} className="text-primary/80" />}
            />
          ) : null}
          {botaoAtivo === 4 ? (
            <Foods
              Food={bebidas}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              tirar={tirar}
              icon={<BiSolidDrink size={40} className="text-primary/80" />}
            />
          ) : null}
          {botaoAtivo === 5 ? (
            <Foods
              Food={sobremesa}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              tirar={tirar}
              icon={<GiCakeSlice size={40} className="text-primary/80" />}
            />
          ) : null}
        </div>
        {/* BOTÃO VER MAIS */}
        <div className="hidden sm:block">
          <div className="flex justify-center p-6 ">
            <Button
              variant={"link"}
              className={` p-2 rounded-xl scale-110 hover:shadow-xl hover:bg-colorPrimary hover:text-colorText ${
                tirar === null ? null : "hidden"
              } `}
              onClick={() => setTirar("removido")}
            >
              Ver Mais
            </Button>
          </div>
        </div>
      </section>

      {adicionou && (
        <div className="fixed sm:ml-[85%] ml-[25%] mt-[100px] bg-colorPrimary p-4 rounded-lg fade-out-up w-[200px] flex items-center gap-3 medium">
          Item Adicionado <MdVerified />
        </div>
      )}
    </>
  );
};

export default CardapioComponent;
