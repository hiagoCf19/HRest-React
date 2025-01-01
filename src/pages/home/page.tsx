import Services from "@/pages/home/_components/services";
import Banner from "./_components/banner";
import Header from "./_components/header";
import CardapioComponent from "@/pages/home/_components/cardapio";
import FeedbackComponent from "./_components/feedback";
import Reserva from "./_components/reserva";
import { Footer } from "./_components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <CardapioComponent />
      <FeedbackComponent />
      <Reserva />
      <Footer />
    </div>
  );
};
export default Home;
