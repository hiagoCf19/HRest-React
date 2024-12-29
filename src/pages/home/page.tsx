import Header from "./_components/header";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-[70px] sm:gap-[120px] bg-colorBackground box-content overflow-x-hidden sm:overflow-y-hidden animate__animated animate__fadeIn notranslate">
        <Header />
        <div className="sm:h-[80px]" />
        {/* <BannerComponent />
        <ServiceComponent />
        <CardapioComponent />
        <FeedbackComponent />
        <ReservasComponent />
        <FooterComponent /> */}
      </div>
    </>
  );
};
export default Home;
