/* eslint-disable react/prop-types */
import { AiFillShopping } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { MdOutlineRemove } from "react-icons/md";
import "animate.css";

// eslint-disable-next-line react/prop-types
const Foods = ({
  Food,
  countFood,
  setCountFood,
  inside,
  outside,
  RenderizaQuantidade,
  adicionar,
  subtrair,
  adicionarItemAoCarrinho,
  MensagemDeAdicao,
  MouseInside,
  tirar,
}) => {
  return (
    <div
      className={`flex flex-col justify-center flex-wrap sm:flex-row box-border mt-12 sm:max-h-[680px] gap-6 scale-[1.0] sm:mx-[200px] sm:pb-2 animate__animated animate__fadeIn notranslate ${
        tirar === null ? "overflow-hidden" : null
      } `}
    >
      {Food.map((burg, i) => (
        <div
          className={`sm:w-[255px] w-min-max sm:h-[320px] h-[100px] bg-[#F5F5F5] box-border flex sm:flex-col items-center sm:justify-center rounded-[12px] gap-[10px] hover:bg-colorSecondary shadow-xl`}
          key={i}
          onMouseEnter={() => inside(i)}
          onMouseLeave={outside}
        >
          <img
            src={burg.img}
            alt={burg.name}
            className=" sm:w-[220px] sm:h-[200px] w-[100px] h-[90px] rounded-[12px] flex p-1"
          />
          {MouseInside === i ? (
            <div className="sm:flex sm:justify-center flex-col items-center medium text-color21 text-[22px]">
              <h2 className="medium pb-[6px] text-color21 text-xl">
                <b>R${burg.price}</b>
              </h2>
              <div className="flex gap-4 items-center">
                <div className="flex  items-center">
                  <div className=" flex items-center gap-4 ">
                    <button
                      onClick={() => adicionar(countFood, i, setCountFood)}
                    >
                      <GrFormAdd
                        className="bg-colorWhite rounded-md"
                        size={30}
                        id="+"
                      />
                    </button>

                    {RenderizaQuantidade(countFood, i)}

                    <button
                      onClick={() => subtrair(countFood, i, setCountFood)}
                      className={`${
                        RenderizaQuantidade(countFood, i) <= 0
                          ? "pointer-events-none"
                          : null
                      }`}
                    >
                      <MdOutlineRemove
                        className={`bg-colorWhite rounded-md`}
                        size={30}
                        id="-"
                      />
                    </button>
                  </div>

                  <button
                    className="ml-4"
                    onClick={() => {
                      const quantidade = RenderizaQuantidade(countFood, i);
                      const nome = burg.name;
                      const precoUnitario = burg.price;
                      const image = burg.img;
                      adicionarItemAoCarrinho(
                        quantidade,
                        nome,
                        precoUnitario,
                        image
                      );
                      MensagemDeAdicao();
                    }}
                  >
                    <AiFillShopping
                      size={32}
                      color="#FFF"
                      className="bg-color21 rounded-lg p-1 shadow-xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="sm:flex justify-center flex-col items-center medium text-color21 text-[22px] notranslate">
              <h2 className="medium sm:text-center">{burg.name} </h2>
              <h3 className=" text-colorPrimary">R${burg.price}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Foods;
