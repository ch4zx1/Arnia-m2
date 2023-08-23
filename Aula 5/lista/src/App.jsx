//Crie um componente ListaTarefas que recebe uma lista de objetos de tarefas (com propriedades como id, texto e concluida) como prop. Renderize essas tarefas em elementos <li>. Ao clicar em uma tarefa, ela deve alternar entre concluída e não concluída. Adicione, também, um botão "Excluir" para cada tarefa. Ao clicar no botão, a tarefa deve ser removida da lista.

import ListaTarefas from "./componentes/ListaTarefas"

function App() {
	
	const itens = [
		{
			id: 1,
			texto: 'Fazer a cama',
			concluida: false
			},
			{
			id: 2,
			texto: 'Responder e-mails',
			concluida: false
			},
			{
			id: 3,
			texto: 'Ir à academia',
			concluida: false
			},
			{
			id: 4,
			texto: 'Comprar mantimentos',
			concluida: false
			},
			{
			id: 5,
			texto: 'Ler um capítulo do livro',
			concluida: false
			},
			{
			id: 6,
			texto: 'Fazer uma caminhada',
			concluida: false
			},
			{
			id: 7,
			texto: 'Assistir a um filme novo',
			concluida: false
			},
			{
			id: 8,
			texto: 'Ligar para um amigo',
			concluida: false
			},
			{
			id: 9,
			texto: 'Limpar a cozinha',
			concluida: false
			},
			{
			id: 10,
			texto: 'Escrever no diário',
			concluida: false
			},
			{
			id: 11,
			texto: 'Aprender uma nova receita',
			concluida: false
			},
			{
			id: 12,
			texto: 'Fazer alongamentos',
			concluida: false
			},
			{
			id: 13,
			texto: 'Assistir a um tutorial online',
			concluida: false
			},
			{
			id: 14,
			texto: 'Organizar o escritório',
			concluida: false
			},
			{
			id: 15,
			texto: 'Fazer uma doação',
			concluida: false
			},
			{
			id: 16,
			texto: 'Planejar as próximas férias',
			concluida: false
			},
			{
			id: 17,
			texto: 'Aprender uma nova habilidade',
			concluida: false
			},
			{
			id: 18,
			texto: 'Assistir a uma palestra online',
			concluida: false
			},
			{
			id: 19,
			texto: 'Arrumar o armário',
			concluida: false
			},
			{
			id: 20,
			texto: 'Fazer compras online',
			concluida: false
			},
			{
			id: 21,
			texto: 'Montar um quebra-cabeça',
			concluida: false
			},
			{
			id: 22,
			texto: 'Passear com o cachorro',
			concluida: false
			},
			{
			id: 23,
			texto: 'Assistir a um documentário',
			concluida: false
			},
			{
			id: 24,
			texto: 'Praticar meditação',
			concluida: false
			},
			{
			id: 25,
			texto: 'Fazer uma aula online',
			concluida: false
			},
			{
			id: 26,
			texto: 'Visitar um museu',
			concluida: false
			},
			{
			id: 27,
			texto: 'Fazer um bolo caseiro',
			concluida: false
			},
			{
			id: 28,
			texto: 'Aprender a tocar uma música',
			concluida: false
			},
			{
			id: 29,
			texto: 'Assistir ao nascer do sol',
			concluida: false
			},
			{
			id: 30,
			texto: 'Explorar um novo bairro',
			concluida: false
			}
	]

  return (
    <>
	<h1>Lista de afazeres</h1>
	<div style={{display: "flex", flexDirection: "column", gap: 20}}>
	<ListaTarefas itens={itens}></ListaTarefas>
	</div>
    </>
  )
}

export default App
