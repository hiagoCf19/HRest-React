import { useContext, useState } from "react"
import { PiMotorcycleFill } from "react-icons/pi"
import { Link } from "react-router-dom"
import ItemAdicionado from "./ItemAdicionado"
import AdressInfoComponent from "./AdressComponent"
import RevisarComponent from "./RevisarPedidoComponent"
import CarContext from "../../Context/CarrinhoContext"
import 'animate.css';
import AdrsContext from "../../Context/AdressContext"

const CarrinhoComponent = () => {
  const { userData } = useContext(CarContext)
  const { EnderecoDeEntrega, setEnderecoDeEntrega } = useContext(AdrsContext)

  const etapas = ['Seu Carrinho:', 'Endereço de entrega', 'Revisar pedido']
  const [currentPg, setCurrentPg] = useState(0)
  const { carrinho } = useContext(CarContext)
  const precoFinal = []
  carrinho.forEach((item) => {
    if (item.hasOwnProperty('precoTotal')) {
      precoFinal.push(item.precoTotal)
    }
  })
  const somaFinal = precoFinal.reduce((total, valor) => total + valor, 0);
  const taxaDeEntrega = 5
  const total = somaFinal + taxaDeEntrega
  const carrinhoVazio = carrinho.length === 0
  const [ExibirErroNoCarrinhoVazio, setExibirErroNoCarrinhoVazio] = useState(false)
  const [ExibirErroNoCep, setExibirErroNoCep] = useState(false)
  const [ExibirErroNoNumero, setExibirErroNoNumero] = useState(false)
  if (ExibirErroNoCarrinhoVazio || ExibirErroNoCep || ExibirErroNoNumero) {
    setTimeout(() => {
      setExibirErroNoCarrinhoVazio(false)
      setExibirErroNoCep(false)
      setExibirErroNoNumero(false)
    }, 2000);
  }

  const data = new Date
  const horas = data.getHours()
  const condicao =
    horas >= 6 && horas < 12 ? 'Bom dia' :
      horas >= 12 && horas < 18 ? 'Boa tarde' :
        horas >= 18 && horas < 23 ? 'Boa Noite' :
          'Boa Madrugada';


  const MensagemNoWpp = () => {

    const numeroDoEstabelecimento = '31982033698'

    const clienteIdentificado = `Pedido de ${userData.userName}:`
    const keyIdentificada = `Minha chave de entrega é ${userData.userKey}`
    const complementoIdentificado = `Complemento: ${EnderecoDeEntrega.complemento}`
    let mensagem = `${userData.length <= 0 ? '' : clienteIdentificado
      } \nOlá, ${condicao} gostaria de fazer o seguinte pedido:
    `

    for (let i = 0; i < carrinho.length; i++) {
      const item = carrinho[i]

      mensagem += ` \n${item.quantidade}x ${item.nome}\n `
    }

    mensagem += `\nendereço: \n${EnderecoDeEntrega.rua}\nNúmero: ${EnderecoDeEntrega.numero}\n${EnderecoDeEntrega.complemento === '' ? '' : complementoIdentificado}\nBairro: ${EnderecoDeEntrega.bairro}\n${userData.length <= 0 ? '' : keyIdentificada}
    `
    const linkAPIWhats = `https://api.whatsapp.com/send?phone=${numeroDoEstabelecimento}&text=${encodeURIComponent(mensagem)}`
    window.location.href = linkAPIWhats;
  }

  return (
    <div id="shoppingBAG" className="animate__animated animate__fadeIn ">

      <div className={`fixed top-0 bottom-0 left-0 right-0 sm:p-[50px] bg-colorBackground z-[9990] overflow-x-hidden overflow-y-auto overscroll-y-auto flex flex-col`}
        id='carrinho'>
        {/* HEADER DO CARRINHO */}
        <div className=" sm:pb-5" id='Headercar'>
          <div className="sm:mx-[200px] mx-12 my-6">

            <Link className=" medium float-right bg-colorWhite shadow-xl p-2 rounded-xl hover:bg-colorPrimary"
              to="/home"
            >
              Fechar
            </Link>

            <div className="flex pb-5" id='1-2-3'>
              {etapas.map((etapa, i) => (
                <div key={i}>

                  <div className={`w-9 h-9 bg-colorWhite rounded-[50px] shadow-xl text-color21 flex justify-center items-center mr-[20px] ${currentPg === i ? 'primaria' : null} `}>
                    <a className="medium">{i + 1}</a>
                  </div >

                </div >
              ))}

            </div >
          </div >
        </div >
        {/* SEU CARRINHO TITLE */}
        {currentPg === 0 ? <div id="Seu-Carrinho">
          <div className="sm:mx-[200px] mx-12 ">
            <p className="text-[20px] text-color21">
              <b id="tituloEtapa">{etapas[0]}</b>
            </p>
          </div>
          {/* MENSAGEM DE ERRO QUANDO CARRINHO ESTÁ VAZIO */}
          {ExibirErroNoCarrinhoVazio ? <div className="absolute sm:right-[41%] right-[15%] animate__animated animate__headShake bg-colorRed p-4 w-auto flex justify-center rounded-lg medium text-colorWhite"> Adicione itens ao seu carrinho </div> : null}
          <ItemAdicionado />
        </div>
          : null}
        {/* ENDEREÇO DE ENTREGA */}
        {currentPg === 1 ?
          <>
            <div id="title-aba" className="sm:mx-[200px] mx-10">
              <p className="sm:text-[20px] text-color21">
                <b id="tituloEtapa">{etapas[1]}</b>
              </p>
            </div>
            <AdressInfoComponent />
            {ExibirErroNoCep ? < div className="absolute top-28 right-16 bg-red-400 p-2 rounded-xl text-colorWhite medium text-[20px] animate__animated animate__headShake"> Insira um CEP válido </div> : null}
            {ExibirErroNoNumero ? <div className="absolute top-28 right-28 bg-red-400 p-2 rounded-xl text-colorWhite medium text-[20px] animate__animated animate__headShake"> Insira o número da residência </div> : null}
          </> : null}
        { /* REVISÃO DO PEDIDO */}
        {currentPg === 2 ?
          <>
            <div id="Endereco-entre" className="sm:mx-[200px] mx-12">
              <p className="text-[20px] text-color21">
                <b>{etapas[2]}</b>
              </p>
            </div>
            <RevisarComponent />
          </> : null}
        {/* FOOTER DO CARRINHO */}

        <div className="sm:mx-[200px] flex flex-col w-min-max px-4 sm:px-0">
          <div className="  mb-4 pt-5 border-t border-colorSeparate">
            <div id='subtotal' className="flex justify-end">
              <p className="mb-0 text-[18px] medium" id="txtitens">
                <span>Subtotal:</span>
                <span id="subtotal">{` R$ ${somaFinal.toFixed(2)}`}</span>
              </p>
            </div>
            <div id='entrega' className="flex justify-end">
              <p className="mb-0 flex items-center text-colorSeparate medium text-[18px]" id="txt-entrega">
                <PiMotorcycleFill className="mr-2" size={25} />
                <span>Entrega:&nbsp;&nbsp;</span>
                <span id="entrega">{`R$ ${taxaDeEntrega.toFixed(2)}`}</span>
              </p>
            </div>
            <div id="total" className="flex justify-end">
              <p className="mb-2 text-color21 text-xl mt-3 medium" id="txttotal">
                <span >Total: </span>
                <span id="total" className="text-colorPrimary">{`R$${total.toFixed(2)}`}</span>
              </p>

            </div>


            {
              currentPg === 0 ? <button
                className={`float-right bg-colorPrimary p-3 rounded-xl medium text-[18px] text-colorWhite `}
                id="1"
                onClick={() => {
                  setEnderecoDeEntrega([])
                  carrinhoVazio ? setExibirErroNoCarrinhoVazio(true) : setCurrentPg(currentPg + 1)



                }
                } >

                Continuar

              </button> : currentPg === 1 ? (<button className=" float-right bg-colorPrimary p-3 rounded-xl medium text-[18px] text-colorWhite " id="2" onClick={() => {
                EnderecoDeEntrega.length <= 0 ? setExibirErroNoCep(true) : EnderecoDeEntrega.numero === false ? setExibirErroNoNumero(true) : setCurrentPg(currentPg + 1)


              }
              }>
                Revisar pedido
              </button>) : currentPg === 2 ?
                (<button
                  className=" float-right bg-colorPrimary p-3 rounded-xl medium text-[18px] text-colorWhite"
                  id="3"
                  onClick={MensagemNoWpp}

                > Enviar pedido
                </button>) : null}







            <button
              className={`mr-6 float-right bg-colorWhite p-3 rounded-xl medium text-[18px] text-color21 shadow-xl hover:bg-colorPrimary ${currentPg === 0 ? 'hidden' : null}`}
              id="btn-back"
              onClick={() => {
                currentPg > 0 ? setCurrentPg(currentPg - 1) : null
                currentPg === 2 ? setEnderecoDeEntrega('') : null
              }
              }
            > voltar

            </button>

          </div>
        </div>

      </div >

    </div >

  )
}
export default CarrinhoComponent