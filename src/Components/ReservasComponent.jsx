import Title from "./Title"

const ReservasComponent = () => {
  const mensagemDeReserva = () => {
    const numeroDoEstabelecimento = '31982033698'
    let mensagem = `Olá, gostaria de reservar uma mesa, quais os dias e horários disponíveis para a semana?`
    const linkAPIWhats = `https://api.whatsapp.com/send?phone=${numeroDoEstabelecimento}&text=${encodeURIComponent(mensagem)}`
    window.location.href = linkAPIWhats;
  }

  return (
    <>
      <section className="flex sm:justify-center p-8 sm:p-0" id="Reservas">
        <div className=" flex bg-colorSecondary rounded-[40px] sm:w-[1100px] sm:h-[500px] sm:items-center">
          <div className=" sm:flex-1 justify-center items-center">
            <div className="flex flex-col gap-5 p-10 items-center">
              <Title descricao={'Cardápio'} title={'Quer fazer uma reserva ?'} />
              <p className=" text-md text-color21">
                Mande uma mensagem clicando no botão abaixo. Reserve sua data e horário para conhecer nosso estabelecimento de forma simples
                e rápida.
              </p>

              <button
                onClick={mensagemDeReserva}
                className="w-[180px] p-3 rounded-2xl bg-colorWhite medium text-colorDestaque hover:shadow-2xl hover:bg-colorWhite hover:text-colorPrimary justify-start">Fazer reserva</button>


            </div>
          </div>
          {/*   IMAGEM DA RESERVA */}
          <div className="parts justify-center items-center hidden sm:block">
            <img src="public/assets/icone-reserva.svg" width={450} className="z-[1]" />
          </div>
        </div>
      </section>
    </>
  )

}
export default ReservasComponent