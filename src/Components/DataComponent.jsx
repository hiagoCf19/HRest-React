import { useContext, useEffect, useState } from "react"
import CarContext from "../Context/CarrinhoContext"
import { AiOutlineUserAdd } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { BsKey, BsQuestionCircleFill } from "react-icons/bs"

const Open = () => {
  const { userData, setUserData } = useContext(CarContext);
  const [nome, setNome] = useState('')
  const [key, setKey] = useState('')
  const [tentativa, setTentativa] = useState(0)
  const [mostraDescricao, setMostraDescricao] = useState(false)
  useEffect(() => {
    setUserData({
      userName: nome,
      userKey: key
    })
  }, [nome, key]);
  return (
    <>
      <section className="bg-[#e1dada7c] w-full h-full fixed flex justify-center items-center " >
        <div className=" bg-colorWhite p-8 sm:p-0 min-h-[80%] shadow-2xl rounded-xl flex overflow-x-hidden ">


          {/* PARTE DOS DADOS */}
          <div
            className="flex-1 flex justify-center sm:mx-[100px] my-32 w-max">
            <div
              className="flex gap-4 flex-col sm:w-[500px] w-[300px] items-center">
              <div className="p-6 flex flex-col gap-2 items-center">
                <h1 className="flex justify-center medium text-[28px] font-semibold text-colorPrimary"
                  onClick={() => console.log(userData.userName)}
                >Seja bem vindo!
                </h1>
                <span className="text-colorTextOut"> Preencha seus dados</span>
              </div>

              <label
                htmlFor="Name"
                className="sm:h-400px w-min-max flex flex-col"
              >

                <div className="p-3 bg-[#e1dada7c] flex sm:items-center gap-2 sm:w-[400px] w-[300px] mx-8 rounded-md">
                  <p>
                    <AiOutlineUserAdd color={'#938d8d'} size={25} />
                  </p>

                  <input
                    className=" italic bg-transparent outline-none w-[230px] "
                    type="text"
                    name="txtname"
                    id="name"
                    placeholder="Insira seu nome"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}

                  />
                </div>
                {nome === '' && tentativa >= 1 ? <span className=" text-colorRed ml-8 sm:ml-9">Insira um nome para continuar</span> : null}


              </label>

              <label
                htmlFor="Name"
                className="sm:h-400px w-min-max flex flex-col">
                <div className="p-3 bg-[#e1dada7c] flex  gap-2 sm:w-[400px] w-[300px] mx-8 rounded-md">
                  <BsKey color={'#938d8d'} size={25} />
                  <input
                    className=" italic bg-transparent outline-none mr-4  w-[200px] sm:w-[300px]"
                    type="text"
                    name="txtctt"
                    id="ctt"
                    placeholder="Ex: 1234"
                    onChange={(e) => setKey(e.target.value)}
                    value={key}


                  />

                  <div className="relative flex items-center "
                    onMouseEnter={() => setMostraDescricao(true)}
                    onMouseLeave={() => setMostraDescricao(false)}
                  >
                    <BsQuestionCircleFill color={'#938d8d'}

                    />
                    {mostraDescricao === true ?
                      <div>
                        <span className="absolute sm:bg-[#e1dada7c] bg-colorPrimary shadow-xl sm:bottom-4 right-1 bottom-8 h-[80px] w-[180px] rounded-md text-[13px]  flex justify-center items-center py-4 px-2 medium text-color21">Essa chave deve ser fornecida ao entregador para coletar seu produto.
                        </span>
                      </div> : null}

                  </div>





                </div>
                {key === '' && tentativa >= 1 ? <span className=" text-colorRed ml-8 sm:mx-8 py-2">Insira uma chave para continuar</span> : null}

              </label>

              <Link to={userData.userName === '' || userData.userKey === '' ? '/' : '/home'}>
                <div className="bg-colorPrimary p-3 w-[150px] rounded-full flex justify-center items-center medium text-colorWhite font-semibold"
                  onClick={() => {
                    setUserData({
                      userName: nome,
                      userKey: key
                    })
                    setTentativa(tentativa + 1)

                  }}
                >
                  <button className="w-full h-full">Entrar</button>
                </div>
              </Link>


            </div >
          </div >
        </div >
      </section >
    </>
  )
}
export default Open