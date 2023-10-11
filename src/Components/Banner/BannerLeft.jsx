import { Facebook, Instagram, Twitter } from "feather-icons-react/build/IconComponents"
import { BsWhatsapp } from 'react-icons/bs'

const BannerLeft = () => {

  const icons = [
    <Facebook />,
    <Instagram />,
    <Twitter />
  ]
  const redes = [
    'https://www.facebook.com/hiago.ferreira.39750/',
    'https://www.instagram.com/hiagocf19/',
    'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',

  ]

  return (
    <div className="sm:flex-1 sm:p-2.5 mr-2.5">
      {/* TEXTOS DO BANNER */}
      <div className="medium sm:text-[66px] text-[35px] text-color21">

        <b className="text-justfy">Escolha sua comida <strong className="text-colorPrimary">favorita.</strong>
        </b>

        <p className="my-3.5 text-[20px]  text-base text-colorText text-justify">
          Desfrute de uma experiência gastronômica inovadora e personalizada em nosso restaurante com menu digital. Satisfaça seus desejos culinários com um toque de tecnologia.
        </p>
      </div>
      {/*BOTÕES DO BANNER */}
      <div className="flex flex-col sm:flex-row">
        <button className=" mr-3 mt-2.5 py-3.5 sm:px-5 p-2 bg-colorPrimary rounded-xl text-colorWhite sm:text-color21  hover:shadow-xl hover:bg-colorDestaque w-[12.5rem] sm:h-14">
          <a href="#Cardapio" className="medium">Ver Cardápio
          </a>
        </button>
        <button className="mr-3 mt-2.5 py-3.5 sm:px-5 p-2 bg-colorPrimary sm:bg-[#FFF] sm:text-color21 rounded-xl text-colorWhite  hover:shadow-xl hover:bg-colorDestaque w-[12.5rem] sm:h-14 sm:flex sm:items-center ">
          <a href="https://api.whatsapp.com/send/?phone=5531982033698&text&type=phone_number&app_absent=0" className="flex gap-2 items-center px-2 sm:px-0">
            <BsWhatsapp size={20} />
            <p className="medium">(31) 982033698 </p>
          </a>
        </button>
      </div>
      {/*   ICONES SOCIAIS  */}
      <div className="flex gap-8 pt-10 sm:pt-0">
        {icons.map((rede, i) => (
          <button key={i} className="flex justufy-baseline my-10 py-2.5 px-2.5  rounded-xl text-[18px] bg-colorWhite text-color21 shadow-xl hover:bg-colorPrimary">
            <a className="itemSocial" href={redes[i]}>{rede}</a>
          </button>
        ))}

      </div>

    </div>
  )
}
export default BannerLeft