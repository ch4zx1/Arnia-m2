import Movielist from "./components/movielist/Movielist";

function App() {

	const Lista = [
		{
			id: 1,
			name: "Homem Aranha: Longe de casa",
			ano: 2019,
			diretor: "Jon Watts"
		},
		{
			id: 2,
			name: "Vingadores: Ultimato",
			ano: 2019,
			diretor: "Anthony Russo, Joe Russo"
		},
		{
			id: 3,
			name: "Pantera Negra",
			ano: 2018,
			diretor: "Ryan Coogler"
		},
		{
			id: 4,
			name: "Capitã Marvel",
			ano: 2019,
			diretor: "Anna Boden, Ryan Fleck"
		}
	];


  return (
    <>
    <h1>MovieList</h1>
	<Movielist array={Lista}></Movielist>
    </>
  )
}

export default App
