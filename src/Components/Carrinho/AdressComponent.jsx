import { FaSearch } from "react-icons/fa"
import 'animate.css';
import FormAd from "./FormAdressComponent";
import { useContext, useRef, useState } from "react";
import AdrsContext from "../../Context/AdressContext";


const AdressInfoComponent = () => {
  const { EnderecoDeEntrega, setEnderecoDeEntrega } = useContext(AdrsContext);
  const [cepFinal, setCepFinal] = useState(0);
  const [adressNumber, setAdressNumber] = useState('');
  const [adressComplemento, setAdressComplemento] = useState('');
  const [adressRua, setAdressRua] = useState('');
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
        setAdressRua(objFinal.logradouro)
        obterValor()
      })

  }

  const inputCEP = useRef(null)
  const obterValor = () => {
    const adressCEP = inputCEP.current.value

    setEnderecoDeEntrega(
      {
        rua: adressRua,
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
    <div className="sm:mx-[200px] h-[400px] animate__animated animate__fadeInRight pt-6 overflow-x-hidden px-8 " onMouseLeave={obterValor}>
      <label htmlFor="CEP" className=' medium '
        onClick={() => console.log(EnderecoDeEntrega)}
      >CEP:
        <div className='flex gap-2 bg-white text-color21 py-[6px] px-[4px] shadow-xl border-none rounded-xl w-min my-1 '>
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

      <div className='flex flex-col items-center sm:gap-8 sm:py-2 '>
        <div className='sm:flex' >

          <FormAd especificacao={'Endereço:'} value={adressRua} readOnly />

          <div id='numero' className='mr-[50px]' >
            <div className='w-auto flex flex-row' >
              <label
                htmlFor={`txtNumero`}
                className='w-min medium'
              >
                Número:
              </label>
            </div>
            <input type="text"
              className='bg-white text-color21 py-[10px] px-[15px] shadow-xl border-none rounded-xl  my-1 w-[300px] outline-none  medium italic'
              onChange={(e) => {
                setAdressNumber(e.target.value)

              }}
              onMouseOut={obterValor}
              value={adressNumber}
              onMouseLeave={obterValor}
              placeholder="Insira o número da residência" />

          </div>
          <div id='complemento' className='mr-[50px]' >
            <div className='w-auto flex flex-row' >
              <label
                htmlFor="txtcomplemento"
                className='w-min medium '

              >
                Complemento:
              </label>
            </div>
            <input
              type="text"
              className='bg-white text-color21 py-[10px] px-[15px] shadow-xl border-none rounded-xl  my-1 w-[300px] outline-none  medium italic'
              onChange={(e) => {
                setAdressComplemento(e.target.value)
              }}
              value={adressComplemento}
              placeholder="Ex: casa, Ap" />
          </div>
        </div>
        <div className='sm:flex ' >
          <FormAd especificacao={'Bairro:'} value={cepFinal.bairro || ''} readOnly />
          <FormAd especificacao={'Cidade'} value={cepFinal.localidade || ''} readOnly />

          <FormAd especificacao={'UF:'} value={cepFinal.uf || ''} readOnly />
        </div>



      </div>


    </div>




  )
}
export default AdressInfoComponent