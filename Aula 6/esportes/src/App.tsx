import Header from "./components/header/Header"
import Home from "./paginas/home/Home"
import Noticia from "./paginas/noticia/Noticia"
import * as S from './styles'
import { PaginaContext } from './context/CreateContext.ts'
import { useState } from "react"

const Noticias = [
	{
		id: 1,
		img: './src/assets/messi.svg',
		titulo: '"Estamos mortos. É um golpe muito duro", diz Messi após derrota da Argentina',
		descricao: 'O atacante Lionel Messi, da Argentina, usou palavras fortes para expressar a tristeza pela derrota por 2 a 1 para a Arábia Saudita, nesta terça-feira, na abertura do Grupo C da Copa do Mundo...',
		author: 'julinho',
		data: '17/02/2002',
		content: 'O atacante Lionel Messi, da Argentina, usou palavras fortes para expressar a tristeza pela derrota por 2 a 1 para a Arábia Saudita, nesta terça-feira, na abertura do Grupo C da Copa do Mundo. Com a nação argentina repleta de expectativas e fervor futebolístico, a surpreendente derrota no palco mundial não apenas abalou os torcedores, mas também fez ecoar a frustração nos corações de todos os jogadores da seleção. Enquanto os olhares de milhões de fãs estavam voltados para a atuação magistral de Messi, a partida se desenrolou de maneira inesperada, deixando um gosto amargo nos lábios dos argentinos. O craque, conhecido por sua habilidade incomparável e liderança inspiradora, compartilhou sua decepção em uma entrevista pós-jogo, onde suas palavras capturaram a mistura de emoções que assombrava o vestiário da equipe,"Esta derrota é um golpe duro para todos nós", disse Messi, visivelmente abatido. "Trabalhamos incansavelmente nos treinos e nutrimos a esperança de representar nossa nação da melhor maneira possível. No entanto, as circunstâncias do jogo nos empurraram para um resultado que não reflete nossa dedicação e determinação." As esperanças de redenção agora residem na próxima partida do Grupo C, onde a Argentina enfrentará desafios adicionais para garantir sua trajetória no torneio. O abatimento causado pela derrota serve como um lembrete de que, no futebol, cada vitória e cada derrota têm o poder de moldar narrativas maiores e evocar'
	},
	{
		id: 2,
		img: './src/assets/futebol.svg',
		titulo: 'Bale marca, e País de Gales busca empate com os Estados Unidos',
		descricao: 'O jogo teve dois tempos bem distintos. O primeiro, dominado amplamente pelos Estados Unidos, que abriram o placar com Weah, mas não souberam aproveitar o nulo ataque galês para fazer mais gols. Na segunda etapa, País de Gales mudou...',
		author: 'renatinho',
		data: '12/09/2012',
		content: 'O jogo teve dois tempos bem distintos. O primeiro, dominado amplamente pelos Estados Unidos, que abriram o placar com Weah, mas não souberam aproveitar o nulo ataque galês para fazer mais gols. Na segunda etapa, País de Gales mudou de postura, entrou no jogo e passou a levar perigo, sobretudo em jogadas aéreas. Após boas chances perdidas de cabeça, Bale sofreu pênalti. O craque cobrou e empatou a partida. Johnson perdeu a chance da virada em arrancada no fim. No fim das contas, um empate justo. A etapa inicial teve domínio da seleção americana, traduzido em posse de bola, boas chances e anulação quase total do setor ofensivo de Gales. Sargent acertou a trave, aos 10 minutos. Aos 35, Tim Weah, em grande enfiada de bola de Pulisic, abriu o placar para fazer justiça ao que se apresentava no jogo. País de Gales precisava de mais atitude e do talento de Bale, que até então só havia aparecido ao levar um cartão amarelo. Na volta do intervalo, País de Gales finalmente se encontrou na partida. Com a entrada de Moore, de 1,96m, os galeses passaram a levar mais perigo, sobretudo em jogadas aéreas. Bem mais presente no ataque, Gales quase foi às redes com o próprio atacante e com Ben Davies, ambos em cabeçadas. Aos 36, os galeses empataram com Bale, em pênalti sofrido por ele mesmo. O jovem Johnson teve em seus pés a bola da virada, mas chutou em cima do goleiro Turner, aos 43. A queda de produção americana na etapa final foi evidente. Após longos acréscimos, a igualdade prevaleceu. O Grupo B tem a liderança da Inglaterra, que goleou o Irã por 6 a 2 nesta segunda. Com o empate, País de Gales e Estados Unidos estão juntos em segundo lugar. Os norte-americanos voltam a campo na próxima sexta-feira (25), diante da Inglaterra, às 16h (de Brasília), no estádio Al Bayt. Também pela 2ª rodada da chave, Gales terá pela frente o Irã, no mesmo dia, às 7h (de Brasília), no estádio Ahmad Bin Ali.'
	}
]

function App() {

	const [pagina, setPagina] = useState(0);

	return(
		<PaginaContext.Provider value={[pagina, setPagina]}>
		<>
		<Header categoria="Esportes"></Header>
		<S.ContainerBody>
		{pagina===0 && <Home array={Noticias}></Home>}
		{pagina===1 && <Noticia array={Noticias[0]}></Noticia>}
		{pagina===2 && <Noticia array={Noticias[1]}></Noticia>}
		</S.ContainerBody>
		</>
		</PaginaContext.Provider>
	)
}

export default App