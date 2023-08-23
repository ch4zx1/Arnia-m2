/* eslint-disable react/prop-types */

function ListaNumeros({ lista }){
	return (
		<>
		<ul>
			{lista.filter(numero => numero % 2 == 0).map((nfiltrado) => <><li>{nfiltrado}</li></>)}
		</ul>
		</>
	)
}

export default ListaNumeros