
import BannerRight from "./BannerRight"
import BannerLeft from "./BannerLeft"
import '../../styles/main.css'
const BannerComponent = () => {

  return (
    <>
      <section >

        <div className="flex w-auto sm:mx-44 p-8 sm:p-0">
          <BannerLeft />
          <div className="hidden sm:block">
            <BannerRight />
          </div>

        </div >


      </section >
    </>
  )
}
export default BannerComponent