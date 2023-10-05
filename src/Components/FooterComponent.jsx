import { Instagram } from "feather-icons-react/build/IconComponents"

import Facebook from "feather-icons-react/build/IconComponents/Facebook"
import { AiOutlineWhatsApp } from "react-icons/ai"

const FooterComponent = () => {
  const redes = [
    {
      rede: "https://www.facebook.com/hiago.ferreira.39750",
      icon: <Facebook size={25} />
    },
    {
      rede: "https://api.whatsapp.com/send/?phone=5531982033698&text&type=phone_number&app_absent=0",
      icon: <AiOutlineWhatsApp size={25} />
    },
    {
      rede: "https://www.instagram.com/hiagocf19/",
      icon: <Instagram size={25} />
    }



  ]
  return (
    <>
      <footer>
        <div className="flex justify-center items-center sm:gap-[150px] gap- flex-col sm:flex-row bg-colorSecondary">
          <div className=" ">
            <img src="assets/definitivo.svg" className="w-[130px] h-[100px]" />
          </div>
          <div className="w-[400px] flex justify-center medium text-[18px] text-color21 hover:text-colorPrimary cursor-pointer py-4">
            <a href="https://api.whatsapp.com/send/?phone=5531982033698&text&type=phone_number&app_absent=0">
              <b >Hiago Ferreira &copy;
              </b>
            </a>

          </div>
          <div className="w-[200px] hidden justify-center gap-6 sm:block">
            <div className="flex gap-6">
              {redes.map((rede, i) => (

                <a
                  className="bg-colorWhite p-3 rounded-xl hover:bg-colorPrimary"
                  href={rede.rede}
                  key={i}> {rede.icon}</a>
              ))}
            </div>



          </div>
        </div>
      </footer>
    </>
  )
}
export default FooterComponent