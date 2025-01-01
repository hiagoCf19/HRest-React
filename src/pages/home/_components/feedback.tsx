import { useState } from "react";
import { Element } from "react-scroll";
import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Title from "@/components/title";

type clientsType = {
  nome: string;
  foto: string;
  feedback: string;
  avaliacao: number;
};
const FeedbackComponent = () => {
  const clients: clientsType[] = [
    {
      nome: "Diego Generio",
      foto: "assets/diego.jpg",
      feedback:
        "Muito bom, recomendo demais! Comida muito bem feita pelo chefe, atendimento dentro dos parâmetros e boa comunicação com o cliente.",
      avaliacao: 4,
    },
    {
      nome: "Ana Generica",
      foto: "assets/ana.jpg",
      feedback:
        "Um jantar perfeito do começo ao fim.Comida, experiência, serviço... foi tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em uma viagem.",
      avaliacao: 5,
    },
    {
      nome: "Joao Generico",
      foto: "assets/joao.jpg",
      feedback:
        "A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.",
      avaliacao: 5,
    },
  ];
  const [botaoAtivo, setBotaoAtivo] = useState(0);
  const [txtExibido, setTxtExibido] = useState(0);
  const aoClicar = (i: number) => {
    setTxtExibido(i);
  };

  return (
    <Element
      name="Depoimentos"
      className=" w-full h-[80vh] bg-cover bg-center items-center flex"
      style={{ backgroundImage: "url('/assets/bg-rating.jpg')" }}
    >
      <div className=" sm:mx-[200px] sm:mt-12 py-12 flex-1">
        <div id="pai" className=" flex">
          <div className="flex-1"></div>
          {/* O QUE DIZEM SOBRE NÓS */}
          <div className=" w-1/2 flex flex-col items-center" id="filho2">
            <Title title="O que dizem sobre nós?" descricao="Feedback" />

            {/* AVALIAÇÕES DOS CLIENTES */}
            <div className="overflow-hidde w-[70%]">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className={`${txtExibido === i ? "block" : "hidden"}`}
                >
                  <div
                    className="my-6 flex gap-3 items-center"
                    id="container-dos-dados"
                  >
                    <div
                      className={`bg-cover w-[65px] h-[65px] rounded-full bg-no-repeat bg-center`}
                      style={{ backgroundImage: `url(${client.foto})` }}
                    ></div>
                    <div>
                      <p
                        className="text-color21 text-[22px] mb-1"
                        id="diegoname"
                      >
                        <b>{client.nome}</b>
                      </p>
                      <div className="flex items-center gap-2">
                        {[...Array(client.avaliacao)].map((_, j) => (
                          <IoIosStar key={j} size={16} color="#FFD700" /> // Cor dourada para a estrela
                        ))}
                        <span>{client.avaliacao}.0</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="txt-dep">
                      <span className="py-6 text-center text-[18px]">
                        {client.feedback}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              {/* ALTERNAR COMENTÁRIO */}

              <div className="space-x-4 my-4">
                {clients.map((_, i) => (
                  <Button
                    size={"icon"}
                    key={i}
                    className={`px-4 py-2 ${
                      txtExibido === i
                        ? "bg-primary text-white"
                        : "bg-gray-300 text-primary"
                    }`}
                    onClick={() => setTxtExibido(i)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default FeedbackComponent;
