const Banner = () => {
  return (
    <>
      <div
        className=" w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/burger-background.jpeg')" }}
      >
        <div className="w-full h-20" />
        <div className="h-[80vh] w-1/2 flex items-center mx-20 ">
          <div className="text-secondary/80">
            <span className="uppercase font-medium">Hrest food</span>
            <p className="text-[50px] font-bold uppercase">
              <strong className="text-primary">Hambúrgueres</strong> artesanais
              que <span className="text-primary">conquistam o paladar</span>
            </p>
            <span className="text-lg font-medium text-secondary/80">
              Nossos hambúrgueres são feitos com ingredientes frescos e
              selecionados, garantindo sabor e qualidade a cada mordida. Com um
              toque artesanal e um compromisso com a excelência, levamos até
              você a melhor experiência gastronômica, direto no conforto da sua
              casa. Escolha o seu favorito e aproveite!
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
