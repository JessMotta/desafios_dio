import type { ITodo } from '../types/todo';
import { TodoSchema } from '../types/todo.schema';
import { api } from './api';

export const getTodosByUserId = async (userId: number): Promise<ITodo[]> => {
	try {
		const { data } = await api.get(`/todos?userId=${userId}`);
		return TodoSchema.array().parse(data);
	} catch (error: any) {
		if (error.response?.status === 404) {
			throw new Error('Tarefas não encontradas');
		}
		throw error;
	}
};
