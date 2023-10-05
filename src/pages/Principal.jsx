import HeaderComponent from "../Components/HeaderComponent"
import BannerComponent from "../Components/Banner/BannerComponent"
import ServiceComponent from "../Components/ServiceComponent"
import CardapioComponent from "../Components/Cardapio/CardapioComponent"
import FeedbackComponent from "../Components/FeedBackComponent"
import ReservasComponent from "../Components/ReservasComponent"
import FooterComponent from "../Components/FooterComponent"

const Principal = () => {

  return (
    <>

      <div className="flex flex-col gap-[70px] sm:gap-[120px] bg-colorBackground box-content overflow-x-hidden sm:overflow-y-hidden animate__animated animate__fadeIn notranslate">
        <HeaderComponent />
        <BannerComponent />
        <ServiceComponent />
        <CardapioComponent />
        <FeedbackComponent />
        <ReservasComponent />
        <FooterComponent />

      </div>

    </>

  )
}
export default Principal