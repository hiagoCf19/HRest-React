import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from "./pages/main"
// import CarrinhoComponent from './Components/Carrinho/CarrinhoComponent'
// import RotaNula from "./Components/RotaNulaComponent"
// import { CarProvider } from "./Context/CarrinhoContext"
// import { AdrsProvider } from "./Context/AdressContext"
import { UserProvider } from "./Context/user-context";
import Initial from "./pages/initial/page";
import Home from "./pages/home/page";
import { CarProvider } from "./Context/cart-context";
function RoutesApp() {
  return (
    <UserProvider>
      <CarProvider>
        <BrowserRouter>
          {/* <AdrsProvider> */}
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/home" element={<Home />} />
            {/*    <Route path='/meu-carrinho' element={<CarrinhoComponent />} />
            <Route path='*' element={<RotaNula />} /> */}
          </Routes>
          {/* </AdrsProvider> */}
        </BrowserRouter>
      </CarProvider>
    </UserProvider>
  );
}

export default RoutesApp;
