
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./paginas/produtos/Produtos";
import Carrinho from "./paginas/carrinho/Carrinho";
import Checkout from "./paginas/checkout/Checkout";
import { ContadorContext, SalvarJogos } from "./context/CreateContext";
import { useState } from "react";

function App() {
	
	const [jogos, setJogos] = useState([]);
	const [contador, setContador] = useState(0);

	return (
	<SalvarJogos.Provider value={[jogos, setJogos]}>
		<ContadorContext.Provider value={[contador, setContador]}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Produtos />}></Route>
					<Route path="/carrinho" element={<Carrinho />}></Route>
					<Route path="/checkout" element={<Checkout />}></Route>
				</Routes>
			</BrowserRouter>
		</ContadorContext.Provider>
	</SalvarJogos.Provider>
	)
}

export default App