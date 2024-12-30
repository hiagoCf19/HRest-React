import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBagPlusFill } from "react-icons/bs";
import { useCart } from "@/hooks/useCart";
import HeaderNav from "@/components/header-navigation";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line react/prop-types
const Header = () => {
  const { carrinho } = useCart();

  const sections = [
    {
      to: "Serviços",
      label: "Serviços",
    },
    {
      to: "cardapio",
      label: "Cardápio",
    },
    {
      to: "depoimentos",
      label: "Depoimentos",
    },
    {
      to: "reservas",
      label: "Reservas",
    },
  ];
  const [escondeMenu, setEscondeMenu] = useState("escondido");

  return (
    <header className=" absolute h-20 items-center   z-30 flex w-[99%]  px-32 py-4 justify-between">
      <div className="flex-1 flex space-x-4 ">
        {sections.map((section) => (
          <HeaderNav to={section.to} label={section.label} />
        ))}
      </div>
      <div className="flex-1 flex  justify-center">
        <img src="assets/logo.png" width={"160"} />
      </div>
      <div className="flex-1 flex justify-end">
        <Link to="/meu-carrinho">
          <Button size={"lg"}>
            <p className="mt-1"> Meu carrinho</p>
            {carrinho?.length <= 0 ? (
              <BsFillBagPlusFill
                color={"#FFF"}
                size={25}
                className="hidden sm:block"
              />
            ) : (
              <span className="relative w-max">
                <div className=" p-1 rounded-full flex sm:block">
                  <p className=" absolute left-5 bottom-4 text-colorWhite text-[14px] justify-center p-2 bg-[#FF6969] rounded-[200px] w-5 h-5 flex items-center">
                    {carrinho?.length}aa
                  </p>
                  <BsFillBagPlusFill color={"#FFF"} size={25} />
                </div>
              </span>
            )}
          </Button>
        </Link>
      </div>

      {carrinho?.length <= 0 ? null : (
        <Link to={"/meu-carrinho"}>
          <div className="fixed right-8 sm:right-16 bottom-16 bg-colorSecondary rounded-full h-12 w-12 p-6 justify-center flex items-center hover:bg-colorDestaque animate__animated animate__backInRight z-10">
            <div className="relative">
              <div className="absolute bottom-3 left-4 text-[#FFF] p-1 rounded-full bg-[#FF6969]  w-6 h-6 flex justify-center items-center ">
                {carrinho?.length}
              </div>
              <div>
                <BsFillBagPlusFill size={25} />
              </div>
            </div>
          </div>
        </Link>
      )}
    </header>
  );
};
export default Header;
