import Services from "@/pages/home/_components/services";
import Banner from "./_components/banner";
import Header from "./_components/header";
import CardapioComponent from "@/Components/Cardapio/cardapio";

const Home = () => {
  return (
    <div>
      <Header />

      <Banner />
      <Services />
      <CardapioComponent />
      {/*  <FeedbackComponent />
        <ReservasComponent />
        <FooterComponent /> */}
    </div>
  );
};
export default Home;
