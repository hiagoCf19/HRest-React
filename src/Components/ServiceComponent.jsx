
const ServiceComponent = () => {
  return (
    <>
      <section id="Serviços" className="p-8 sm:p-0" >
        {/*TITULO DA SECTION */}
        <div className="flex justify-center mb-10">
          <span >
            <b className="flex justify-center text-colorPrimary  text-base uppercase tracking-[5px]">Serviços</b>
            <h1 className=" text-color21 sm:text-[40px] text-[30px] mb-8 mt-1 flex text-center" >
              <b> Como são nossos serviços?</b>
            </h1>
          </span>
        </div>
        {/* FÁCIL DE PEDIR, ENTREGA RAPIDA E MELHOR QUALIDADE */}
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col sm:flex-row">
            <div className="parts w-[350px] px-5 flex flex-col justify-center">
              <div className=" h-[150px] mx-auto mb-[15px] flex justify-center items-center">
                <img
                  src="public/assets/icone-pedido.svg"
                  alt="pedido"
                  width={150}
                />
              </div>
              <div>
                <p>
                  <b className="flex justify-center pb-[22px] text-color21 medium">
                    Fácil de pedir
                  </b>
                </p>
                <span className="text-colorTextOut text-[15px] pt-0 px-6 pb-3 flex text-center">
                  Você só recisa de alguns passos para pedir sua comida.
                </span>
              </div>

            </div>
            <div className="parts">
              <div className="parts w-[350px] px-5 flex flex-col justify-center">
                <div className=" h-[150px] mx-auto mb-[15px] flex justify-center items-center">
                  <img
                    src="public/assets/icone-delivery.svg" alt="pedido"
                    width={250}
                  />
                </div>
                <div>
                  <p>
                    <b className="flex justify-center pb-[22px] text-color21 medium">
                      Entrega rápida
                    </b>
                  </p>
                  <span className="text-colorTextOut text-[15px] pt-0 px-6 pb-3 flex text-center">
                    Nossos entrega é sempre pontual, rápida e segura.
                  </span>
                </div>

              </div>
            </div>
            <div className="parts">
              <div className="parts w-[350px] px-5 flex flex-col justify-center">
                <div className=" h-[150px] mx-auto mb-[15px] flex justify-center items-center">
                  <img
                    src="public/assets/icone-qualidade.svg" alt="pedido"
                    width={200}
                  />
                </div>
                <div>
                  <p>
                    <b className="flex justify-center pb-[22px] text-color21 medium">
                      Melhor qualidade
                    </b>
                  </p>

                  <span className="text-colorTextOut text-[15px] pt-0 px-6 pb-3 flex text-center">
                    Não so a rapidez na entrega, a qualidade também é nosso forte.
                  </span>


                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}
export default ServiceComponent