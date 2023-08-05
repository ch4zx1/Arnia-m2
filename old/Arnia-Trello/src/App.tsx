import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";

function App() 
{
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/register" element={<Register/>}/>
				</Routes>
			</BrowserRouter>
		</div>  )
}

export default App
