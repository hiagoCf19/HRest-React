
import "./styles/index.css"
import "./styles/main.css"
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Principal from "./pages/Principal"
import CarrinhoComponent from './Components/Carrinho/CarrinhoComponent'
import RotaNula from "./Components/RotaNulaComponent"
import Data from './Components/DataComponent'
import { CarProvider } from "./Context/CarrinhoContext"
import { AdrsProvider } from "./Context/AdressContext"
function RoutesApp() {

  return (


    <CarProvider>
      <BrowserRouter>
        <AdrsProvider>
          <Routes>
            <Route path="/" element={<Data />} />
            <Route path='/home' element={<Principal />} />
            <Route path='/meu-carrinho' element={<CarrinhoComponent />} />
            <Route path='*' element={<RotaNula />} />

          </Routes>
        </AdrsProvider>
      </BrowserRouter>
    </CarProvider>

  )
}

export default RoutesApp
