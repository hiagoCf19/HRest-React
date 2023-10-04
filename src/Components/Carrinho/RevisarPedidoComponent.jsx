
import { useContext } from "react"
import { FaMapMarkedAlt } from "react-icons/fa"
import CarContext from "../../Context/CarrinhoContext"
import 'animate.css'
import AdrsContext from "../../Context/AdressContext"
const RevisarComponent = () => {
  const { carrinho } = useContext(CarContext)
  const { EnderecoDeEntrega } = useContext(AdrsContext)


  return (
    <>
      <div className="sm:mx-[200px] h-[400px] animate__animated animate__fadeInRight px-4 sm:p-0">
        <div className='h-[400px] py-3 flex flex-col'>
          <div id='itens-do-pedido'
            className=' h-[250px] my-2 overflow-y-scroll scroll'>
            <h1 className='medium text-[20px]'> {`Seu pedido`} </h1>
            {carrinho.map((item, i) => (
              <div key={i}
                className='flex py-4 px-2 items-center border-b-[1px] last:border-none border-colorSeparate'>
                <div className='flex gap-4 w-full justify-start'>
                  <img src={item.image} alt="burg"
                    className='w-[60px] h-[60px] rounded-lg'
                  />
                  <div className='flex flex-col text-[18px] medium'>
                    <span>{item.nome}</span>
                    <span className='text-colorPrimary'>{`${item.precoUnitario}`} </span>
                  </div>
                </div>
                <span className='flex justify-end text-[20px] medium'>{`x${item.quantidade}`}</span>
              </div>
            ))}

          </div>
          <div id='Local-da-entrega'
            className='h-[100px] my-2'>
            <h1 className='medium text-[20px]'> Local da entrega: </h1>
            <div className='flex items-center gap-6 mt-3'>
              <div className='bg-colorSecondary w-[50px] h-[50px] mt-2 rounded-lg flex justify-center items-center'>
                <FaMapMarkedAlt size={30} />
              </div>
              {EnderecoDeEntrega.length <= 0 ?
                <div>
                  <p className='text-[18px] medium'>Insira um endereço de entrega</p>

                </div>
                :
                <div>
                  <p className='text-[18px] medium'>{EnderecoDeEntrega.rua}, {EnderecoDeEntrega.bairro}, {EnderecoDeEntrega.numero}, {EnderecoDeEntrega.complemento}</p>
                  <span className='text-[16px]'>{EnderecoDeEntrega.cidade}, {EnderecoDeEntrega.UF}/{EnderecoDeEntrega.CEP}</span>
                </div>}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RevisarComponent