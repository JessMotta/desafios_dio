import { useParams } from "react-router-dom";
import { useTodo } from "../../hooks/useTodo";


export default function Todo() {
	const { id } = useParams()
	const userId = id ? Number(id) : null

	const { todos, loading, error } = useTodo(userId)


	if (loading) {
		return <main className="animate-pulse text-2xl h-full w-full mx-auto text-center mt-48">Aguardando dados ...</main>
	}

	if (error) {
		return <main className="text-2xl h-full w-full mx-auto text-center my-auto text-red-500  mt-48">{error}</main>
	}

	return todos && todos.length > 0 ? (
		<main>{todos.map((todo) => (
			<div key={todo.id} className="border border-gray-500 rounded-lg m-6 p-2">
				<h1 className="text-2xl text-blue-600">{todo.title}</h1>
				<p className={todo.completed ? 'text-green-500' : 'text-red-500'}>{todo.completed ? 'Concluída' : 'Pendente'}</p>
			</div>
		))}
		</main>
	) : <main><h1 className="flex justify-center items-center text-4xl  mt-20">Sem tarefas. Vai curtir a vida!</h1></main>
}
