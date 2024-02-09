/* eslint-disable react/jsx-key */

import MENU from "../../../dados";
import "../../styles/main.css";
import { useContext, useRef, useState } from "react";
import CarContext from "../../Context/CarrinhoContext";
import Foods from "./FoodsComponent";
import { PiHamburgerFill } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa6";
import {
  FaDrumstickBite,
  FaBacon,
  FaGlassMartiniAlt,
  FaIceCream,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Title from "../Title";
("feather-icons-react/build/IconComponents");
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";

const CardapioComponent = () => {
  const { carrinho, setCarrinho } = useContext(CarContext);

  const titulosSpn = [
    "Burgers",
    "Pizzas",
    "Churrasco",
    "Steaks",
    "Bebidas",
    "Sobremesas",
  ];
  const icons = [
    <PiHamburgerFill size={20} />,
    <FaPizzaSlice />,
    <FaDrumstickBite />,
    <FaBacon />,
    <FaGlassMartiniAlt />,
    <FaIceCream size={20} />,
  ];

  const [tirar, setTirar] = useState(null);
  const [MouseInside, setMouseInside] = useState(null);
  const [botaoAtivo, setBotaoAtivo] = useState(0);
  const scrollContainerRef = useRef(null);
  const burgers = MENU.burgers;
  const pizzas = MENU.pizzas;
  const churrasco = MENU.churrasco;
  const steaks = MENU.steaks;
  const bebidas = MENU.bebidas;
  const sobremesa = MENU.sobremesas;
  const [countBurguer, setCountBurguer] = useState(
    Array(burgers.length).fill(0)
  );
  const [countPizzas, setCountPizzas] = useState(Array(pizzas.length).fill(0));
  const [countChurrasco, setCountChurrasco] = useState(
    Array(churrasco.length).fill(0)
  );
  const [countSteaks, setCountSteaks] = useState(Array(steaks.length).fill(0));
  const [countBebidas, setCountbebidas] = useState(
    Array(bebidas.length).fill(0)
  );
  const [countSobremesa, setCountSobremesa] = useState(
    Array(sobremesa.length).fill(0)
  );
  const inside = (i) => {
    setMouseInside(i);
  };
  const outside = () => {
    setMouseInside(null);
  };
  const adicionarItemAoCarrinho = (quantidade, nome, precoUnitario, image) => {
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
  const adicionar = (itemarray, i, setItem) => {
    const novosCounts = [...itemarray];
    novosCounts[i] = novosCounts[i] + 1;
    setItem(novosCounts);
  };
  const subtrair = (itemarray, i, setItem) => {
    if (itemarray[i] > 0) {
      const novosCounts = [...itemarray];
      novosCounts[i] = novosCounts[i] - 1;
      setItem(novosCounts);
    }
  };
  const RenderizaQuantidade = (itemarray, i) => {
    return itemarray[i];
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
      <section id="Cardapio" className="p-8 sm:p-0">
        {/* DESCRIÇÃO DA SECTION */}
        <div
          id="titulo-da-section"
          className="flex justify-center mb-10 text-center sm:text-start"
        >
          <Title
            descricao={"Cardápio"}
            title={"Escolha sua comida favorita"}
            className="flex justify-center bg-"
          />
        </div>
        {/*BARRA DE SELEÇÃO DE ITENS */}

        <div
          id="seletor-de-itens"
          className=" flex justify-between items-center gap-2 sm:justify-center "
        >
          <button
            className="p-1 rounded-full bg-colorSecondary outline-none sm:hidden"
            onClick={() =>
              scrollContainerRef.current
                ? `${scrollContainerRef.current.scrollBy({
                    left: -120,
                    behavior: "smooth",
                  })}`
                : null
            }
          >
            <BiChevronsLeft color="FFF" size={20} />
          </button>

          <div
            className="flex min-wmax sm:w-auto overflow-x-scroll sm:overflow-hidden gap-4 p-2 "
            ref={scrollContainerRef}
          >
            {titulosSpn.map((spn, i) => (
              <button
                key={i}
                className={`gap-1 flex items-center rounded-xl  p-[10px] bg-[#F5F5F5] shadow-lg ${
                  botaoAtivo === i
                    ? "bg-colorSecondary"
                    : "hover:bg-colorSecondary"
                } active:bg-colorPrimary`}
                onClick={() => setBotaoAtivo(i)}
              >
                {icons[i]}
                <span className="medium text-colorText">{spn}</span>
              </button>
            ))}
          </div>
          <button
            className="p-1 rounded-full bg-colorSecondary outline-none sm:hidden"
            onClick={() =>
              scrollContainerRef.current
                ? `${scrollContainerRef.current.scrollBy({
                    left: 120,
                    behavior: "smooth",
                  })}`
                : null
            }
          >
            <BiChevronsRight color="FFF" size={20} />
          </button>
        </div>
        {/* ITENS DO CARDAPIO */}
        <div
          className={` sm:w-auto ${tirar === "removido" ? "sm:pb-20" : null}`}
        >
          {botaoAtivo === 0 ? (
            <Foods
              Food={burgers}
              countFood={countBurguer}
              setCountFood={setCountBurguer}
              RenderizaQuantidade={RenderizaQuantidade}
              adicionar={adicionar}
              subtrair={subtrair}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              inside={inside}
              outside={outside}
              MouseInside={MouseInside}
              tirar={tirar}
            />
          ) : null}
          {botaoAtivo === 1 ? (
            <Foods
              Food={pizzas}
              countFood={countPizzas}
              setCountFood={setCountPizzas}
              RenderizaQuantidade={RenderizaQuantidade}
              adicionar={adicionar}
              subtrair={subtrair}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              inside={inside}
              outside={outside}
              MouseInside={MouseInside}
              tirar={tirar}
            />
          ) : null}
          {botaoAtivo === 2 ? (
            <Foods
              Food={churrasco}
              countFood={countChurrasco}
              setCountFood={setCountChurrasco}
              RenderizaQuantidade={RenderizaQuantidade}
              adicionar={adicionar}
              subtrair={subtrair}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              inside={inside}
              outside={outside}
              MouseInside={MouseInside}
              tirar={tirar}
            />
          ) : null}
          {botaoAtivo === 3 ? (
            <Foods
              Food={steaks}
              countFood={countSteaks}
              setCountFood={setCountSteaks}
              RenderizaQuantidade={RenderizaQuantidade}
              adicionar={adicionar}
              subtrair={subtrair}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              inside={inside}
              outside={outside}
              MouseInside={MouseInside}
              tirar={tirar}
            />
          ) : null}
          {botaoAtivo === 4 ? (
            <Foods
              Food={bebidas}
              countFood={countBebidas}
              setCountFood={setCountbebidas}
              RenderizaQuantidade={RenderizaQuantidade}
              adicionar={adicionar}
              subtrair={subtrair}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              inside={inside}
              outside={outside}
              MouseInside={MouseInside}
              tirar={tirar}
            />
          ) : null}
          {botaoAtivo === 5 ? (
            <Foods
              Food={sobremesa}
              countFood={countSobremesa}
              setCountFood={setCountSobremesa}
              RenderizaQuantidade={RenderizaQuantidade}
              adicionar={adicionar}
              subtrair={subtrair}
              adicionarItemAoCarrinho={adicionarItemAoCarrinho}
              MensagemDeAdicao={MensagemDeAdicao}
              inside={inside}
              outside={outside}
              MouseInside={MouseInside}
              tirar={tirar}
            />
          ) : null}
        </div>
        {/* BOTÃO VER MAIS */}
        <div className="hidden sm:block">
          <div className="flex justify-center p-6 ">
            <button
              className={`bg-[#f5f5f5] p-2 rounded-xl scale-110 hover:shadow-xl hover:bg-colorPrimary hover:text-colorText ${
                tirar === null ? null : "hidden"
              } `}
              onClick={() => setTirar("removido")}
            >
              Ver Mais
            </button>
          </div>
        </div>
      </section>

      {adicionou ? (
        <div className="fixed sm:ml-[85%] ml-[25%] mt-[100px] bg-colorPrimary p-4 rounded-lg fade-out-up w-[200px] flex items-center gap-3 medium">
          Item Adicionado <MdVerified />
        </div>
      ) : null}
    </>
  );
};

export default CardapioComponent;
