/* eslint-disable react/prop-types */
import Movies from "./Movies"

function Movielist({array})
{
	return(
	<div>
	{array.map((item) => (
		<div key={item.id}>
		<Movies nome={item.name} ano={item.ano} diretor={item.diretor}></Movies>
		</div> 
	))}
	</div>
	)

}

export default Movielist