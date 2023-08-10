
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./paginas/produtos/Produtos";
import Carrinho from "./paginas/carrinho/Carrinho";
import Checkout from "./paginas/checkout/Checkout";

function App() {

  return (
	<BrowserRouter>
	<Routes>
		<Route path="/" element={<Produtos />}></Route>
		<Route path="/carrinho" element={<Carrinho />}></Route>
		<Route path="/checkout" element={<Checkout />}></Route>
	</Routes>
  </BrowserRouter>
  )
}

export default App
