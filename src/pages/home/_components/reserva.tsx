import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";

const Reserva = () => {
  const mensagemDeReserva = () => {
    const numeroDoEstabelecimento = "31982033698";
    let mensagem = `Olá, gostaria de reservar uma mesa, quais os dias e horários disponíveis para a semana?`;
    const linkAPIWhats = `https://api.whatsapp.com/send?phone=${numeroDoEstabelecimento}&text=${encodeURIComponent(
      mensagem
    )}`;
    window.location.href = linkAPIWhats;
  };

  return (
    <>
      <Element
        className="h-[70vh] flex sm:justify-center p-8 sm:p-0"
        name="Reservas"
      >
        <div className=" flex rounded-[40px] w-full  sm:items-center ">
          <div className="ml-32 sm:flex-1 justify-center items-center">
            <div className="flex flex-col gap-5 p-10 items-center">
              <Title descricao={"Reserva"} title={"Quer fazer uma reserva ?"} />
              <p className=" text-md text-secondary/80 w-[80%] text-center">
                Mande uma mensagem clicando no botão abaixo. Reserve sua data e
                horário para conhecer nosso estabelecimento de forma simples e
                rápida.
              </p>

              <Button onClick={mensagemDeReserva}>Fazer reserva</Button>
            </div>
          </div>
          {/*   IMAGEM DA RESERVA */}
          <div
            className=" flex-1 bg-cover bg-left  flex w-full h-full "
            style={{ backgroundImage: "url('/assets/reserva.jpg')" }}
          ></div>
        </div>
      </Element>
    </>
  );
};
export default Reserva;
