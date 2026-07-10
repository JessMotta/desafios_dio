import { useEffect, useState } from 'react';
import type { ITodo } from '../types/todo';
import { getTodosByUserId } from '../services/TodoService';

export const useTodo = (userId: number | null) => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const loadTodos = async () => {
			try {
				if (userId && userId > 0) {
					const data = await getTodosByUserId(userId);
					setTodos(data);
					setLoading(false);
				} else {
					setError('ID do usuário inválido');
				}
			} catch (error) {
				const message =
					error instanceof Error
						? error.message
						: 'Erro desconhecido';
				setError(message);
			} finally {
				setLoading(false);
			}
		};
		loadTodos();
	}, [userId]);

	return { todos, loading, error };
};
