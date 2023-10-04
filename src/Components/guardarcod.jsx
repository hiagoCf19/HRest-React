import { FaSearch } from "react-icons/fa"
import 'animate.css';
import FormAd from "./FormAdressComponent";
import { useContext, useRef, useState } from "react";
import AdrsContext from "../../Context/AdressContext";


const AdressInfoComponent = () => {
  const { EnderecoDeEntrega, setEnderecoDeEntrega } = useContext(AdrsContext)
  const [cepFinal, setCepFinal] = useState(0)
  const buscarCEP = (ev) => {
    const value = ev.target.value;
    const cep = value?.replace(/\D/g, '')
    if (cep?.length !== 8) {

      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((respostaDaReq) => respostaDaReq.json())
      .then((objFinal) => {
        setCepFinal(objFinal)
        obterValor()
      })
  }
  const inputNumber = useRef(null)
  const inputComplemento = useRef(null)
  const inputCEP = useRef(null)
  const obterValor = () => {
    const adressNumber = inputNumber.current.value
    const adressComplemento = inputComplemento.current.value
    const adressCEP = inputCEP.current.value
    setEnderecoDeEntrega(
      {
        rua: cepFinal.logradouro || false,
        numero: adressNumber || false,
        bairro: cepFinal.bairro || '',
        complemento: adressComplemento || '',
        cidade: cepFinal.localidade || '',
        UF: cepFinal.uf || '',
        CEP: adressCEP || false,
      }
    )
  }
  return (
    <div className="mx-[200px] h-[400px] animate__animated animate__fadeInRight pt-6 " id='info-endereçoGeral  ' onMouseLeave={obterValor}>
      <label htmlFor="CEP" className=' medium ' onClick={() => console.log(EnderecoDeEntrega)}>CEP:
        <div className='flex gap-2 bg-white text-color21 py-[6px] px-[4px] shadow-xl border-none rounded-xl w-min my-1'>
          <input
            type='text'
            id='txtCEP'
            className='outline-none pl-2 w-[260px] italic'
            onChange={buscarCEP}
            ref={inputCEP}
            autoFocus
            onMouseLeave={obterValor}
            placeholder="Insira seu CEP"
          />
          <button className='bg-colorPrimary p-[6px] rounded-lg shadow-xl' >
            <FaSearch color={'#FFF'} />
          </button>
        </div>
      </label>

      <div className='flex flex-col gap-8 py-2'>
        <div className='flex' >

          <FormAd especificacao={'Endereço:'} value={cepFinal.logradouro || ''} />
          <FormAd especificacao={'Bairro:'} value={cepFinal.bairro || ''} readOnly />
          <div id='numero' className='mr-[50px]' >
            <div className='w-auto flex flex-row' >
              <label
                htmlFor={`txtNumero`}
                className='w-min medium'
              >
                Número:
              </label>
            </div>
            <input type="text" className='bg-white text-color21 py-[10px] px-[15px] shadow-xl border-none rounded-xl  my-1 w-[300px] outline-none  medium italic' onChange={obterValor} ref={inputNumber} placeholder="Insira o número da residência" />
          </div>

        </div>
        <div className='flex ' >
          <FormAd especificacao={'Cidade'} value={cepFinal.localidade || ''} readOnly />
          <div id='complemento' className='mr-[50px]' >
            <div className='w-auto flex flex-row' >
              <label
                htmlFor="txtcomplemento"
                className='w-min medium '
              >
                Complemento:
              </label>
            </div>
            <input type="text" className='bg-white text-color21 py-[10px] px-[15px] shadow-xl border-none rounded-xl  my-1 w-[300px] outline-none  medium italic' onChange={obterValor} ref={inputComplemento} placeholder="Ex: casa, Ap" />
          </div>
          <FormAd especificacao={'UF:'} value={cepFinal.uf || ''} readOnly />
        </div>



      </div>


    </div>




  )
}
export default AdressInfoComponent