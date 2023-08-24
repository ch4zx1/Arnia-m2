import { createContext, Dispatch, SetStateAction } from "react";


type Props = [
	number,
	Dispatch<SetStateAction<number>>
]

export const PaginaContext = createContext<Props>([0, () => 0]);