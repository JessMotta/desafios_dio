import type { IUser } from '../types/user';
import { UserSchema } from '../types/user.schema';
import { api } from './api';

export const getUserById = async (id: number): Promise<IUser> => {
	try {
		const { data } = await api.get(`/users/${id}`);
		return UserSchema.parse(data);
	} catch (error: any) {
		if (error.response?.status === 404) {
			throw new Error('Usuário não encontrado');
		}
		throw error;
	}
};
