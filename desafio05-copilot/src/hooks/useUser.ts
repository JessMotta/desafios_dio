import { useEffect, useState } from 'react';
import type { IUser } from '../types/user';
import { getUserById } from '../services/UserService';

export const useUser = (id: number | null) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		if (id === null) {
			setLoading(false);
			return;
		}

		const loadUser = async () => {
			setLoading(true);
			setError('');
			try {
				const data = await getUserById(id);
				setUser(data);
			} catch (error) {
				const message =
					error instanceof Error
						? error.message
						: 'erro desconhecido';
				setError(message);
				setUser(null);
			} finally {
				setLoading(false);
			}
		};
		loadUser();
	}, [id]);

	return { user, loading, error };
};
