import { AiOutlineUserAdd } from "react-icons/ai";

import { useEffect, useState } from "react";
import { useUser } from "../../../hooks/useUserData";

const FirstStep = () => {
  const { setUserData } = useUser();

  const [nome, setNome] = useState("");
  const [key, setKey] = useState("");
  const [tentativa, setTentativa] = useState(0);
  const [mostraDescricao, setMostraDescricao] = useState(false);
  useEffect(() => {
    setUserData({
      userName: nome,
      userKey: key,
    });
  }, [nome, key]);
  return (
    <section className="bg-[#e1dada7c] h-screen flex justify-center items-center ">
      <div className=" bg-colorWhite h-[50%] shadow-2xl rounded-xl flex overflow-x-hidden w-[30%] p-8 ">
        {/* PARTE DOS DADOS */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-4 flex-col  items-center">
            <div className="p-6 flex flex-col gap-2 items-center">
              <h1 className="flex justify-center medium text-[28px] font-semibold text-colorPrimary">
                Seja bem vindo!
              </h1>
            </div>

            <label
              htmlFor="Name"
              className="sm:h-400px w-min-max flex flex-col"
            >
              <div className="p-3 bg-[#e1dada7c] flex sm:items-center gap-2 sm:w-[400px] w-[300px] mx-8 rounded-md">
                <p>
                  <AiOutlineUserAdd color={"#938d8d"} size={25} />
                </p>

                <input
                  className=" italic bg-transparent outline-none w-[200px] "
                  type="text"
                  name="txtname"
                  id="name"
                  placeholder="Insira seu nome"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                />
              </div>
              {nome === "" && tentativa >= 1 ? (
                <span className=" text-colorRed ml-8 sm:ml-9">
                  Insira um nome para continuar
                </span>
              ) : null}
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstStep;
