import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as ReactScroll from "react-scroll";
import CarContext from "../Context/CarrinhoContext";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Menu } from "feather-icons-react/build/IconComponents";

// eslint-disable-next-line react/prop-types
const HeaderComponent = () => {
  const { carrinho } = useContext(CarContext);
  const navegacao = ["Serviços", "Cardapio", "Depoimentos", "Reservas"];
  const [escondeMenu, setEscondeMenu] = useState("escondido");
  const LinkScroll = ReactScroll.Link;

  return (
    <>
      <section className="sm:fixed w-full bg-colorSecondary z-50">
        <div className="flex justify-center sm:pt-2  sm:h-[70px] sm:flex-row pt-6 ">
          <nav className="flex sm:gap-4 items-center flex-col sm:flex-row gap-8">
            {/* LOGO E MENU MOBILE   */}
            <div className="flex items-center gap-28">
              <img
                src="assets/definitivo.svg"
                width={"160"}
                className="mr-15 ml-[-25px]"
              />
              <div
                className="sm:hidden"
                onClick={() =>
                  escondeMenu === "escondido"
                    ? setEscondeMenu("visivel")
                    : setEscondeMenu("escondido")
                }
              >
                <Menu />
              </div>
            </div>
            {/* ITENS DE NAVEGAÇÃO */}
            <div
              className={`sm:mr-6 py-4 bg-colorSecondary sm:bg-transparent rounded-xl ${
                escondeMenu === "escondido" ? "hidden" : null
              } sm:block`}
            >
              <ul className="flex flex-col justify-center sm:flex-row items-center gap-2 sm:gap-12 list-none px-16">
                {navegacao.map((topico, index) => (
                  <li
                    key={index}
                    className="p-2 text-[#0d0303b4] hover:text-colorDestaque text-[20px] medium"
                  >
                    <LinkScroll
                      className=" cursor-pointer"
                      to={topico}
                      smooth={true}
                      offset={-100}
                      spy={true}
                      activeClass="ativo"
                    >
                      {topico}
                    </LinkScroll>
                  </li>
                ))}
                {/* BOTÃO MEU CARRINHO */}
                <Link
                  to="/meu-carrinho"
                  className=" bg-colorWhite shadow-lg  sm:bg-colorPrimary rounded-xl px-3 py-2 max-w-[220px] max-h-[60px] h-[50px] hover:shadow-xl medium hover:bg-colorDestaque"
                >
                  <div className="flex gap-2.5 items-center  sm:text-colorWhite px-2  ">
                    <p className="mt-1"> Meu carrinho</p>
                    {carrinho.length <= 0 ? (
                      <BsFillBagPlusFill
                        color={"#FFF"}
                        size={25}
                        className="hidden sm:block"
                      />
                    ) : (
                      <span className="relative w-max">
                        <div className=" p-1 rounded-full flex hidden sm:block">
                          <p className=" absolute left-5 bottom-4 text-colorWhite text-[14px] justify-center p-2 bg-[#FF6969] rounded-[200px] w-5 h-5 flex items-center">
                            {carrinho.length}
                          </p>
                          <BsFillBagPlusFill color={"#FFF"} size={25} />
                        </div>
                      </span>
                    )}
                  </div>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
        {/* BOTÃO DE CARRINHO FLUTUANTE */}
        {carrinho.length <= 0 ? null : (
          <Link to={"/meu-carrinho"}>
            <div className="fixed right-8 sm:right-16 bottom-16 bg-colorSecondary rounded-full h-12 w-12 p-6 justify-center flex items-center hover:bg-colorDestaque animate__animated animate__backInRight z-10">
              <div className="relative">
                <div className="absolute bottom-3 left-4 text-[#FFF] p-1 rounded-full bg-[#FF6969]  w-6 h-6 flex justify-center items-center ">
                  {carrinho.length}
                </div>
                <div>
                  <BsFillBagPlusFill size={25} />
                </div>
              </div>
            </div>
          </Link>
        )}
      </section>
    </>
  );
};
export default HeaderComponent;
