import { useContext, useState } from "react"
import { GrFormAdd } from "react-icons/gr"
import { MdClear, MdOutlineRemove } from "react-icons/md"
import CarContext from "../../Context/CarrinhoContext"
import { BsFillBagXFill } from 'react-icons/bs'
const ItemAdicionado = () => {


  const { carrinho, setCarrinho } = useContext(CarContext)
  const [itensExibidos, setItensExibidos] = useState(carrinho)
  const [remove, setRemove] = useState(false)
  const removeItem = (i) => {
    carrinho.splice(i, 1)
    setItensExibidos([...carrinho])
  }

  const MensagemDeRemocao = () => {
    setRemove(true)
    setTimeout(() => {
      setRemove(false)
    }, 1000);
  }
  const novosItensExibidos = [...itensExibidos]
  const novoCarrinho = [...carrinho];

  const AtualizaDados = (i, novaQntd) => {
    const novaQuantidade = novaQntd
    const newPrice = novaQuantidade * novosItensExibidos[i].precoUnitario
    novosItensExibidos[i].quantidade = novaQuantidade
    novosItensExibidos[i].precoTotal = newPrice
    setItensExibidos(novosItensExibidos)
    novoCarrinho[i] = {
      ...novoCarrinho[i],
      precoTotal: novosItensExibidos[i].precoTotal,
      quantidade: novosItensExibidos[i].quantidade,
    };
    setCarrinho(novoCarrinho);
  }



  return (

    <>
      <div className="sm:mx-[200px] w-min-max h-[400px] p-8 sm:p-0">
        {/* SE O CARRINHO ESTIVER VAZIO */}
        {carrinho.length === 0 ?
          <div className="flex justify-center flex-col h-[300px] items-center text-colorTextOut medium text-2xl gap-4">
            <div className="bg-colorPrimary p-3 rounded-full">
              <BsFillBagXFill color="#FFF" />
            </div>
            <span className="flex gap-4 items-center text-lg sm:text-[22px]"> Seu carrinho está vazio </span>
          </div>
          :

          <div className="flex flex-col h-[400px] overflow-y-auto pr-2 scroll min-w-max" id="itenscar">
            {/* ITENS QUANDO O CARRINHOE STÁ CHEIO */}
            {remove ? <div className=" absolute right-[90px] top-[190px] bg-colorRed text-colorWhite p-4 rounded-lg fade-out-up-two"
            >
              Item removido </div> : null}
            {/* ITEM EXIBIDO NO CARRINHO */}
            {novosItensExibidos.map((item, i) => (
              <div
                key={i}
                className="flex justify-center items-center py-3 border-b border-b-colorSeparate last:border-b-transparent w-min-max" id={item.nome}>
                <div>
                  <img src={item.image} className=" sm:w-[100px] rounded-[12px] w-[50px]" />
                </div>

                <div className="flex-1 sm:px-6 px-2 w-[60px]">
                  <p className="text-color21 sm:text-xl text-ellipsis whitespace-nowrap overflow-hidden mb-0 sm:medium">
                    <b>{item.nome}</b>
                  </p>
                  <p className="text-colorPrimary sm:text-2xl mb-0">
                    <b>{`${item.precoUnitario}`}</b>
                  </p>
                </div>
                <div className="flex w-min py-2 ">
                  <button className="rounded-lg h-9 w-9 bg-[#FFF] flex items-center justify-center">
                    <GrFormAdd
                      size={25}
                      id="+"
                      onClick={() => AtualizaDados(i, novosItensExibidos[i].quantidade + 1)} />
                  </button>
                  <p className="w-9 h-9 medium sm:text-xl flex items-center justify-center">

                    {item.quantidade}
                  </p>
                  <button className={` rounded-md justify-center h-9 w-9 bg-[#FFF] flex items-center ${item.quantidade <= 1 ? 'pointer-events-none' : null}`}>
                    <MdOutlineRemove
                      size={25}
                      id="-"
                      onClick={() => AtualizaDados(i, novosItensExibidos[i].quantidade - 1)}
                    />
                  </button>
                  <button className="ml-4 bg-colorRed rounded-[8px] p-2 h-9 w-9 flex justify-center items-center"
                    onClick={() => {
                      removeItem(i)
                      MensagemDeRemocao()

                    }}
                  >
                    <MdClear color="#FFF" />
                  </button>

                </div>
              </div>
            ))}
          </div>

        }
      </div>

    </>



  )

}
export default ItemAdicionado;