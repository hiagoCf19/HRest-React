import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';




const FeedbackComponent = () => {
  const st = <AiFillStar color='ffbf00' />

  const clientes = [
    {
      nome: 'Diego Generio',
      foto: 'src/assets/diego.jpg',
      feedback: 'Muito bom, recomendo demais! Comida muito bem feita pelo chefe, atendimento dentro dos parâmetros e boa comunicação com o cliente.',
    },
    {
      nome: 'Ana Generica',
      foto: 'src/assets/ana.jpg',
      feedback: 'Um jantar perfeito do começo ao fim.Comida, experiência, serviço... foi tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em uma viagem.'

    },
    {
      nome: 'Joao Generico',
      foto: 'src/assets/joao.jpg',
      feedback: 'A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.'
    }

  ]
  const [botaoAtivo, setBotaoAtivo] = useState(0)
  const [txtExibido, setTxtexibido] = useState(0)
  const aoClicar = (clientes) => {
    setTxtexibido(clientes)
  }
  const gerarNotas = (numero, nome) => {
    for (let i = 0; i < numero; i++) {
      nome.push(st);

    }
  }
  var diegoNota = []
  var anaNota = []
  var joaoNota = []
  gerarNotas(5, joaoNota)
  gerarNotas(4, anaNota)
  gerarNotas(5, diegoNota)


  const avaliacao = [
    joaoNota,
    diegoNota,
    anaNota
  ]


  return (
    <>
      <section id='Depoimentos' className='p-8 sm:p-0'>

        <div className=" sm:mx-[200px] sm:mt-12 py-12">
          <div className="flex gap-2" id='pai'>
            {/* IMAGEM DA PIZZA */}
            <div className="sm:flex-1 relative p-[10px] hidden sm:block" id='filho1'>


              <img src="src/assets/pizzaBnr.svg" width={570} />


            </div>
            {/* O QUE DIZEM SOBRE NÓS */}
            <div className="flex-1 p-[10px]  sm:w-auto w-3" id='filho2'>
              <b className="text-colorPrimary  text-base uppercase tracking-[5px] flex justify-center ">Feedback</b>
              <h1 className="sm:text-[33px] text-[30px] text-center">
                <b className="medium"> O que dizem sobre nós?</b>
              </h1>
              {/* AVALIAÇÕES DOS CLIENTES */}
              <div className='overflow-hidde sm:h-[220px] sm:w-[450px] w-min-max h-[240px]'>
                {clientes.map((clt, i) => (
                  <div
                    key={i}
                    className={` ${txtExibido === i ? 'block' : 'hidden'}`}
                  >
                    <div className='my-6 flex gap-3 items-center' id='container-dos-dados'>
                      <div

                        className={`bg-cover w-[65px] h-[65px] rounded-full bg-no-repeat bg-center`}
                        style={{ backgroundImage: `url(${clt.foto})` }}

                      ></div>
                      <div>
                        <p className='text-color21 text-[22px] mb-1' id='diegoname'>
                          <b>{clt.nome}</b>
                        </p>
                        <div
                          className='flex items-center gap-2'
                        >
                          <div className='flex'>{avaliacao[i]}</div>

                          <span >{avaliacao[i].length}.0</span>
                        </div>
                      </div>
                    </div>
                    <div >
                      <p
                        className='txt-dep'
                      >
                        <span className='py-6 text-center text-[18px]'>{clt.feedback}</span>
                      </p>
                    </div>
                  </div>

                ))}

              </div>
              {/* ALTERNAR COMENTÁRIO */}
              <div className='flex gap-3'>
                {clientes.map((nd, i) => (
                  <button
                    key={i}
                    className={`py-2 px-4 bg-[#f5f5f5] shadow-xl rounded-xl flex items-center ${botaoAtivo === i ? 'bg-colorSecondary' : 'hover:bg-colorSecondary'} active:bg-colorPrimary`}
                    onClick={() => {
                      aoClicar(i);
                      setBotaoAtivo(i);
                    }}
                  >
                    {i + 1}
                  </button>
                ))}

              </div>
            </div>
          </div>
        </div >
      </section>


    </>
  )
}
export default FeedbackComponent