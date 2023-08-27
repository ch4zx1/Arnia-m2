import { useEffect, useState } from 'react'
import * as S from './styles'

type ArrayProps = {
	array: string[],
	type: 'asc' | 'dsc'
}

function Lista({ array, type }: ArrayProps)
{
	const [lista, setLista] = useState<string[]>(array)

	useEffect(() => {
		if (type === 'asc')
		{
			const tempLista = [...lista]
			setLista(tempLista.sort((a, b) => a.localeCompare(b)))
		}
		else if (type == 'dsc')
		{
			const tempLista = [...lista]
			setLista(tempLista.sort((a, b) => b.localeCompare(a)))
		}
	}, [type, lista])

	return(
		<>
		<S.Body>
		<S.ContainerHeader>
		<h1>Lista de compras</h1>
		</S.ContainerHeader>
		{lista.map((item) =>
		<span>{item}</span>)}
		</S.Body>
		</>
	)
}

export default Lista